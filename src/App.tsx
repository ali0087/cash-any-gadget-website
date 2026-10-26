import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import QuotePage from '@/pages/QuotePage';
import OwnerLoginPage from '@/pages/OwnerLoginPage';
import OwnerDashboardPage from '@/pages/OwnerDashboardPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SellIphonePage from '@/pages/SellIphonePage';
import SellSamsungPage from '@/pages/SellSamsungPage';
import SellTabletPage from '@/pages/SellTabletPage';
import SellMacbookPage from '@/pages/SellMacbookPage';
import SellConsolePage from '@/pages/SellConsolePage';
import SellElectronicsPage from '@/pages/SellElectronicsPage';
import AboutPage from '@/pages/AboutPage';
import WhyPage from '@/pages/WhyPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === '/get-a-quote' || pathname === '/quote') {
      const el = document.getElementById('quote-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-a-quote" element={<QuotePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/sell-your-iphone" element={<SellIphonePage />} />
            <Route path="/sell-your-samsung" element={<SellSamsungPage />} />
            <Route path="/sell-electronics" element={<SellElectronicsPage />} />
            <Route path="/sell-your-tablet" element={<SellTabletPage />} />
            <Route path="/sell-your-macbook" element={<SellMacbookPage />} />
            <Route path="/sell-your-gaming-console" element={<SellConsolePage />} />
            <Route path="/why-cash-any-gadget" element={<WhyPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/owner" element={<OwnerLoginPage />} />
            <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
