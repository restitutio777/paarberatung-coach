import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cases = [
  'Wir reden, aber verstehen uns nicht',
  'Vertrauen ist gebrochen',
  'Immer derselbe Streit',
  'Die Nähe ist verschwunden',
  'Bleiben oder gehen?',
  'Eltern werden verändert alles',
];

export default function UseCases() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="pt-32 pb-24" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="section-label inline-block mb-5"
            >
              Anlässe
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-4"
              style={{ color: '#1a1a1a' }}
            >
              Typische Anlässe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm leading-[1.7]"
              style={{ color: '#737373' }}
            >
              Kommt Ihnen etwas davon bekannt vor? Dann lohnt sich ein Gespräch.
            </motion.p>
          </div>

          {/* Right — simple list, no icon-in-circle */}
          <div className="lg:col-span-8">
            {cases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-6 py-6 cursor-default transition-colors duration-300"
                style={{ borderBottom: '1px solid #e8e5e0' }}
                onMouseEnter={(e) => {
                  const num = e.currentTarget.querySelector('.case-num') as HTMLElement;
                  if (num) num.style.color = '#B07856';
                }}
                onMouseLeave={(e) => {
                  const num = e.currentTarget.querySelector('.case-num') as HTMLElement;
                  if (num) num.style.color = '#e8e5e0';
                }}
              >
                <span
                  className="case-num font-sans text-[11px] tracking-[0.15em] transition-colors duration-300 flex-shrink-0 w-8"
                  style={{ color: '#e8e5e0' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-lg lg:text-xl" style={{ color: '#1a1a1a' }}>
                  {item}
                </p>
                <span
                  className="ml-auto font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  style={{ color: '#B07856' }}
                >
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
