'use client';

import { motion } from 'framer-motion';

interface LineGroupLinkProps {
  href: string;
}

export default function LineGroupLink({ href }: LineGroupLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 text-cyberpunk-primary/40 hover:text-cyberpunk-primary text-sm font-mono transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      whileHover={{ opacity: 1 }}
    >
      加入大腦降噪實驗室
    </motion.a>
  );
}

