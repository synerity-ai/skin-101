import { Link, useNavigate, useParams } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { serviceCategories, serviceDictionary } from '@/content/services';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? serviceDictionary[slug] : undefined;

  if (!service) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Service</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Not found</h1>
          <p className="mt-4 text-base text-muted">The treatment you are looking for is not listed yet.</p>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Go back
          </button>
        </div>
      </section>
    );
  }

  const categoryMeta = serviceCategories.find((cat) => cat.id === service.category);

  return (
    <>
      <Seo
        title={`${service.name} in Baner, Pune`}
        description={service.excerpt}
        canonical={`https://www.skin101clinic.in/services/${service.slug}`}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">{categoryMeta?.name}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">{service.name}</h1>
          <p className="mt-4 text-base text-muted md:text-lg">{service.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact#appointment"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card"
            >
              Book this treatment
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6 lg:px-8">
          <article className="rounded-3xl bg-white p-6 shadow-card md:col-span-2">
            <h2 className="text-xl font-semibold text-ink">What to expect</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-ink p-6 text-white">
            <h2 className="text-xl font-semibold">Treatment Snapshot</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-primary-light">
                    ●
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-ink">Results you can look forward to</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <article key={outcome} className="rounded-3xl border border-slate-100 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{outcome}</h3>
                <p className="mt-3 text-sm text-muted">
                  We document every milestone with photography, treatment logs, and app-based journaling.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;


