'use client';

import { motion } from 'framer-motion';

interface FlushButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function FlushButton({ onClick, disabled = false }: FlushButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-cyberpunk-primary text-cyberpunk-primary font-mono text-base sm:text-lg hover:bg-cyberpunk-primary hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
        willChange: 'transform',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(0, 255, 65, 0.8)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      FLUSH
    </motion.button>
  );
}

