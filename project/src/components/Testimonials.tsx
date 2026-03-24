import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: 'Wir waren kurz davor, aufzugeben. Heute streiten wir immer noch — aber ganz anders.',
    author: 'M. & T.',
    context: 'zusammen seit 14 Jahren',
  },
  {
    quote: 'Kathrin hat mir geholfen zu verstehen, warum ich in jeder Beziehung dieselben Muster wiederholt habe.',
    author: 'Sarah, 36',
    context: 'Einzelcoaching',
  },
  {
    quote: 'Das Intensiv-Wochenende war der Wendepunkt. Wir haben mehr gesagt als in 5 Jahren.',
    author: 'A. & J.',
    context: 'verheiratet seit 8 Jahren',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="stimmen" className="pt-40 pb-32" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label inline-block mb-5"
          >
            Stimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-4"
            style={{ color: '#1a1a1a' }}
          >
            Was Paare sagen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm"
            style={{ color: '#737373' }}
          >
            Namen abgekürzt — Beziehungen sind privat.
          </motion.p>
        </div>

        {/* Asymmetric: featured quote + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px" style={{ backgroundColor: '#e8e5e0' }}>
          {/* Featured testimonial — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between"
            style={{ backgroundColor: '#FAF8F5' }}
          >
            <blockquote
              className="font-serif text-2xl lg:text-3xl leading-[1.35] tracking-tight mb-12"
              style={{ color: '#1a1a1a' }}
            >
              "{testimonials[0].quote}"
            </blockquote>
            <div>
              <p className="font-sans text-sm font-medium" style={{ color: '#1a1a1a' }}>{testimonials[0].author}</p>
              <p className="font-sans text-[11px] uppercase tracking-[0.15em] mt-1" style={{ color: '#737373' }}>{testimonials[0].context}</p>
            </div>
          </motion.div>

          {/* Two stacked testimonials — 2 cols */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-px" style={{ backgroundColor: '#e8e5e0' }}>
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 lg:p-10 flex flex-col justify-between"
                style={{ backgroundColor: '#FAF8F5' }}
              >
                <blockquote
                  className="font-serif text-base italic leading-[1.7] mb-8"
                  style={{ color: '#1a1a1a' }}
                >
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-sans text-sm font-medium" style={{ color: '#1a1a1a' }}>{t.author}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] mt-1" style={{ color: '#737373' }}>{t.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
