import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const packages = [
  {
    title: 'Paarberatung',
    subtitle: '6–12 Sitzungen à 90 Min',
    description: 'Für Paare, die verstehen wollen, was zwischen ihnen passiert.',
    price: '€160',
    priceUnit: 'pro Sitzung',
    image: 'https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?w=600&q=80',
    imageAlt: 'Zwei Kaffeetassen',
  },
  {
    title: 'Einzelcoaching Beziehung',
    subtitle: '6 Sessions à 60 Min',
    description: 'Für dich allein — Muster erkennen, Klarheit gewinnen.',
    price: '€120',
    priceUnit: 'pro Sitzung',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    imageAlt: 'Notizbuch und Kaffee',
  },
  {
    title: 'Intensiv-Wochenende',
    subtitle: 'Sa + So, 10–17 Uhr',
    description: 'Für Paare, die in kurzer Zeit viel bewegen wollen.',
    price: '€1.200',
    priceUnit: 'gesamt',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    imageAlt: 'Ruhige Natur',
  },
];

export default function Packages() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="angebot" className="pt-40 pb-32" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
          >
            Angebot
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight"
            style={{ color: '#1a1a1a' }}
          >
            Rahmen & Formate
          </motion.h2>
        </div>

        <div className="space-y-0">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
              style={{ borderTop: '1px solid #e8e5e0' }}
            >
              {/* Image — sharp edges */}
              <div className={`img-unified img-vignette ${i === 0 ? 'img-curve-br' : i === 1 ? 'img-curve-tl' : 'img-curve-bl-tr'} ${i % 2 !== 0 ? 'lg:order-2' : ''}`} style={{ minHeight: 280 }}>
                <img
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ minHeight: 280 }}
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <span className="font-sans text-[11px] uppercase tracking-[0.15em] mb-4" style={{ color: '#737373' }}>
                  {pkg.subtitle}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl leading-[1.15] tracking-tight mb-3" style={{ color: '#1a1a1a' }}>
                  {pkg.title}
                </h3>
                <p className="font-sans text-sm leading-[1.7] mb-8 max-w-sm" style={{ color: '#737373' }}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-serif text-3xl font-bold" style={{ color: '#1a1a1a' }}>{pkg.price}</span>
                  <span className="font-sans text-sm" style={{ color: '#737373' }}>{pkg.priceUnit}</span>
                </div>
                <a href="#kontakt" className="cta-ghost" style={{ color: '#B07856' }}>
                  Anfragen <span className="cta-arrow">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
