'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import CyberpunkBackground from '@/components/shared/CyberpunkBackground';
import GateModal from '@/components/shared/GateModal';
import BlurredTextInput from '@/components/catharsis/BlurredTextInput';
import FlushButton from '@/components/catharsis/FlushButton';
import ParticleExplosion from '@/components/catharsis/ParticleExplosion';
import { isAccessGranted } from '@/lib/gate';

export default function CatharsisPage() {
  const [text, setText] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  // 檢查驗證狀態
  useEffect(() => {
    const checkAccess = () => {
      const hasAccess = isAccessGranted();
      setIsVerified(hasAccess);
      setIsChecking(false);
    };

    checkAccess();
  }, []);

  const handleAccessGranted = () => {
    setIsVerified(true);
  };

  const handleFlush = () => {
    if (!text.trim() || !isVerified) return;
    
    setShowParticles(true);
  };

  const handleParticleComplete = () => {
    setText('');
    setShowParticles(false);
    // 延遲後跳轉到 void 頁面
    setTimeout(() => {
      router.push('/void');
    }, 500);
  };

  // 如果還在檢查，顯示載入狀態
  if (isChecking) {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-cyberpunk-darker flex items-center justify-center">
        <CyberpunkBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyberpunk-primary font-mono text-sm"
        >
          初始化連接...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cyberpunk-darker">
      <CyberpunkBackground />
      
      {/* Gate Modal - 如果未驗證則顯示 */}
      <GateModal isOpen={!isVerified} onAccessGranted={handleAccessGranted} />

      {/* 主功能區 - 只有驗證通過才顯示 */}
      <AnimatePresence>
        {isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full h-full"
          >
            {showParticles && text && (
              <ParticleExplosion text={text} onComplete={handleParticleComplete} />
            )}

            <div className="relative z-10 w-full h-full">
              <BlurredTextInput value={text} onChange={setText} />
            </div>

            <FlushButton onClick={handleFlush} disabled={!text.trim() || showParticles} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
