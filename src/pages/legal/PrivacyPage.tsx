import Seo from '@/components/seo/Seo';

const sections = [
  {
    title: 'Information we collect',
    body: 'Appointment forms capture your name, contact details, treatment interests, and optional health notes so that our clinical team can prepare personalized plans. We also log analytics events (via GA4/GTM when enabled) to improve website experience.',
  },
  {
    title: 'How information is used',
    body: 'Data is accessed only by the Skin 101 care team to schedule appointments, share medical advice, or send reminders. We never sell or rent your information.',
  },
  {
    title: 'Security & retention',
    body: 'Records are stored in encrypted practice-management tools with role-based access. Email data is retained for as long as required to provide care unless you request deletion.',
  },
  {
    title: 'Your rights',
    body: 'You can request updates, access, or deletion of your stored data by emailing surgery101clinic@gmail.com. We respond within seven business days.',
  },
];

const PrivacyPage = () => (
  <>
    <Seo
      title="Privacy Policy"
      description="How Skin 101 collects, stores, and protects your information when you interact with our clinic."
      canonical="https://www.skin101clinic.in/privacy"
    />
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 19 Nov 2025</p>
        <p className="mt-6 text-base text-muted">
          Skin 101 is committed to safeguarding your personal information. This policy outlines what we
          collect, why we collect it, and how you can control your data.
        </p>
        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
              <p className="mt-2 text-sm text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;


