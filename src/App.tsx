import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import CaseStudyList from '@/pages/CaseStudyList';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import Company from '@/pages/Company';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

/** Porta in cima a ogni cambio pagina; con un #hash scorre alla sezione e le sposta il focus. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a
        href="#contenuto"
        className="sr-only z-50 rounded-sm bg-ink px-4 py-3 font-medium text-on-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Vai al contenuto
      </a>
      <ScrollManager />
      <Header />
      <main id="contenuto" tabIndex={-1} className="relative z-10 bg-canvas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/case-study" element={<CaseStudyList />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/azienda" element={<Company />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
