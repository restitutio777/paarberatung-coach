import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="ueber-mich" className="pt-40 pb-32" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image — sharp, no decorative circles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 img-unified img-vignette img-curve-tr"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
              alt="Kathrin Sommer"
              className="w-full object-cover"
              style={{ height: '560px', maxWidth: '100%' }}
            />
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="section-label inline-block mb-5"
            >
              Über mich
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8"
              style={{ color: '#1a1a1a' }}
            >
              Kathrin Sommer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-base leading-[1.8] mb-5 max-w-lg"
              style={{ color: '#737373' }}
            >
              Systemische Beraterin, Paartherapeutin (EFT) und Mutter von zwei Kindern. Ich weiß aus eigener Erfahrung: Beziehung braucht Arbeit. Aber die richtige Art von Arbeit.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-base leading-[1.8] mb-10 max-w-lg"
              style={{ color: '#737373' }}
            >
              Vor meiner Ausbildung habe ich 12 Jahre in der Mediation gearbeitet — Konflikte sind mein Terrain.
            </motion.p>

            {/* Credentials — simple inline labels, no pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10 pt-8"
              style={{ borderTop: '1px solid #e8e5e0' }}
            >
              {['Systemische Beraterin (DGSF)', 'EFT-Therapeutin', 'Mediatorin'].map((cred, i) => (
                <span key={i} className="font-sans text-[11px] uppercase tracking-[0.15em]" style={{ color: '#737373' }}>
                  {cred}
                </span>
              ))}
            </motion.div>

            {/* Quote — left border, no rounded card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="pl-6"
              style={{ borderLeft: '2px solid #B07856' }}
            >
              <p className="font-serif text-base italic leading-[1.7]" style={{ color: '#B07856' }}>
                "In meiner Praxis gibt es immer Tee. Und meistens Taschentücher."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
