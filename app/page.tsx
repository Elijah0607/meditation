'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CyberpunkBackground from '@/components/shared/CyberpunkBackground';
import BlurredTextInput from '@/components/catharsis/BlurredTextInput';
import FlushButton from '@/components/catharsis/FlushButton';
import ParticleExplosion from '@/components/catharsis/ParticleExplosion';

export default function CatharsisPage() {
  const [text, setText] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const router = useRouter();

  const handleFlush = () => {
    if (!text.trim()) return;
    
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

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cyberpunk-darker">
      <CyberpunkBackground />
      
      {showParticles && text && (
        <ParticleExplosion text={text} onComplete={handleParticleComplete} />
      )}

      <div className="relative z-10 w-full h-full">
        <BlurredTextInput value={text} onChange={setText} />
      </div>

      <FlushButton onClick={handleFlush} disabled={!text.trim() || showParticles} />
    </div>
  );
}
