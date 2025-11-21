import { Link } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { clinicInfo } from '@/content/config';
import { serviceCategories, services } from '@/content/services';
import { blogPosts } from '@/content/blog';
import { testimonials, testimonialStats } from '@/content/testimonials';

const heroHighlights = [
  'Consultations led personally by Dr. Tanvi',
  'Medical-grade lasers & regenerative therapy',
  'Calm, hospitality-inspired clinic experience',
];

const valueProps = [
  {
    title: 'Barrier-First Dermatology',
    body: 'Every plan begins with VISIA imaging, hormone review, and lifestyle mapping so that actives respect your skin barrier.',
  },
  {
    title: 'Laser Suite with Privacy Pods',
    body: 'Triple-wavelength diode and Q-switched platforms are housed in temperature-controlled rooms for precision and comfort.',
  },
  {
    title: 'Hair Lab & Regrowth Lounge',
    body: 'Trichology-led regimens combine PRP, exosomes, and at-home tech with app-based progress dashboards.',
  },
];

const HomePage = () => {
  const featuredServices = services.filter((service) =>
    ['chemical-peels', 'laser-hair-removal', 'hair-regrowth-program'].includes(service.slug),
  );

  const featuredPosts = blogPosts.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <>
      <Seo
        title="Dermatology, Laser & Hair Restoration in Baner"
        description="Skin 101 is a premium dermatology, laser, and hair clinic in Baner offering bespoke care by Dr. Tanvi Komawar Adgudwar. Discover our signature skin, laser, and hair programs."
        canonical="https://www.skin101clinic.in/"
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted">{clinicInfo.taglinePrimary}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-5xl">
              Discover the Art of Radiant Skin with{' '}
              <span className="text-primary">{clinicInfo.address.city}&rsquo;s</span> trusted specialist.
            </h1>
            <p className="mt-6 text-lg text-muted">
              Personalized dermatology, laser aesthetics, and regenerative hair therapy designed for the
              pace of modern Pune. Expect transparent plans, clinical-grade tech, and aftercare that extends
              beyond the appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact#appointment"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
              >
                Call {clinicInfo.phoneDisplay}
              </a>
            </div>
            <ul className="mt-8 space-y-3">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-muted">
                  <span aria-hidden="true" className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ●
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
              alt="Dermatology expert performing consultation"
              loading="lazy"
              className="relative rounded-3xl object-cover shadow-card"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Google Rating</p>
              <p className="text-2xl font-semibold text-ink">
                {testimonialStats.rating} <span className="text-sm text-muted">/ 5</span>
              </p>
              <p className="text-xs text-muted">{testimonialStats.reviewCount}+ verified reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {valueProps.map((prop) => (
              <article key={prop.title} className="rounded-3xl bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{prop.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{prop.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Services</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
                Skin, Laser, and Hair Programs
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:text-primary-dark">
              View full catalog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((category) => (
              <article key={category.id} className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
                  <img
                    src={`${category.heroImage}&auto=compress&cs=tinysrgb`}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{category.name}</h3>
                <p className="mt-3 text-sm text-muted">{category.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/80">
                  {category.services.slice(0, 3).map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    if (!service) return null;
                    return (
                      <li key={slug} className="flex items-center gap-2">
                        <span aria-hidden="true" className="text-primary">
                          —
                        </span>
                        {service.name}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to={`/services?focus=${category.id}`}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Explore {category.name} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Flagship Protocols</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">Designed for Indian Skin & Hair</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.slug} className="flex flex-col rounded-3xl bg-white p-6 shadow-card">
                <p className="text-xs uppercase tracking-[0.4em] text-muted">{service.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{service.name}</h3>
                <p className="mt-4 flex-1 text-sm text-muted">{service.excerpt}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Client Stories</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">Testimonials from Baner</h2>
            </div>
            <Link to="/testimonials" className="text-sm font-semibold text-primary hover:text-primary-dark">
              See all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredTestimonials.map((review) => (
              <article key={review.id} className="rounded-3xl bg-mist p-6 shadow-card">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span aria-hidden="true">★★★★★</span>
                  <span className="font-semibold">{review.rating.toFixed(1)}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{review.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted">{review.service}</p>
                <p className="mt-4 text-sm text-muted">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted">Insights</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">Latest from the Skin 101 Blog</h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-primary hover:text-primary-dark">
              Browse articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-3xl bg-white p-6 shadow-card">
                <p className="text-xs uppercase tracking-[0.4em] text-muted">{post.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted">{post.readingTime}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-light">Next Step</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">
            Your journey to timeless beauty begins here.
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Share your skin or hair goals and we will map the exact combination of treatments, at-home care,
            and nutrition support needed to get you there comfortably.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact#appointment"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
            >
              Schedule a consultation
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;


