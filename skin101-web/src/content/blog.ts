export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Wellness';
  heroImage: string;
  readingTime: string;
  publishedOn: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'prp-to-exosomes-modern-hair-loss-solutions',
    title: 'From PRP to Exosomes: Modern Hair Loss Solutions That Actually Work',
    category: 'Hair',
    heroImage:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    readingTime: '6 min read',
    publishedOn: '2025-02-14',
    author: 'Dr. Tanvi Komawar Adgudwar',
    excerpt:
      'Regenerative medicine has changed how we approach hair fall. Here is how PRP, exosomes, and supportive therapies can stabilize shedding and restart dormant follicles.',
    content: [
      'Platelet-rich plasma (PRP) is packed with growth factors that jumpstart the anagen phase. At Skin 101 we use a double-spin process that yields a higher platelet concentration for dependable outcomes.',
      'Exosomes elevate those results by delivering a concentrated burst of signaling molecules that instruct follicles to repair faster. When combined with scalp priming, low-level laser therapy, and lifestyle coaching, patients report thicker ponytails within 12–16 weeks.',
      'Consistency is essential—calendared sessions plus nutraceutical support ensure follicles stay nourished between in-clinic visits.',
    ],
  },
  {
    slug: 'scalp-care-secrets-for-stronger-hair',
    title: 'Scalp Care Secrets: How a Healthy Scalp Leads to Stronger, Shinier Hair',
    category: 'Hair',
    heroImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    readingTime: '5 min read',
    publishedOn: '2025-01-30',
    author: 'Dr. Tanvi Komawar Adgudwar',
    excerpt:
      'Hair thrives when the scalp microbiome is balanced. Discover dermatologist-approved rituals that keep buildup, inflammation, and stress-triggered shedding at bay.',
    content: [
      'Think of the scalp as an extension of your facial skin—it requires gentle exfoliation, balanced cleansing, and targeted actives.',
      'Weekly scalp detox masks, sonic massage, and probiotic serums maintain circulation. For city dwellers combating pollution, antioxidant mists and UV shields are non-negotiable.',
      'Pair at-home rituals with quarterly in-clinic treatments such as Hydrafacial Keravive or mesotherapy for the best outcomes.',
    ],
  },
  {
    slug: 'hormonal-skin-changes-and-breakout-management',
    title: 'How Hormonal Changes Affect Your Skin and the Best Ways to Manage Breakouts',
    category: 'Skin',
    heroImage:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    readingTime: '7 min read',
    publishedOn: '2024-12-18',
    author: 'Dr. Tanvi Komawar Adgudwar',
    excerpt:
      'PCOS, postpartum shifts, and thyroid fluctuations can trigger reactive skin. Understand the hormonal crosstalk and how to regain clarity without compromising your barrier.',
    content: [
      'Hormones influence sebum production, inflammation, and pigmentation. That is why flare-ups often sync with cycles, fertility treatments, or medication changes.',
      'We pair lab work with clinical evaluation to design skin plans that include non-comedogenic routines, targeted peels, and oral support when needed.',
      'Education is key—knowing what to tweak before a flare keeps skin comfortable and reduces the emotional toll of sudden breakouts.',
    ],
  },
];

export const blogDictionary = blogPosts.reduce<Record<string, BlogPost>>((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {});

