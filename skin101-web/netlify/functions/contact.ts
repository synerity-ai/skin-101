import type { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  serviceInterest: z.string(),
  preferredDate: z.string(),
  preferredTime: z.string(),
  message: z.string(),
  company: z.string().optional(),
});

const rateLimitWindowMs = 60 * 1000;
const rateLimitCache = new Map<string, number>();

const getSendGridClient = () => {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY missing');
  }
  sgMail.setApiKey(apiKey);
};

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Request body missing' }),
    };
  }

  const ip =
    event.headers['client-ip'] ||
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    'unknown';

  const lastAttempt = rateLimitCache.get(ip);
  if (lastAttempt && Date.now() - lastAttempt < rateLimitWindowMs) {
    return {
      statusCode: 429,
      body: JSON.stringify({ success: false, message: 'Please wait before submitting again.' }),
    };
  }

  const parsed = contactSchema.safeParse(JSON.parse(event.body));
  if (!parsed.success) {
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false, message: 'Invalid payload' }),
    };
  }

  const payload = parsed.data;

  if (payload.company) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  try {
    getSendGridClient();

    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'surgery101clinic@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'no-reply@skin101clinic.in';

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      subject: `New Skin 101 enquiry from ${payload.fullName}`,
      replyTo: payload.email,
      text: `
Name: ${payload.fullName}
Email: ${payload.email}
Phone: ${payload.phone}
Service: ${payload.serviceInterest}
Preferred Date: ${payload.preferredDate}
Preferred Time: ${payload.preferredTime}

Message:
${payload.message}
`,
    });

    rateLimitCache.set(ip, Date.now());

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Unable to send email. Please try again later.',
      }),
    };
  }
};

export { handler };


