'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface TransitionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function TransitionWrapper({ children, className = '' }: TransitionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

