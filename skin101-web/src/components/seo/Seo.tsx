import { Helmet } from 'react-helmet-async';
import type { FC } from 'react';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  openGraphImage?: string;
};

const Seo: FC<SeoProps> = ({ title, description, canonical, openGraphImage }) => {
  const siteName = 'Skin 101 | Dr. Tanvi Komawar Adgudwar';
  const resolvedTitle = `${title} | ${siteName}`;
  const runtimeCanonical =
    canonical ?? (typeof window !== 'undefined' ? window.location.href : undefined);

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      {runtimeCanonical ? <link rel="canonical" href={runtimeCanonical} /> : null}
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {runtimeCanonical ? <meta property="og:url" content={runtimeCanonical} /> : null}
      {openGraphImage ? <meta property="og:image" content={openGraphImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      {openGraphImage ? <meta name="twitter:image" content={openGraphImage} /> : null}
    </Helmet>
  );
};

export default Seo;

