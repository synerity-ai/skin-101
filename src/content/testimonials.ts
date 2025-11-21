export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'gmb-001',
    name: 'Shruti S.',
    rating: 5,
    service: 'Hydrafacial + Acne Management',
    date: 'Jan 2025',
    text: 'The team mapped my entire acne journey and never rushed me. Within two months my flare-ups calmed and makeup finally sits well.',
  },
  {
    id: 'gmb-002',
    name: 'Rahul K.',
    rating: 5,
    service: 'Laser Hair Removal',
    date: 'Dec 2024',
    text: 'Impressed with the hygiene protocols and the fact that the same therapist handles my sessions. Ingrowns are gone and skin tone is smooth.',
  },
  {
    id: 'gmb-003',
    name: 'Nikita P.',
    rating: 5,
    service: 'PRP + Hair Regrowth Program',
    date: 'Nov 2024',
    text: 'Dr. Tanvi customizes every visit based on stress and sleep. The portal reminders keep me accountable and new hair is already visible.',
  },
  {
    id: 'gmb-004',
    name: 'Arjun D.',
    rating: 4.8,
    service: 'Chemical Peels',
    date: 'Oct 2024',
    text: 'Love the “barrier-first” approach—my pigmentation has faded without any redness. The clinic ambience is relaxing and professional.',
  },
];

export const testimonialStats = {
  rating: 4.9,
  reviewCount: 320,
  googleUrl:
    'https://www.google.com/maps/place/Skin+101+%7C+Dr+Tanvi+Komawar+Adgudwar+(for reference)',
};

