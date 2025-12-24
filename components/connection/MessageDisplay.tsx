'use client';

import { motion } from 'framer-motion';
import GlitchText from '@/components/shared/GlitchText';
import { Message } from '@/types';

interface MessageDisplayProps {
  message: Message | null;
}

export default function MessageDisplay({ message }: MessageDisplayProps) {
  if (!message) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <p className="text-cyberpunk-primary/60 text-xl font-mono">
          載入中...
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-center max-w-2xl mx-auto px-8"
    >
      <GlitchText>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono text-cyberpunk-primary mb-8 leading-relaxed px-4">
          {message.content}
        </h1>
      </GlitchText>
    </motion.div>
  );
}

