import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Analytics from '@/components/seo/Analytics';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const SiteLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mist text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-card"
      >
        Skip to content
      </a>
      <LocalBusinessSchema />
      <Analytics />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRestoration />
    </div>
  );
};

export default SiteLayout;


