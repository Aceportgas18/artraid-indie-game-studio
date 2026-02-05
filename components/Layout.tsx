
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SpaceBackground from './SpaceBackground';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-600 selection:text-white relative bg-transparent">
      <SpaceBackground />
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 bg-transparent backdrop-blur-sm bg-black/10 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <Link to="/" className="flex items-center space-x-3 text-2xl font-black tracking-tighter group">
          <img src="/artraid-assets/Logo_01.png" alt="Artraid Logo" className="h-16 w-16" />
          <span className="inline-block group-hover:text-orange-600 transition-colors duration-300 text-white">ARTRAID</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors ${location.pathname === link.path ? 'text-orange-600' : 'text-zinc-400'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2 text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black tracking-tighter uppercase ${location.pathname === link.path ? 'text-orange-600' : 'text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-zinc-900 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-black tracking-tighter mb-6 text-white">ARTRAID</h2>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
              We are an indie game development studio focused on creating unique, art-driven digital experiences that push the boundaries of storytelling.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Navigation</h3>
            {navLinks.map(l => (
              <Link key={l.path} to={l.path} className="text-zinc-500 hover:text-orange-600 text-sm transition-colors">{l.name}</Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Social</h3>
            <a href="#" className="text-zinc-500 hover:text-orange-600 text-sm transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Artraid Games. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
