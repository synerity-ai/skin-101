export type ServiceCategoryId = 'skin' | 'laser' | 'hair';

export type Service = {
  slug: string;
  name: string;
  excerpt: string;
  description: string[];
  category: ServiceCategoryId;
  highlights: string[];
  outcomes: string[];
  ctaLabel?: string;
  readTime?: string;
};

export type ServiceCategory = {
  id: ServiceCategoryId;
  name: string;
  summary: string;
  heroImage: string;
  services: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'skin',
    name: 'Skin Treatments',
    summary:
      'Advanced derma facials, resurfacing peels, and corrective protocols that restore clarity while protecting the skin barrier.',
    heroImage:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    services: [
      'chemical-peels',
      'carbon-facial',
      'hydrafacial',
      'acne-scar-management',
      'vampire-facial',
      'vitiligo-surgery',
      'ear-lobe-repair',
      'skin-health-program',
    ],
  },
  {
    id: 'laser',
    name: 'Laser Treatments',
    summary:
      'Medical-grade laser platforms for permanent hair reduction, tone correction, and minimally invasive surgical support.',
    heroImage:
      'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=80',
    services: [
      'laser-hair-removal',
      'laser-skin-toning',
      'mole-removal',
      'carbon-laser-facial',
      'laser-piles',
    ],
  },
  {
    id: 'hair',
    name: 'Hair Treatments',
    summary:
      'Trichology-led plans that combine growth boosters, scalp therapy, and regenerative medicine for resilient hair.',
    heroImage:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    services: ['hair-loss-treatment', 'hair-regrowth-program', 'prp-exosomes'],
  },
];

export const services: Service[] = [
  {
    slug: 'chemical-peels',
    name: 'Chemical Peels',
    category: 'skin',
    excerpt:
      'Customized resurfacing blends (lactic, salicylic, TCA) for glow, texture refinement, and acne control.',
    description: [
      'Each peel protocol is prescribed only after digital skin analysis, ensuring the active blend matches your Fitzpatrick score, barrier resilience, and current at-home regimen.',
      'Downtime options range from “lunchtime glow” peels to deeper corrective programs, with detailed prep and recovery guidance included.',
    ],
    highlights: [
      'Multi-acid stacks neutralized precisely to avoid PIH',
      'Barrier-first philosophy with post-care kits',
      'Add-on LED or oxygen dome boosters for repair',
    ],
    outcomes: ['Glass-skin luminosity', 'Balanced oil production', 'Accelerated cell turnover'],
  },
  {
    slug: 'carbon-facial',
    name: 'Carbon Facial',
    category: 'skin',
    excerpt:
      'Hollywood-favorite carbon laser facial that clarifies pores, reduces inflammation, and instantly brightens.',
    description: [
      'Activated carbon lotion binds to sebum and pollutants before a Q-switched laser vaporizes impurities without harming healthy tissue.',
      'Ideal before events or as part of an acne maintenance plan thanks to its anti-bacterial effect.',
    ],
    highlights: [
      'Non-invasive with zero downtime',
      'Targets stubborn T-zone congestion',
      'Safe for humid Indian climates',
    ],
    outcomes: ['Refined pores', 'Matte yet hydrated finish', 'Event-ready glow'],
  },
  {
    slug: 'hydrafacial',
    name: 'Hydrafacial',
    category: 'skin',
    excerpt:
      'Three-phase vortex cleansing, exfoliation, and infusion with medical-grade serums tailored to your skin goals.',
    description: [
      'We pair the classic Hydrafacial protocol with booster cocktails rich in peptides, antioxidants, and niacinamide to relieve urban skin stressors.',
      'Lymphatic drainage and LED add-ons are included to reduce puffiness and boost collagen.',
    ],
    highlights: [
      'Dermatologist-formulated booster menu',
      'Instantly soothing for sensitized skin',
      'Documented improvements after each visit',
    ],
    outcomes: ['Supple hydration', 'Even tone', 'Comfortable, balanced skin barrier'],
  },
  {
    slug: 'acne-scar-management',
    name: 'Managing Acne & Scars',
    category: 'skin',
    excerpt:
      'Combination therapies—microneedling RF, TCA CROSS, subcision, and customized skincare—to flatten scars and calm active acne.',
    description: [
      'Protocols are mapped according to scar morphology (box, ice pick, rolling) and may include oral support, blue/red light therapy, and enzymatic exfoliation.',
      'Lifestyle coaching plus nutrition guidance keep recurring breakouts in check.',
    ],
    highlights: [
      'Photography-backed progress tracking',
      'Pain-managed in-office procedures',
      'Holistic inflammation management',
    ],
    outcomes: ['Smoother texture', 'Reduced redness', 'Fewer breakouts long term'],
  },
  {
    slug: 'vampire-facial',
    name: 'Vampire Facial (PRP)',
    category: 'skin',
    excerpt:
      'Platelet-rich plasma stimulates collagen synthesis, fortifies thin skin, and restores natural radiance.',
    description: [
      'Dr. Tanvi performs every PRP extraction and injection personally, using double-spin technology for optimal platelet concentration.',
      'Microneedling delivery ensures uniform absorption while minimizing downtime.',
    ],
    highlights: [
      'Autologous and biocompatible',
      'Pair with exosomes for accelerated recovery',
      'Topical numbing + aftercare kit included',
    ],
    outcomes: ['Youthful firmness', 'Improved fine lines', 'Resilient skin barrier'],
  },
  {
    slug: 'vitiligo-surgery',
    name: 'Vitiligo Surgery',
    category: 'skin',
    excerpt:
      'Mini-punch grafting, suction blister grafts, and melanocyte transfer performed in a sterile day-care OT.',
    description: [
      'Ideal for stable vitiligo patches that haven’t changed for 12+ months.',
      'We combine surgery with narrowband UVB follow-ups to boost repigmentation.',
    ],
    highlights: [
      'Dedicated counselling for realistic outcomes',
      'Dressing reviews and pigmentation tracking',
      'Coordination with referring dermatologists',
    ],
    outcomes: ['Re-pigmented patches', 'Confidence restoration', 'Comprehensive follow-up care'],
  },
  {
    slug: 'ear-lobe-repair',
    name: 'Ear Lobe Repair',
    category: 'skin',
    excerpt:
      'Quick in-clinic microsurgery to correct torn or stretched lobes, finished with near-invisible sutures.',
    description: [
      'Procedure lasts under 30 minutes with local anesthesia and includes re-piercing guidance.',
      'Perfect for heavy earring damage or gauge reversal.',
    ],
    highlights: [
      'High-precision suturing for minimal scarring',
      'Follow-up dressing removal + scar gel',
      'Hypertrophic scar prevention plan',
    ],
    outcomes: ['Symmetrical lobes', 'Ready for re-piercing in 6 weeks', 'Natural contour retained'],
  },
  {
    slug: 'skin-health-program',
    name: 'Skin Health Hub',
    category: 'skin',
    excerpt:
      'Subscription-style dermatology concierge that keeps your skin plan updated every quarter.',
    description: [
      'Includes digital skin diary, seasonal product edits, and emergency flare-up consults via WhatsApp.',
      'Members enjoy priority scheduling and bundled pricing.',
    ],
    highlights: [
      'Quarterly VISIA scans',
      'Nutritional and hormone referrals',
      'Travel-friendly product curation',
    ],
    outcomes: ['Accountable skincare', 'Predictable results', 'Direct access to the care team'],
  },
  {
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'laser',
    excerpt:
      'Triple-wavelength diode platform that treats Indian skin safely while targeting deep-rooted follicles.',
    description: [
      'Pain-managed sessions with smart-cooling handpieces and dedicated male/female treatment zones for privacy.',
      'Maintenance plans include complimentary touch-ups on stubborn areas.',
    ],
    highlights: [
      'FDA-cleared Alma/Triple-Diode tech',
      'Body-mapping for consistent coverage',
      'Flexible membership billing',
    ],
    outcomes: ['Permanent hair reduction', 'Ingrown prevention', 'Silky finish year-round'],
  },
  {
    slug: 'laser-skin-toning',
    name: 'Laser Skin Toning',
    category: 'laser',
    excerpt:
      'Q-switched laser corrects uneven pigmentation, melasma, and dullness without disrupting skin integrity.',
    description: [
      'Protocols use low-fluence passes for Indian skin types to avoid rebound pigmentation.',
      'Pairs well with chemical peels or tranexamic infusions for stubborn cases.',
    ],
    highlights: [
      'Dermal & epidermal pigment targeting',
      'Cooling masks to reduce post-laser warmth',
      'Visible clarity within 3–4 sessions',
    ],
    outcomes: ['Balanced skin tone', 'Sun-spot fading', 'Lit-from-within luminosity'],
  },
  {
    slug: 'mole-removal',
    name: 'Mole Removal',
    category: 'laser',
    excerpt:
      'Radiofrequency and CO₂ lasers remove benign lesions with precision while maintaining cosmetic appeal.',
    description: [
      'Dermatoscope screening plus histopathology referrals when required ensure clinical safety.',
      'Post-care routines prevent PIH and expedite healing.',
    ],
    highlights: [
      'Scar-minimizing technique',
      'Sterile OT compliance',
      'Immediate dressing care instructions',
    ],
    outcomes: ['Spot-free skin', 'Even texture', 'Medical documentation for every lesion'],
  },
  {
    slug: 'carbon-laser-facial',
    name: 'Carbon / Laser Facial',
    category: 'laser',
    excerpt:
      'Hybrid treatment that merges carbon mask detox with resurfacing laser passes for dramatic clarity.',
    description: [
      'Suited for oily, acne-prone, and city-stressed complexions needing both exfoliation and tightening.',
      'Includes LED red light to calm post-laser warmth.',
    ],
    highlights: [
      'Oil-balancing and pore-minimizing',
      'Safe for mid-week refreshers',
      'Backed by dermatologist oversight',
    ],
    outcomes: ['Mattified T-zone', 'Smooth canvas', 'Reduced comedones'],
  },
  {
    slug: 'laser-piles',
    name: 'Laser Treatment for Piles',
    category: 'laser',
    excerpt:
      'Minimally invasive laser hemorrhoidoplasty performed in collaboration with Dr. Shashank Adgudwar.',
    description: [
      'Day-care procedure with rapid recovery, minimal bleeding, and same-day discharge.',
      'Includes dietician consults for long-term comfort.',
    ],
    highlights: [
      'Advanced diode laser platform',
      'Dedicated recovery specialist',
      'Insurance documentation support',
    ],
    outcomes: ['Reduced discomfort', 'Swift recovery', 'Improved quality of life'],
  },
  {
    slug: 'hair-loss-treatment',
    name: 'Hair Loss Treatment',
    category: 'hair',
    excerpt:
      'Combines scalp detox, low-level laser therapy, and prescription routines to arrest shedding quickly.',
    description: [
      'Trichoscopy and blood-work reviews identify root causes before we design a plan.',
      'Supplements, stress management, and topical therapy are tracked via a mobile portal.',
    ],
    highlights: [
      'Baseline & follow-up hair density scans',
      'Personalized supplement stack',
      'Hormone-friendly alternatives',
    ],
    outcomes: ['Visible reduction in daily shedding', 'Healthier scalp microbiome', 'Shinier strands'],
  },
  {
    slug: 'hair-regrowth-program',
    name: 'Hair Regrowth Treatment',
    category: 'hair',
    excerpt:
      'Bio-stimulating cocktails (peptides, growth factors) plus laser helmets for denser mid-lengths.',
    description: [
      'Ideal for postpartum, PCOS-related, or stress-triggered thinning.',
      'Delivered through mesotherapy or nano-needling depending on sensitivity.',
    ],
    highlights: [
      'At-home wearable laser support',
      'Month-on-month progress dashboards',
      'Styling & care education',
    ],
    outcomes: ['Thicker ponytails', 'Fuller hairline', 'Confidence boost'],
  },
  {
    slug: 'prp-exosomes',
    name: 'PRP + Exosomes Booster',
    category: 'hair',
    excerpt:
      'Regenerative protocol that layers platelet-rich plasma with lab-stabilized exosomes for accelerated hair growth.',
    description: [
      'Performed in sterile conditions with cold-chain preserved exosomes for predictable efficacy.',
      'Great for tech professionals facing chronic stress and erratic schedules.',
    ],
    highlights: [
      'Double-spin PRP concentration',
      'Pain-managed delivery with vibration distraction',
      'Bundled maintenance serums',
    ],
    outcomes: ['Faster regrowth cycles', 'Stronger follicles', 'Resilient scalp barrier'],
  },
];

export const serviceDictionary = services.reduce<Record<string, Service>>((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});

