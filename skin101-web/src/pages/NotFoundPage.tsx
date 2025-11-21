import { Link } from 'react-router-dom';
import Seo from '@/components/seo/Seo';

const NotFoundPage = () => (
  <>
    <Seo
      title="Page not found"
      description="The page you were looking for does not exist on Skin 101."
    />
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-muted">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">This page has moved</h1>
        <p className="mt-4 text-base text-muted">
          Try heading back to the homepage or reach out if you need something specific.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
            Back to home
          </Link>
          <Link
            to="/contact#appointment"
            className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFoundPage;


