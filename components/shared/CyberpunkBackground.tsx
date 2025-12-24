'use client';

import { useEffect, useRef } from 'react';

export default function CyberpunkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 設置畫布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 代碼雨效果
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // 初始化每列的起始位置
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      // 半透明黑色背景，創造拖尾效果
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 設置文字樣式
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      // 繪製每列
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // 繪製文字
        ctx.fillText(text, x, y);

        // 重置位置
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // 移動位置
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

