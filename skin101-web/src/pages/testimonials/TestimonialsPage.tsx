import { useState } from 'react';
import Seo from '@/components/seo/Seo';
import { testimonials, testimonialStats } from '@/content/testimonials';

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTestimonial = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
  };

  return (
    <>
      <Seo
        title="Testimonials"
        description="Read real stories from Skin 101 patients who trusted us with their skin, laser, and hair journeys."
        canonical="https://www.skin101clinic.in/testimonials"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Testimonials</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Collective Confidence</h1>
          <p className="mt-4 text-base text-muted">
            {testimonialStats.reviewCount}+ people across Baner, Balewadi, and Hinjawadi rely on Skin 101.
          </p>
          <div className="mt-8 inline-flex items-center gap-6 rounded-full bg-mist px-6 py-4 text-sm font-semibold text-ink">
            <span className="text-3xl">{testimonialStats.rating}</span>
            <span className="text-muted">
              Google rating ·{' '}
              <a href={testimonialStats.googleUrl} target="_blank" rel="noreferrer" className="text-primary underline">
                View on Google
              </a>
            </span>
            <span aria-hidden="true">•</span>
            <span>{testimonialStats.reviewCount}+ reviews</span>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted">{activeTestimonial.service}</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{activeTestimonial.name}</h2>
              </div>
              <div className="text-xl text-primary" aria-label={`${activeTestimonial.rating} star rating`}>
                {'★'.repeat(Math.round(activeTestimonial.rating))}
              </div>
            </div>
            <p className="mt-4 text-lg text-muted">“{activeTestimonial.text}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">{activeTestimonial.date}</p>
            <div className="mt-6 flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink"
                aria-label="Previous testimonial"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink"
                aria-label="Next testimonial"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((review) => (
              <article key={review.id} className="rounded-3xl bg-mist p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">{review.name}</h3>
                  <span className="text-sm font-semibold text-primary">{review.rating.toFixed(1)}</span>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{review.service}</p>
                <p className="mt-4 text-sm text-muted">{review.text}</p>
                <p className="mt-4 text-xs text-muted">{review.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;


