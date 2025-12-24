'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GateModalProps {
  isOpen: boolean;
  onAccessGranted: () => void;
}

// 通關密語（可從環境變數讀取，目前使用預設值）
// 注意：這是前端驗證，僅用於導流，不是真正的安全機制
const ACCESS_CODE = (process.env.NEXT_PUBLIC_ACCESS_CODE || '1984').toUpperCase();
const LINE_GROUP_URL = process.env.NEXT_PUBLIC_LINE_GROUP_URL || '#';

export default function GateModal({ isOpen, onAccessGranted }: GateModalProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code === ACCESS_CODE) {
      // 成功：保存到 localStorage
      localStorage.setItem('brain_noise_access', 'granted');
      localStorage.setItem('brain_noise_timestamp', Date.now().toString());
      onAccessGranted();
    } else {
      // 錯誤：顯示錯誤狀態
      setError(true);
      setIsGlitching(true);
      setCode('');
      
      // 重置錯誤狀態
      setTimeout(() => {
        setError(false);
        setIsGlitching(false);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 2000);
    }
  };

  const handleGetCode = () => {
    window.open(LINE_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-md mx-4 p-8 border-2 border-cyberpunk-primary/50 bg-black/90"
          style={{
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.3), inset 0 0 40px rgba(0, 255, 65, 0.1)',
          }}
        >
          {/* 標題 */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-mono text-cyberpunk-primary mb-2 text-center"
            style={{ textShadow: '0 0 10px currentColor' }}
          >
            此頻率僅限內部成員連接
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-mono text-cyberpunk-primary/60 mb-8 text-center"
          >
            Restricted Frequency
          </motion.p>

          {/* 輸入框 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <motion.input
                ref={inputRef}
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError(false);
                }}
                placeholder="輸入通關密語"
                maxLength={10}
                className={`w-full px-4 py-3 bg-transparent border-2 font-mono text-cyberpunk-primary text-center text-xl focus:outline-none transition-all duration-300 ${
                  error
                    ? 'border-red-500 animate-pulse'
                    : 'border-cyberpunk-primary/50 focus:border-cyberpunk-primary'
                }`}
                style={{
                  textShadow: '0 0 10px currentColor',
                  boxShadow: error
                    ? '0 0 20px rgba(255, 0, 0, 0.5)'
                    : '0 0 20px rgba(0, 255, 65, 0.3)',
                  animation: !error ? 'breathing 3s ease-in-out infinite' : undefined,
                }}
                animate={
                  isGlitching
                    ? {
                        x: [0, -5, 5, -5, 5, 0],
                        opacity: [1, 0.8, 1, 0.8, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.1, repeat: 5 }}
              />
              
              {/* 錯誤訊息 */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-0 right-0 text-center text-red-500 font-mono text-sm"
                    style={{
                      textShadow: '0 0 10px currentColor',
                      filter: 'blur(0.5px)',
                    }}
                  >
                    Signal Lost
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 提交按鈕 */}
            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full px-6 py-3 bg-transparent border-2 border-cyberpunk-primary text-cyberpunk-primary font-mono hover:bg-cyberpunk-primary hover:text-black transition-all duration-300"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              驗證連接
            </motion.button>
          </form>

          {/* 導流按鈕 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-cyberpunk-primary/20"
          >
            <motion.button
              onClick={handleGetCode}
              className="w-full px-6 py-4 bg-cyberpunk-primary text-black font-mono text-lg font-bold hover:bg-cyberpunk-glow transition-all duration-300 mb-3"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 65, 0.6)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              取得通關密語
            </motion.button>
            <p className="text-xs font-mono text-cyberpunk-primary/50 text-center leading-relaxed">
              加入「大腦降噪」實驗室，<br />
              在置頂公告領取本週密鑰。
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

