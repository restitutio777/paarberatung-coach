import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="kontakt">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 lg:px-20 py-24"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <span className="section-label inline-block mb-8" style={{ color: 'rgba(176,120,86,0.6)' }}>
            Kontakt
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6" style={{ color: '#fafafa' }}>
            Der erste Schritt{' '}
            <span style={{ color: '#B07856' }}>ist ein Gespräch.</span>
          </h2>

          <p className="font-sans text-base leading-[1.75] mb-12 max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Kein Commitment, kein Druck. Einfach ehrlich reden — vielleicht zum ersten Mal seit Langem.
          </p>

          <a href="mailto:kontakt@kathrin-sommer.de" className="cta-accent w-fit mb-14">
            Erstgespräch buchen <span className="cta-arrow">→</span>
          </a>

          <div className="space-y-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <a href="mailto:kontakt@kathrin-sommer.de" className="flex items-center gap-3 font-sans text-sm transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Mail size={14} style={{ color: '#B07856', opacity: 0.7 }} />
              kontakt@kathrin-sommer.de
            </a>
            <a href="tel:+4922112345678" className="flex items-center gap-3 font-sans text-sm transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Phone size={14} style={{ color: '#B07856', opacity: 0.7 }} />
              0221 — 123 456 78
            </a>
            <div className="flex items-center gap-3 font-sans text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <MapPin size={13} style={{ color: '#B07856', opacity: 0.4 }} />
              Köln · Südstadt
            </div>
            <div className="flex items-center gap-3 font-sans text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              <Clock size={13} style={{ color: '#B07856', opacity: 0.3 }} />
              Abend- und Samstagstermine verfügbar
            </div>
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block img-unified img-unified-dark img-vignette img-curve-tl"
        >
          <img
            src="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=800&q=80"
            alt="Warmer Praxisraum"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
