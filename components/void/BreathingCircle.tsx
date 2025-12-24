'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ANIMATION_DURATION, EASING } from '@/lib/animations';

interface BreathingCircleProps {
  onComplete: () => void;
}

export default function BreathingCircle({ onComplete }: BreathingCircleProps) {
  const [breathCount, setBreathCount] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out' | 'hold'>('in');
  const controls = useAnimation();

  const TOTAL_BREATHS = 3;
  const BREATH_IN_DURATION = ANIMATION_DURATION.BREATH_IN;
  const BREATH_OUT_DURATION = ANIMATION_DURATION.BREATH_OUT;
  const HOLD_DURATION = 1;

  useEffect(() => {
    const startBreathing = async () => {
      for (let i = 0; i < TOTAL_BREATHS; i++) {
        setBreathCount(i + 1);
        
        // 吸氣
        setPhase('in');
        await controls.start({
          scale: 1.5,
          opacity: 1,
          transition: {
            duration: BREATH_IN_DURATION,
            ease: EASING.easeInOut,
          },
        });

        // 短暫停留
        setPhase('hold');
        await new Promise((resolve) => setTimeout(resolve, HOLD_DURATION * 1000));

        // 呼氣
        setPhase('out');
        await controls.start({
          scale: 0.8,
          opacity: 0.6,
          transition: {
            duration: BREATH_OUT_DURATION,
            ease: EASING.easeInOut,
          },
        });

        // 短暫停留
        await new Promise((resolve) => setTimeout(resolve, HOLD_DURATION * 1000));
      }

      // 完成後淡出
      await controls.start({
        opacity: 0,
        transition: {
          duration: 1,
          ease: EASING.easeOut,
        },
      });

      onComplete();
    };

    startBreathing();
  }, [controls, onComplete]);

  const getPhaseText = () => {
    switch (phase) {
      case 'in':
        return '吸氣';
      case 'out':
        return '呼氣';
      case 'hold':
        return '保持';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <motion.div
        animate={controls}
        initial={{ scale: 0.8, opacity: 0.6 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyberpunk-primary"
        style={{
          boxShadow: '0 0 50px rgba(0, 255, 65, 0.5), inset 0 0 50px rgba(0, 255, 65, 0.1)',
          willChange: 'transform, opacity',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-cyberpunk-primary text-2xl font-mono mb-4">
          {getPhaseText()}
        </p>
        <p className="text-cyberpunk-primary/60 text-lg font-mono">
          {breathCount} / {TOTAL_BREATHS}
        </p>
      </motion.div>
    </div>
  );
}

