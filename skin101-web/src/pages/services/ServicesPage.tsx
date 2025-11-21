import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { serviceCategories, services } from '@/content/services';

const ServicesPage = () => {
  const [params] = useSearchParams();
  const focus = params.get('focus');
  const focusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (focus && focusRef.current) {
      focusRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [focus]);

  return (
    <>
      <Seo
        title="Services"
        description="Explore Skin 101’s dermatology, laser, and hair regrowth services. Every plan is personalized for Indian skin and lifestyle."
        canonical="https://www.skin101clinic.in/services"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Services</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">
            Comprehensive Skin, Laser &amp; Hair Programs
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            We map layered treatment journeys—quick refreshers for big events, corrective plans for chronic
            concerns, and concierge-style memberships for year-round maintenance.
          </p>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const categoryServices = services.filter((service) => service.category === category.id);

        return (
          <section
            key={category.id}
            ref={focus === category.id ? focusRef : null}
            className="bg-mist"
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted">{category.name}</p>
                  <h2 id={`${category.id}-heading`} className="mt-2 font-serif text-3xl font-semibold text-ink">
                    {category.summary}
                  </h2>
                </div>
                <Link
                  to="/contact#appointment"
                  className="rounded-full border border-primary/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:border-primary"
                >
                  Plan with doctor
                </Link>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {categoryServices.map((service) => (
                  <article key={service.slug} className="flex flex-col rounded-3xl bg-white p-6 shadow-card">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                      <span>{service.category}</span>
                      {service.readTime ? <span>{service.readTime}</span> : null}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-ink">{service.name}</h3>
                    <p className="mt-4 text-sm text-muted">{service.excerpt}</p>
                    <ul className="mt-4 space-y-2 text-sm text-ink/80">
                      {service.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-primary">
                            ●
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      View details →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServicesPage;


