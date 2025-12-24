'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlurredTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlurredTextInput({ value, onChange }: BlurredTextInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // 自動聚焦
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在這裡釋放你的思緒..."
        className="w-full h-full bg-transparent border-none outline-none resize-none text-cyberpunk-primary placeholder:text-cyberpunk-primary/30 text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono p-4 sm:p-6 md:p-8 blur-sm hover:blur-none transition-all duration-300 focus:blur-none"
        style={{
          filter: value ? 'blur(8px)' : 'blur(0px)',
          textShadow: '0 0 10px currentColor',
          willChange: 'filter',
        }}
      />
    </motion.div>
  );
}

