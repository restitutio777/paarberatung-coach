import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Angebot', href: '#angebot' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Für wen', href: '#fuer-wen' },
  { label: 'Stimmen', href: '#stimmen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(250,248,245,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e8e5e0' : '1px solid transparent',
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl tracking-tight" style={{ fontWeight: 300 }}>
            <span style={{ color: '#B07856' }}>Kathrin</span> <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Sommer</span>
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em]" style={{ color: '#737373' }}>
            Paarberatung & Coaching
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm transition-colors duration-300"
              style={{ color: '#737373' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="cta-nav">
            Termin buchen
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
          style={{ color: '#1a1a1a' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(250,248,245,0.99)', borderBottom: '1px solid #e8e5e0' }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-base"
                  style={{ color: '#1a1a1a' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="cta-primary text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Termin buchen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
