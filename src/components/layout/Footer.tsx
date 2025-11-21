import { Link } from 'react-router-dom';
import { clinicInfo, navLinks } from '@/content/config';

const Footer = () => {
  return (
    <footer className="bg-ink text-white" aria-labelledby="footer-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 lg:px-8 lg:grid-cols-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-primary-light/80">Skin 101</p>
          <p className="mt-2 font-serif text-2xl font-semibold">
            Dr. Tanvi Komawar Adgudwar
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Personalized dermatology, laser, and hair-restoration care for Baner, Pune. Clinical
            precision meets hospitality-level experience.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white" id="footer-heading">
            Visit Us
          </h3>
          <p className="mt-3 text-sm text-slate-200">
            {clinicInfo.address.line1}
            <br />
            {clinicInfo.address.line2}
            <br />
            {clinicInfo.address.landmark}
            <br />
            {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.postalCode}
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Phone:{' '}
            <a href={`tel:${clinicInfo.phone}`} className="text-white underline underline-offset-4">
              {clinicInfo.phoneDisplay}
            </a>
            <br />
            Email:{' '}
            <a
              href={`mailto:${clinicInfo.email}`}
              className="text-white underline underline-offset-4"
            >
              {clinicInfo.email}
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Clinic Hours</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {clinicInfo.hours.map((slot) => (
              <li key={slot.day} className="flex items-center justify-between border-b border-white/10 pb-1">
                <span>{slot.day}</span>
                <span>
                  {slot.opens} – {slot.closes}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-200">
            Visitors tracked: <span className="font-semibold">{clinicInfo.visitorCount.toLocaleString()}</span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.3em] text-slate-300">
        © {new Date().getFullYear()} Skin 101. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

