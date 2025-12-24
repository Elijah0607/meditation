export type MessageType = 'system' | 'user';

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  created_at: string;
  is_active: boolean;
}

