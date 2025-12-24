import { supabase } from './client';
import { Message, MessageType } from '@/types';

/**
 * 獲取隨機系統訊息（預設善意小語）
 */
export async function getRandomSystemMessage(): Promise<Message | null> {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('type', 'system')
      .eq('is_active', true)
      .limit(100);

    if (error) throw error;

    if (!data || data.length === 0) {
      return null;
    }

    // 隨機選擇一條訊息
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex] as Message;
  } catch (error) {
    console.error('Error fetching random system message:', error);
    return null;
  }
}

/**
 * 創建用戶留言
 */
export async function createUserMessage(content: string): Promise<Message | null> {
  try {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        content: content.trim(),
        type: 'user' as MessageType,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;

    return data as Message;
  } catch (error) {
    console.error('Error creating user message:', error);
    return null;
  }
}

