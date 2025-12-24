import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// 創建客戶端，即使環境變數未設置也不會拋出錯誤
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

