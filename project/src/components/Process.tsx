import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Erstgespräch',
    meta: '30 Min · kostenlos',
    description: 'Wir lernen uns kennen und klären, ob die Chemie stimmt.',
  },
  {
    number: '02',
    title: 'Standort & Ziel',
    meta: 'Erste Sitzung',
    description: 'Was bringt euch her? Wo wollt ihr hin?',
  },
  {
    number: '03',
    title: 'Begleitung',
    meta: 'Regelmäßige Sitzungen',
    description: 'Regelmäßige Sitzungen in eurem Rhythmus.',
  },
];

export default function Process() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="pt-32 pb-24" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
          >
            Ablauf
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight"
            style={{ color: '#1a1a1a' }}
          >
            Wie es beginnt
          </motion.h2>
        </div>

        {/* Horizontal steps — connected by a thin line */}
        <div className="grid lg:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative py-10 lg:pr-12"
              style={{ borderTop: '1px solid #e8e5e0' }}
            >
              {/* Connection dot on the top border */}
              <div
                className="absolute -top-[3px] left-0 w-[5px] h-[5px]"
                style={{ backgroundColor: '#B07856', borderRadius: '1px' }}
              />

              {/* Connecting line between dots (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute -top-[1px] left-[5px] h-px"
                  style={{
                    width: 'calc(100% - 5px)',
                    background: 'linear-gradient(90deg, #B07856 0%, transparent 100%)',
                    opacity: 0.2,
                  }}
                />
              )}

              <span className="font-serif text-4xl font-bold block mb-6" style={{ color: '#B07856', opacity: 0.15 }}>
                {step.number}
              </span>

              <h3 className="font-serif text-xl mb-2" style={{ color: '#1a1a1a' }}>
                {step.title}
              </h3>

              <span className="font-sans text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: '#B07856' }}>
                {step.meta}
              </span>

              <p className="font-sans text-sm leading-[1.75]" style={{ color: '#737373' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-10"
          style={{ borderTop: '1px solid #e8e5e0' }}
        >
          <a href="#kontakt" className="cta-primary">
            Erstgespräch vereinbaren <span className="cta-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
