'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleExplosionProps {
  text: string;
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function ParticleExplosion({ text, onComplete }: ParticleExplosionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !text) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 創建粒子
    const fontSize = 24;
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = '#00ff41';

    const particles: Particle[] = [];
    const textWidth = ctx.measureText(text).width;
    const startX = (canvas.width - textWidth) / 2;
    const startY = canvas.height / 2;

    // 將文字轉換為粒子
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charWidth = ctx.measureText(char).width;
      const x = startX + ctx.measureText(text.substring(0, i)).width;

      // 每個字符創建多個粒子
      for (let j = 0; j < 3; j++) {
        particles.push({
          x: x + Math.random() * charWidth,
          y: startY + (Math.random() - 0.5) * fontSize,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10 - 2,
          life: 1,
          maxLife: 1,
          size: Math.random() * 3 + 1,
        });
      }
    }

    particlesRef.current = particles;

    // 動畫循環（優化性能）
    const animate = () => {
      if (!ctx) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const remainingParticles: Particle[] = [];

      // 批量繪製以提高性能
      ctx.save();
      ctx.fillStyle = '#00ff41';
      
      particlesRef.current.forEach((particle) => {
        // 更新位置
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.2; // 重力
        particle.life -= 0.02;

        // 繪製粒子
        if (particle.life > 0) {
          ctx.globalAlpha = particle.life;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          remainingParticles.push(particle);
        }
      });
      
      ctx.restore();

      particlesRef.current = remainingParticles;

      if (remainingParticles.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [text, onComplete]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
}

