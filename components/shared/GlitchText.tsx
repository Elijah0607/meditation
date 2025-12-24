'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlitchText({ children, className = '', delay = 0 }: GlitchTextProps) {
  return (
    <motion.div
      className={`glitch-text ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

