import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#about' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Leadership', href: '/#leadership' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On home page before scrolling → transparent (light mode)
  // After scroll or on other pages → white/glassy
  const isLight = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-100/80 py-3 shadow-[0_2px_24px_rgba(43,57,144,0.06)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-2 cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-300 ${
              isLight
                ? 'bg-white/80 backdrop-blur-md shadow-sm border border-white/60'
                : 'bg-white shadow-sm border border-slate-100'
            }`}
          >
            <img src="/logo.webp" alt="Yaashvan Veterinary Services" width={600} height={154} fetchPriority="high" className="h-8 md:h-10 w-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="relative group px-3.5 py-2"
            >
              {link.href.startsWith('/#') ? (
                <a
                  href={isHomePage ? link.href.substring(1) : link.href}
                  className={`text-[12.5px] uppercase tracking-[0.13em] font-semibold transition-all duration-300 relative z-10 ${
                    isLight
                      ? 'text-slate-600 group-hover:text-brand-navy'
                      : 'text-slate-600 group-hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`text-[12.5px] uppercase tracking-[0.13em] font-semibold transition-all duration-300 relative z-10 ${
                    isLight
                      ? 'text-slate-600 group-hover:text-brand-navy'
                      : 'text-slate-600 group-hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Hover pill background */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-brand-navy/5 scale-90 group-hover:scale-100 transition-all duration-300" />

              {/* Active dot indicator */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-navy rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
            </motion.div>
          ))}

          {/* CTA Button */}
          <div className="ml-3">
            <motion.a
              href={isHomePage ? '#contact' : '/#contact'}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-6 py-2.5 rounded-xl font-semibold text-[13px] overflow-hidden group transition-all duration-300 inline-flex items-center gap-2 ${
                isLight
                  ? 'bg-gradient-to-r from-brand-navy to-brand-magenta text-white shadow-[0_4px_16px_rgba(43,57,144,0.18)]'
                  : 'bg-gradient-to-r from-brand-navy to-brand-magenta text-white shadow-[0_4px_16px_rgba(43,57,144,0.18)]'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                Contact Us
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              {/* Hover shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-magenta to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors p-2 rounded-xl ${
            isLight ? 'text-brand-navy bg-white/80 border border-white/60' : 'text-brand-navy bg-white border border-slate-100'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-white/96 backdrop-blur-2xl border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-700 font-semibold text-sm hover:bg-brand-navy/5 hover:text-brand-navy transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronDown size={14} className="-rotate-90 text-slate-400" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-700 font-semibold text-sm hover:bg-brand-navy/5 hover:text-brand-navy transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronDown size={14} className="-rotate-90 text-slate-400" />
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-4">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-brand-navy to-brand-magenta text-white font-bold text-sm shadow-[0_4px_16px_rgba(43,57,144,0.18)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
