'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MessageInputProps {
  onSubmit: (message: string) => Promise<void>;
  isSubmitting: boolean;
}

export default function MessageInput({ onSubmit, isSubmitting }: MessageInputProps) {
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;

    await onSubmit(message.trim());
    setMessage('');
    setShowInput(false);
  };

  return (
    <div className="mt-12">
      {!showInput ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowInput(true)}
          className="px-8 py-4 bg-transparent border-2 border-cyberpunk-secondary text-cyberpunk-secondary font-mono text-lg hover:bg-cyberpunk-secondary hover:text-black transition-all duration-300"
          style={{
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          留下自己的一句話
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="寫下你想說的話..."
              className="w-full max-w-md bg-transparent border-2 border-cyberpunk-primary text-cyberpunk-primary placeholder:text-cyberpunk-primary/30 font-mono p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyberpunk-primary"
              rows={4}
              disabled={isSubmitting}
            />
            <div className="flex gap-4">
              <motion.button
                type="submit"
                disabled={!message.trim() || isSubmitting}
                className="px-6 py-2 bg-cyberpunk-primary text-black font-mono hover:bg-cyberpunk-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? '提交中...' : '送出'}
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setShowInput(false);
                  setMessage('');
                }}
                className="px-6 py-2 bg-transparent border-2 border-cyberpunk-primary text-cyberpunk-primary font-mono hover:bg-cyberpunk-primary hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                取消
              </motion.button>
            </div>
          </motion.form>
        </AnimatePresence>
      )}
    </div>
  );
}

