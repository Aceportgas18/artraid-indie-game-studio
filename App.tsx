
import React, { useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Loader from './components/Loader';

// ADDED: Lazy-load every route so Vite emits a separate JS chunk per page.
// The Loader overlay already covers the initial 2.5 s hydration window, so
// the Suspense fallback (null) is invisible in practice.
const Home          = React.lazy(() => import('./pages/Home'));
const Games         = React.lazy(() => import('./pages/Games'));
const Team          = React.lazy(() => import('./pages/Team'));
const Contact       = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService= React.lazy(() => import('./pages/TermsOfService'));
const CookiePolicy  = React.lazy(() => import('./pages/CookiePolicy'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Loader />
      <Router>
        <ScrollToTop />
        <Layout>
          {/* ADDED: Suspense boundary for lazy-loaded route chunks */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
