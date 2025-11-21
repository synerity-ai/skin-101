import { Helmet } from 'react-helmet-async';
import { clinicInfo } from '@/content/config';

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: clinicInfo.name,
    description:
      'Dermatology, laser, and hair-regrowth clinic in Baner, Pune led by Dr. Tanvi Komawar Adgudwar.',
    url: 'https://www.skin101clinic.in', // placeholder, update in README
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.line2}`,
      addressLocality: clinicInfo.address.city,
      addressRegion: clinicInfo.address.state,
      postalCode: clinicInfo.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinicInfo.geo.latitude,
      longitude: clinicInfo.geo.longitude,
    },
    openingHoursSpecification: clinicInfo.hours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.day.includes('Sunday')
        ? 'Sunday'
        : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [
      'https://www.instagram.com/skin101clinic',
      'https://www.facebook.com/skin101clinic',
      'https://www.youtube.com',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;

