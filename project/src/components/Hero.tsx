import { motion } from 'framer-motion';

const fade = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Text side */}
      <div className="flex flex-col justify-end px-6 lg:px-20 pt-32 pb-16 lg:pb-24" style={{ backgroundColor: '#FAF8F5' }}>
        <motion.span
          variants={fade(0)} initial="hidden" animate="visible"
          className="section-label mb-10"
        >
          Paarberatung & Beziehungscoaching
        </motion.span>

        <h1
          className="font-serif leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: '#1a1a1a' }}
        >
          <motion.span variants={fade(1)} initial="hidden" animate="visible" className="block">
            Beziehung ist
          </motion.span>
          <motion.span variants={fade(2)} initial="hidden" animate="visible" className="block">
            kein Zustand.
          </motion.span>
          <motion.span variants={fade(3)} initial="hidden" animate="visible" className="block" style={{ color: '#B07856' }}>
            Sie ist eine Entscheidung.
          </motion.span>
        </h1>

        <motion.p
          variants={fade(4)} initial="hidden" animate="visible"
          className="font-sans text-base leading-[1.75] max-w-md mb-12"
          style={{ color: '#737373' }}
        >
          Ich begleite Paare und Einzelpersonen dabei, Beziehung neu zu verstehen — ehrlich, mutig und mit der Tiefe, die echte Veränderung braucht.
        </motion.p>

        <motion.div
          variants={fade(5)} initial="hidden" animate="visible"
          className="flex items-center gap-8 mb-16"
        >
          <a href="#kontakt" className="cta-primary">
            Erstgespräch vereinbaren
          </a>
          <a href="#fuer-wen" className="cta-ghost">
            Mehr erfahren <span className="cta-arrow">→</span>
          </a>
        </motion.div>

        {/* Trust stats — inline, editorial */}
        <motion.div
          variants={fade(6)} initial="hidden" animate="visible"
          className="flex items-center gap-10 pt-8"
          style={{ borderTop: '1px solid #e8e5e0' }}
        >
          {[
            { num: '12+', label: 'Jahre' },
            { num: '800+', label: 'Paare' },
            { num: '95%', label: 'Empfehlung' },
          ].map((s, i) => (
            <div key={i}>
              <span className="font-serif text-2xl font-bold block" style={{ color: '#1a1a1a' }}>{s.num}</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em]" style={{ color: '#737373' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden img-unified img-vignette img-curve-bl"
        style={{ minHeight: '50vh' }}
      >
        <img
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&q=80"
          alt="Zwei Menschen in vertrautem Gespräch"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
