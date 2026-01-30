import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { PortfolioSingle } from './pages/PortfolioSingle';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { BlogSingle } from './pages/BlogSingle';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isNotFound = ![
    '/',
    '/about',
    '/portfolio',
    '/services',
    '/blog',
    '/contact',
  ].includes(location.pathname) && !location.pathname.startsWith('/portfolio/') && !location.pathname.startsWith('/blog/');

  return (
    <>
      <ScrollToTop />
      {!isNotFound && <Header />}
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioSingle />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      {!isNotFound && <Footer />}
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
