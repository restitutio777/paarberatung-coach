import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const methods = [
  {
    title: 'Verstehen',
    question: 'Was ist wirklich los?',
    body: 'Systemisch denken heißt: Muster im Kontext sehen. Nicht Schuld zuweisen, sondern Dynamiken verstehen.',
    accent: '#B07856',
  },
  {
    title: 'Spüren',
    question: 'Was braucht ihr?',
    body: 'Körperorientiert arbeiten heißt: zuhören, was der Körper weiß — noch bevor der Kopf es sortiert hat.',
    accent: '#5B7B8F',
  },
  {
    title: 'Handeln',
    question: 'Was verändert ihr?',
    body: 'Auf Augenhöhe begleiten heißt: ehrlich, respektvoll und mit dem Mut, auch Unbequemes zu benennen.',
    accent: '#B07856',
  },
];

export default function Method() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="pb-32" style={{ backgroundColor: '#F4ECE4', paddingTop: 'clamp(120px, 12vw, 200px)' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
          >
            Methode
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight"
            style={{ color: '#1a1a1a' }}
          >
            Wie ich arbeite
          </motion.h2>
        </div>

        {/* Three methods — asymmetric bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#e8e5e0' }}>
          {methods.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 lg:p-10"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-sans text-[11px] uppercase tracking-[0.15em]" style={{ color: '#737373' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: '#e8e5e0' }} />
              </div>

              <h3 className="font-serif text-2xl mb-2" style={{ color: m.accent }}>
                {m.title}
              </h3>
              <p className="font-serif text-sm italic mb-6" style={{ color: '#737373' }}>
                {m.question}
              </p>
              <p className="font-sans text-sm leading-[1.8]" style={{ color: '#737373' }}>
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line — method labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mt-10"
        >
          <div className="flex-1 h-px" style={{ backgroundColor: '#e8e5e0' }} />
          <span className="font-sans text-[11px] uppercase tracking-[0.2em]" style={{ color: '#737373' }}>
            Systemisch · Körperorientiert · Auf Augenhöhe
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#e8e5e0' }} />
        </motion.div>
      </div>
    </section>
  );
}
