import { motion, type Variants } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      {children}
    </motion.div>
  );
}
