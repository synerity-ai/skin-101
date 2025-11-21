import Seo from '@/components/seo/Seo';

const listItems = [
  'All medical advice is provided only after an in-person or virtual consultation with Dr. Tanvi.',
  'Treatment outcomes vary per individual and depend on adherence to the recommended plan.',
  'Pricing is subject to change; the final estimate is shared during consultation.',
  'By submitting the contact form you consent to being contacted via phone, email, or WhatsApp.',
  'The website content is informational and should not replace medical diagnosis.',
];

const TermsPage = () => (
  <>
    <Seo
      title="Terms of Service"
      description="Understand the usage terms for the Skin 101 website and clinical services."
      canonical="https://www.skin101clinic.in/terms"
    />
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold text-ink">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted">Effective: 19 Nov 2025</p>
        <p className="mt-6 text-base text-muted">
          These terms govern your use of the Skin 101 website and outline our responsibilities as a medical
          practice.
        </p>
        <ul className="mt-8 space-y-4 text-sm text-muted">
          {listItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-primary">
                ●
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Questions? Email{' '}
          <a href="mailto:surgery101clinic@gmail.com" className="text-primary">
            surgery101clinic@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  </>
);

export default TermsPage;


