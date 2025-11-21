import { Link, useParams } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { blogDictionary } from '@/content/blog';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogDictionary[slug] : undefined;

  if (!post) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-ink">Article not found</h1>
          <p className="mt-4 text-base text-muted">Return to the blog for more clinical insights.</p>
          <Link to="/blog" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`https://www.skin101clinic.in/blog/${post.slug}`}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">{post.category}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">{post.title}</h1>
          <p className="mt-3 text-sm text-muted">
            {new Date(post.publishedOn).toLocaleDateString('en-IN', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            · {post.readingTime}
          </p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-mist p-6 text-sm text-muted">
            <p>
              Written by <span className="font-semibold text-ink">{post.author}</span> for patients visiting
              Skin 101, Baner. Book a consultation if you would like personalized guidance.
            </p>
            <Link to="/contact#appointment" className="mt-4 inline-flex text-primary">
              Book a consultation →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;


