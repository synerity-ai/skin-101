import { useState } from 'react';
import Seo from '@/components/seo/Seo';
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from '@/content/gallery';

const allCategories: Array<GalleryCategory | 'All'> = ['All', ...galleryCategories];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof allCategories)[number]>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const items = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Seo
        title="Clinic Gallery"
        description="Tour Skin 101’s clinic, laser suites, and treatment highlights through our curated image gallery."
        canonical="https://www.skin101clinic.in/gallery"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Gallery</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Inside Skin 101</h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            Browse our treatment suites, day-care OT, and real outcomes captured with patient consent.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {allCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${
                  activeCategory === category
                    ? 'bg-ink text-white shadow-card'
                    : 'bg-white text-ink shadow-card/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group text-left"
                aria-label={`Open lightbox for ${item.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200">
                  <img
                    src={`${item.imageUrl}&auto=compress`}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`${selectedItem.imageUrl}&auto=compress&w=1400`}
              alt={selectedItem.description}
              className="w-full object-cover"
            />
            <div className="space-y-1 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{selectedItem.category}</p>
              <h3 className="text-xl font-semibold text-ink">{selectedItem.title}</h3>
              <p className="text-sm text-muted">{selectedItem.description}</p>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GalleryPage;


