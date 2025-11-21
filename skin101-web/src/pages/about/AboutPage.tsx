import Seo from '@/components/seo/Seo';
import { clinicInfo } from '@/content/config';

const credentials = [
  'MD Dermatology, Venereology & Leprosy — Rajiv Gandhi University',
  'Fellowship in Aesthetic & Laser Medicine — European Society of Cosmetic & Aesthetic Dermatology',
  'International member, Indian Association of Dermatologists (IADVL)',
  'Certified in regenerative medicine (PRP + Exosomes) and trichology',
];

const carePillars = [
  {
    title: 'Evidence-led',
    text: 'We explain every ingredient, device, and protocol so you know exactly what is touching your skin.',
  },
  {
    title: 'Holistic',
    text: 'Nutrition, sleep hygiene, hormonal health, and mental wellness are reviewed alongside in-clinic care.',
  },
  {
    title: 'Continual Support',
    text: 'Post-care WhatsApp follow-ups, digital progress boards, and emergency slots keep you supported between visits.',
  },
];

const AboutPage = () => (
  <>
    <Seo
      title="About Dr. Tanvi Komawar Adgudwar"
      description="Learn about Dr. Tanvi’s dermatology journey, her clinical philosophy, and the Skin 101 care team serving Baner, Pune."
      canonical="https://www.skin101clinic.in/about"
    />
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-muted">About</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Meet Dr. Tanvi Komawar Adgudwar</h1>
          <p className="mt-6 text-lg text-muted">
            A dermatologist, laser surgeon, and trichologist with over a decade of experience, Dr. Tanvi
            blends clinical precision with an approachable bedside manner. Her consultations dive deep into
            root causes so that every protocol feels personal, achievable, and sustainable.
          </p>
          <div className="mt-8 rounded-3xl bg-mist p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Clinic Philosophy</p>
            <p className="mt-3 text-ink">
              &ldquo;Skin 101 is designed as a calm, judgement-free space. We listen first, educate next, and
              only then prescribe. Progress should feel collaborative, not prescriptive.&rdquo;
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            alt="Dr. Tanvi during a consultation"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-ink p-6 text-white">
              <p className="text-sm uppercase tracking-[0.4em] text-primary-light">Experience</p>
              <p className="mt-4 text-3xl font-semibold">12+ yrs</p>
              <p className="text-sm text-slate-200">Dermatology &amp; laser practice</p>
            </article>
            <article className="rounded-2xl border border-slate-100 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Surgeries</p>
              <p className="mt-4 text-3xl font-semibold text-ink">500+</p>
              <p className="text-sm text-muted">Vitiligo &amp; ear lobe procedures</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-ink">Credentials &amp; Memberships</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-ink/80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Care Pillars</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">What to expect at Skin 101</h2>
          <p className="mt-4 text-sm text-muted">
            Each visit is choreographed so you spend more time with the doctor and less time navigating
            paperwork. Dedicated care coordinators guide you from the moment you walk in to the final follow-up.
          </p>
        </div>
        <div className="grid gap-6">
          {carePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-slate-100 p-6 shadow-card">
              <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl bg-white p-6 shadow-card">
            <h2 className="font-serif text-2xl font-semibold text-ink">Clinic Hours &amp; Contact</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {clinicInfo.hours.map((slot) => (
                <li key={slot.day} className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>{slot.day}</span>
                  <span>
                    {slot.opens} – {slot.closes}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm">
              <p className="font-semibold text-ink">Address</p>
              <p className="mt-2 text-muted">
                {clinicInfo.address.line1}, {clinicInfo.address.line2}
                <br />
                {clinicInfo.address.landmark}
                <br />
                {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.postalCode}
              </p>
              <p className="mt-4 text-muted">
                Phone:{' '}
                <a href={`tel:${clinicInfo.phone}`} className="text-primary">
                  {clinicInfo.phoneDisplay}
                </a>
                <br />
                Email:{' '}
                <a href={`mailto:${clinicInfo.email}`} className="text-primary">
                  {clinicInfo.email}
                </a>
              </p>
            </div>
          </article>
          <article className="rounded-3xl bg-ink p-6 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-primary-light">Care Team</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">People-first hospitality</h2>
            <p className="mt-4 text-sm text-slate-200">
              Dr. Tanvi is supported by senior dermal therapists, a trichology nurse, and surgery coordinators.
              Every patient is paired with a dedicated WhatsApp concierge for ongoing tweaks, prescription
              refills, and reminders.
            </p>
            <p className="mt-6 text-sm text-primary-light/90">
              Fun fact: the playlist in our infusion lounge is updated monthly based on patient suggestions!
            </p>
          </article>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;


