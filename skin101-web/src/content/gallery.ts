export type GalleryCategory = 'Skin' | 'Laser' | 'Hair' | 'Clinic';

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  imageUrl: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'skin-hydrafacial',
    category: 'Skin',
    title: 'Hydrafacial Glow',
    description: 'Instant hydration boost captured seconds after serum infusion.',
    imageUrl:
      'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skin-peel',
    category: 'Skin',
    title: 'Brightening Peel',
    description: 'Clinical-grade peel with neutralizing mist to protect the barrier.',
    imageUrl:
      'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'laser-room',
    category: 'Laser',
    title: 'Laser Suite',
    description: 'Triple-wavelength diode platform inside our dedicated laser bay.',
    imageUrl:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'laser-hair-removal',
    category: 'Laser',
    title: 'Precision Hair Removal',
    description: 'Gliding hand-piece with integrated cooling for comfort.',
    imageUrl:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9356?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hair-consult',
    category: 'Hair',
    title: 'Trichology Consult',
    description: 'Scalp imaging session before a regrowth protocol.',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hair-prp',
    category: 'Hair',
    title: 'PRP Preparation',
    description: 'Sterile PRP prep bay with dedicated cold centrifuge.',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'clinic-lounge',
    category: 'Clinic',
    title: 'Patient Lounge',
    description: 'Warm seating with sunlight and privacy screens.',
    imageUrl:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'clinic-ot',
    category: 'Clinic',
    title: 'Day-Care OT',
    description: 'Sterile operating zone used for vitiligo surgery and ear lobe repair.',
    imageUrl:
      'https://images.unsplash.com/photo-1504439904031-93ded9f93e86?auto=format&fit=crop&w=900&q=80',
  },
];

export const galleryCategories: GalleryCategory[] = ['Skin', 'Laser', 'Hair', 'Clinic'];

