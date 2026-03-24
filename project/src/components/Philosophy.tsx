import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const beliefs = [
  {
    headline: 'Konflikte sind keine Fehler.',
    body: 'Sie sind Einladungen, einander wirklich zu begegnen — statt aneinander vorbei zu funktionieren.',
  },
  {
    headline: 'Nähe braucht Mut.',
    body: 'Nicht den Mut zu kämpfen, sondern den Mut, sich verletzlich zu zeigen. Genau dort beginnt Verbindung.',
  },
  {
    headline: 'Veränderung beginnt im Verstehen.',
    body: 'Nicht im Recht-haben. Nicht im Ändern des anderen. Sondern darin, wirklich hinzuschauen — auf sich selbst.',
  },
];

export default function Philosophy() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
            style={{ color: 'rgba(176,120,86,0.7)' }}
          >
            Philosophie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight"
            style={{ color: '#fafafa' }}
          >
            Woran ich glaube
          </motion.h2>
        </div>

        {/* Stacked rows — not identical cards */}
        <div className="space-y-0">
          {beliefs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="lg:col-span-1">
                <span className="font-sans text-[11px] uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-xl" style={{ color: '#fafafa', lineHeight: 1.35 }}>
                  {item.headline}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-sm leading-[1.8]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Overlapping quote — breaks out of dark section into next */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-content mx-auto px-6 lg:px-10"
        style={{ marginBottom: '-48px' }}
      >
        <div
          className="ml-auto max-w-md p-8 lg:p-10"
          style={{
            backgroundColor: '#FAF8F5',
            borderLeft: '2px solid #B07856',
          }}
        >
          <p className="font-serif text-base italic leading-[1.7]" style={{ color: '#737373' }}>
            "Jede Beziehung hat eine eigene Sprache. Meine Aufgabe ist es, euch beim Übersetzen zu helfen."
          </p>
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] mt-4 block" style={{ color: '#B07856' }}>
            Kathrin Sommer
          </span>
        </div>
      </motion.div>
    </section>
  );
}
