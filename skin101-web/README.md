# Skin 101 | Dr. Tanvi Komawar Adgudwar

Production-ready React (Vite + TypeScript) site for the Skin 101 dermatology clinic in Baner, Pune. The build emphasises enterprise UX, Tailwind-based theming, WCAG 2.1 AA compliance, SEO, and conversion-first flows (click-to-call, WhatsApp, appointment form, testimonials, and gallery).

## Tech Stack

- **Vite + React Router + TypeScript** – SPA routing with SSR-friendly SEO primitives (Helmet + JSON-LD).
- **Tailwind CSS** – Clean, clinical aesthetic with teal + warm gold palette.
- **react-hook-form + zod** – Typed contact validation with honeypot + rate limiting on the serverless function.
- **Netlify serverless + SendGrid** – Emails `surgery101clinic@gmail.com` on every booking request.
- **Jest + Testing Library** unit tests plus **Cypress** E2E coverage for the booking flow.
- **Optional analytics** toggled via `VITE_GTM_ID` or `VITE_GA_ID`.

## Getting Started

```bash
npm install
npm run dev
# http://localhost:5174
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production bundle |
| `npm run lint` | ESLint (strict TS config) |
| `npm run test` | Jest unit tests |
| `npm run e2e` | Cypress E2E (`npm run dev` must be running separately) |

## Environment Variables

Create `.env` locally or configure in Netlify/Vercel:

```
SENDGRID_API_KEY=xxx                 # required for contact function
CONTACT_TO_EMAIL=surgery101clinic@gmail.com
CONTACT_FROM_EMAIL=hello@skin101clinic.in
VITE_GTM_ID=GTM-XXXXXXX              # optional – injects GTM when set
VITE_GA_ID=G-XXXXXXXX                # optional – GA4 (gtag)
```

The `netlify/functions/contact.ts` handler validates payloads with zod, blocks bots via honeypot, rate-limits by IP, and sends email through SendGrid. Errors are surfaced back to the React form.

## Project Structure

- `src/components/layout` – Header, footer, WhatsApp CTA, analytics + JSON-LD injection, site shell.
- `src/pages/*` – Route-level pages: home, about, services catalog + details, gallery lightbox, blog list + detail, testimonials carousel, contact form, privacy/terms, 404.
- `src/content/*` – Source-of-truth data files for services, blogs, testimonials, gallery items, clinic meta.
- `netlify/functions/contact.ts` – Serverless email endpoint.
- `public/robots.txt` & `public/sitemap.xml` – SEO assets.
- `cypress/` – E2E config + appointment flow spec.

### Updating Content

1. **Clinic info/nav** – `src/content/config.ts`
2. **Services (categories + details)** – `src/content/services.ts`
3. **Blogs** – `src/content/blog.ts`
4. **Gallery** – `src/content/gallery.ts`
5. **Testimonials** – `src/content/testimonials.ts`

Swap Unsplash URLs with your CDN assets when ready.

## Deployment

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Environment variables: set the keys listed above.

### Vercel

Deploy as a static site. To keep the serverless contact flow, either:

1. Keep Netlify for functions and proxy `/api/contact` to it, or
2. Copy `netlify/functions/contact.ts` into `api/contact.ts` (Vercel style) and use the same env vars.

### Post-deploy Checklist

1. Run Lighthouse (Desktop ≥ 90, Mobile ≥ 80) and archive screenshot.
2. Validate JSON-LD (LocalBusiness) via Google Rich Results.
3. Confirm `/sitemap.xml` + `/robots.txt` resolve on the live domain.
4. Submit the contact form (happy + error paths) to verify SendGrid deliverability.

## Admin Notes

- **Analytics toggle** – Set `VITE_GTM_ID` or `VITE_GA_ID`; scripts are omitted automatically when empty.
- **Click-to-call & WhatsApp** – Header + sticky CTA link to `tel:+917055101101` and `wa.me/+912040186876`.
- **Styling** – Tailwind 3.x only (project convention). Extend colours in `tailwind.config.js`.
- **Accessibility** – Skip link, semantic headings, focus-visible outlines, and accessible lightbox/menus.

## Testing

- `npm run test` – Sample unit test ensures header renders navigational CTAs.
- `npm run e2e` – Cypress spec visits `/contact`, fills the form, intercepts the Netlify function, and asserts success messaging.

## Content / CMS Roadmap

Copy currently lives in TypeScript data objects for simplicity. When ready for Sanity/Contentful/MDX, map those schemas to the existing TS types without touching UI components.

## Deployment Checklist

1. `npm run build` – no TypeScript or ESLint errors.
2. `npm run test` and `npm run e2e` – pass locally/CI.
3. Deploy to Netlify or Vercel, point `https://www.skin101clinic.in`, and update `LocalBusinessSchema.url` if the domain differs.
