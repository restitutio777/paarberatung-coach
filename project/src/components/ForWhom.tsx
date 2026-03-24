import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const forCouples = [
  'Kommunikation verbessern',
  'Konflikte verstehen',
  'Nähe wiederfinden',
  'Entscheidungen treffen (auch schwere)',
];

const forSingles = [
  'Beziehungsmuster erkennen',
  'Nach Trennungen heilen',
  'Bindungsangst verstehen',
  'Selbstwert in Beziehungen',
];

export default function ForWhom() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="fuer-wen" className="pt-32 pb-24" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
          >
            Für wen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-4"
            style={{ color: '#1a1a1a' }}
          >
            Für euch. Oder für dich allein.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-base leading-[1.7]"
            style={{ color: '#737373' }}
          >
            Beziehungsarbeit beginnt nicht erst, wenn es kracht.
          </motion.p>
        </div>

        {/* Two columns — no card wrapper, no icons-in-circles */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Für Paare */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="py-10 lg:pr-16"
            style={{ borderTop: '1px solid #e8e5e0' }}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-5xl font-bold" style={{ color: '#B07856', opacity: 0.2 }}>01</span>
              <h3 className="font-serif text-2xl" style={{ color: '#1a1a1a' }}>Für Paare</h3>
            </div>
            <p className="font-sans text-sm mb-8" style={{ color: '#737373', lineHeight: 1.7 }}>
              Ob in der Krise oder auf der Suche nach mehr Tiefe.
            </p>
            <ul className="space-y-4">
              {forCouples.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B07856' }} />
                  <span className="font-sans text-sm" style={{ color: '#1a1a1a' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Für Einzelpersonen */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="py-10 lg:pl-16"
            style={{ borderTop: '1px solid #e8e5e0', borderLeft: 'none' }}
          >
            <div className="hidden lg:block" style={{ borderLeft: '1px solid #e8e5e0', position: 'absolute', top: 0, bottom: 0, left: 0 }} />
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-5xl font-bold" style={{ color: '#5B7B8F', opacity: 0.2 }}>02</span>
              <h3 className="font-serif text-2xl" style={{ color: '#1a1a1a' }}>Für Einzelpersonen</h3>
            </div>
            <p className="font-sans text-sm mb-8" style={{ color: '#737373', lineHeight: 1.7 }}>
              Für dein Beziehungsleben — ob Single oder in einer Beziehung.
            </p>
            <ul className="space-y-4">
              {forSingles.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B7B8F' }} />
                  <span className="font-sans text-sm" style={{ color: '#1a1a1a' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
