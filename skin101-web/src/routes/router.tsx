import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import HomePage from '@/pages/home/HomePage';
import AboutPage from '@/pages/about/AboutPage';
import ServicesPage from '@/pages/services/ServicesPage';
import ServiceDetailPage from '@/pages/services/ServiceDetailPage';
import GalleryPage from '@/pages/gallery/GalleryPage';
import BlogPage from '@/pages/blog/BlogPage';
import BlogPostPage from '@/pages/blog/BlogPostPage';
import TestimonialsPage from '@/pages/testimonials/TestimonialsPage';
import ContactPage from '@/pages/contact/ContactPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services">
        <Route index element={<ServicesPage />} />
        <Route path=":slug" element={<ServiceDetailPage />} />
      </Route>
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="blog">
        <Route index element={<BlogPage />} />
        <Route path=":slug" element={<BlogPostPage />} />
      </Route>
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="privacy" element={<PrivacyPage />} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;


