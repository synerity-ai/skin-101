import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { clinicInfo, navLinks } from '@/content/config';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link to="/" className="flex flex-col text-ink" aria-label="Skin 101 home">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Skin 101</span>
          <span className="font-serif text-lg font-semibold text-ink">
            Dr. Tanvi Komawar Adgudwar
          </span>
        </Link>
        <nav
          className="hidden items-center gap-4 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wide transition hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${clinicInfo.phone}`}
            className="inline-flex items-center rounded-full border border-primary/30 px-3 py-1.5 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
          >
            <PhoneIcon className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            {clinicInfo.phoneDisplay}
          </a>
          <Link
            to="/contact#appointment"
            className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-card transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book an Appointment
          </Link>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex items-center rounded-full border border-slate-200 p-2 text-ink lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-base font-semibold transition ${
                    isActive ? 'bg-mist text-primary' : 'text-ink hover:bg-mist'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${clinicInfo.phone}`}
              className="mt-4 inline-flex items-center rounded-xl border border-primary/40 px-3 py-2 text-sm font-semibold text-primary"
            >
              <PhoneIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {clinicInfo.phoneDisplay}
            </a>
            <Link
              to="/contact#appointment"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-primary px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Book an Appointment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;

