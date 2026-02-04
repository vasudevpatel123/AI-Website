
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const StickyCallButton = () => (
  <div className="fixed bottom-6 right-6 z-50 md:hidden">
    <a 
      href={`tel:${BUSINESS_INFO.phoneRaw}`} 
      className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce active:scale-90 transition-all border-4 border-white"
    >
      <Phone size={30} fill="currentColor" />
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Home />} /> {/* Link back to reviews section on home for this simple version */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <StickyCallButton />
      </div>
    </Router>
  );
};

export default App;
