import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Seo from '@/components/seo/Seo';
import { clinicInfo } from '@/content/config';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone')
    .regex(/^[\d+\-\s()]+$/, 'Phone can include numbers and + symbol'),
  serviceInterest: z.string().min(2, 'Select a service'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  message: z.string().min(10, 'Tell us a little more'),
  company: z.string().max(0, 'Leave this field blank'), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'skin',
      preferredDate: '',
      preferredTime: '',
      message: '',
      company: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'Unable to send message');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message');
    }
  };

  return (
    <>
      <Seo
        title="Contact Skin 101"
        description="Book an appointment with Skin 101 | Dr. Tanvi Komawar Adgudwar in Baner, Pune. Call, WhatsApp, or share your treatment goals via the secure form."
        canonical="https://www.skin101clinic.in/contact"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Contact</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Book an Appointment</h1>
          <p className="mt-4 text-base text-muted">
            Share your goals, preferred time, and any photos or lab notes. Our concierge will confirm within one
            business day and guide you through prep instructions.
          </p>
        </div>
      </section>

      <section className="bg-mist" id="appointment">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 py-16 md:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-white p-6 shadow-card"
            aria-describedby="contact-status"
          >
            <h2 className="font-serif text-2xl font-semibold text-ink">Tell us how we can help</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="serviceInterest">
                  Interested in
                </label>
                <select
                  id="serviceInterest"
                  {...register('serviceInterest')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                >
                  <option value="skin">Skin Treatments</option>
                  <option value="laser">Laser Treatments</option>
                  <option value="hair">Hair Treatments</option>
                  <option value="surgery">Surgery / OT</option>
                </select>
                {errors.serviceInterest ? (
                  <p className="mt-1 text-xs text-red-600">{errors.serviceInterest.message}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="preferredDate">
                  Preferred date
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  {...register('preferredDate')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                {errors.preferredDate ? (
                  <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
                ) : null}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="preferredTime">
                  Preferred time
                </label>
                <input
                  id="preferredTime"
                  type="time"
                  {...register('preferredTime')}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                {errors.preferredTime ? (
                  <p className="mt-1 text-xs text-red-600">{errors.preferredTime.message}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.3em] text-muted" htmlFor="message">
                Notes
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                placeholder="Describe your concern, current regimen, or share appointment goals."
              />
              {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
            </div>
            <div className="sr-only">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
              {errors.company ? <p className="text-xs text-red-600">{errors.company.message}</p> : null}
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending…' : 'Submit request'}
            </button>
            <div id="contact-status" aria-live="polite" className="mt-4 text-sm">
              {status === 'success' ? (
                <p className="text-green-600">Request received! Our concierge will reply within one business day.</p>
              ) : null}
              {status === 'error' ? <p className="text-red-600">{errorMessage}</p> : null}
            </div>
          </form>

          <div className="space-y-6">
            <article className="rounded-3xl bg-ink p-6 text-white shadow-card">
              <h2 className="font-serif text-2xl font-semibold">Clinic Coordinates</h2>
              <p className="mt-4 text-sm text-slate-200">
                {clinicInfo.address.line1}
                <br />
                {clinicInfo.address.line2}
                <br />
                {clinicInfo.address.landmark}
                <br />
                {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.postalCode}
              </p>
              <p className="mt-4 text-sm">
                Phone:{' '}
                <a href={`tel:${clinicInfo.phone}`} className="text-primary-light underline">
                  {clinicInfo.phoneDisplay}
                </a>
                <br />
                Email:{' '}
                <a href={`mailto:${clinicInfo.email}`} className="text-primary-light underline">
                  {clinicInfo.email}
                </a>
              </p>
              <p className="mt-4 text-sm">
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, '')}`}
                  className="text-primary-light underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {clinicInfo.whatsapp}
                </a>
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-300">Visitor counter</p>
              <p className="text-3xl font-semibold">{clinicInfo.visitorCount.toLocaleString()}</p>
            </article>
            <div className="rounded-3xl shadow-card">
              <iframe
                title="Skin 101 Baner location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120998.30982187834!2d73.75617671802847!3d18.610198779030167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff5e73e2cad%3A0x40a41504ce109e9b!2sSkin%20101%20%7C%20Dr%20Tanvi%20Komawar%20Adgudwar!5e0!3m2!1sen!2sin!4v1698917640549!5m2!1sen!2sin"
                width="100%"
                height="360"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full rounded-3xl border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;


