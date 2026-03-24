import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionBridgeProps {
  text: string;
  variant?: 'light' | 'dark';
}

export default function SectionBridge({ text, variant = 'light' }: SectionBridgeProps) {
  const { ref, isInView } = useScrollAnimation(0.5);

  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(176,120,86,0.15)' : 'rgba(176,120,86,0.12)';
  const textColor = isDark ? 'rgba(176,120,86,0.35)' : 'rgba(176,120,86,0.4)';

  return (
    <div
      ref={ref}
      className="relative z-5 py-0 overflow-hidden"
      style={{ backgroundColor: isDark ? '#1a1a1a' : undefined }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-content mx-auto px-6 lg:px-10 flex items-center gap-5"
      >
        {/* Left line — growing in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 h-px origin-left"
          style={{ background: `linear-gradient(90deg, transparent, ${lineColor})` }}
        />

        {/* Bridge text */}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xs italic whitespace-nowrap tracking-wide"
          style={{ color: textColor }}
        >
          {text}
        </motion.span>

        {/* Right line — growing in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 h-px origin-right"
          style={{ background: `linear-gradient(90deg, ${lineColor}, transparent)` }}
        />
      </motion.div>
    </div>
  );
}
