'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import CyberpunkBackground from '@/components/shared/CyberpunkBackground';
import MessageDisplay from '@/components/connection/MessageDisplay';
import MessageInput from '@/components/connection/MessageInput';
import LineGroupLink from '@/components/connection/LineGroupLink';
import { getRandomSystemMessage, createUserMessage } from '@/lib/supabase/messages';
import { Message } from '@/types';

// 強制動態渲染，避免構建時預渲染
export const dynamic = 'force-dynamic';

// Line Group 連結（可從環境變數讀取）
const LINE_GROUP_URL = process.env.NEXT_PUBLIC_LINE_GROUP_URL || '#';

export default function ConnectionPage() {
  const [message, setMessage] = useState<Message | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 載入隨機系統訊息
    const loadMessage = async () => {
      const systemMessage = await getRandomSystemMessage();
      setMessage(systemMessage);
    };

    loadMessage();
  }, []);

  const handleSubmit = async (content: string) => {
    setIsSubmitting(true);
    try {
      await createUserMessage(content);
      // 提交成功後可以顯示提示或重新載入訊息
      const newMessage = await getRandomSystemMessage();
      setMessage(newMessage);
    } catch (error) {
      console.error('Failed to submit message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeave = () => {
    router.push('/');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cyberpunk-darker">
      <CyberpunkBackground />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-16">
        <MessageDisplay message={message} />

        <div className="mt-16 flex flex-col items-center gap-6">
          <MessageInput onSubmit={handleSubmit} isSubmitting={isSubmitting} />

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleLeave}
            className="px-8 py-3 bg-transparent border border-cyberpunk-primary/30 text-cyberpunk-primary/60 font-mono hover:border-cyberpunk-primary hover:text-cyberpunk-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            離開
          </motion.button>
        </div>
      </div>

      <LineGroupLink href={LINE_GROUP_URL} />
    </div>
  );
}

