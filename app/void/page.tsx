'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import BreathingCircle from '@/components/void/BreathingCircle';

export default function VoidPage() {
  const router = useRouter();

  const handleComplete = () => {
    // 延遲後跳轉到 connection 頁面
    setTimeout(() => {
      router.push('/connection');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-screen h-screen bg-cyberpunk-darker flex items-center justify-center"
    >
      <BreathingCircle onComplete={handleComplete} />
    </motion.div>
  );
}

