import { Link } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { blogPosts } from '@/content/blog';

const BlogPage = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));

  return (
    <>
      <Seo
        title="Blog"
        description="Dermatology, laser, and hair-care insights curated by Dr. Tanvi Komawar Adgudwar."
        canonical="https://www.skin101clinic.in/blog"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Blog</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Insights &amp; Clinic Notes</h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            Practical advice on skincare, hormone-friendly routines, laser readiness, and scalp rituals.
          </p>
        </div>
      </section>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-3xl bg-white p-6 shadow-card">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                  <span>{post.category}</span>
                  <span>{new Date(post.publishedOn).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-ink">{post.title}</h2>
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
    </>
  );
};

export default BlogPage;


