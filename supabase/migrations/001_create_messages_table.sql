-- 創建 messages 表
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  type VARCHAR(20) DEFAULT 'user' CHECK (type IN ('system', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- 創建索引以優化查詢
CREATE INDEX IF NOT EXISTS idx_messages_type_active ON messages(type, is_active);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);

-- 插入預設善意小語
INSERT INTO messages (content, type) VALUES
  ('你看見我，照亮我', 'system'),
  ('此刻的你，已經足夠', 'system'),
  ('呼吸之間，萬物歸一', 'system'),
  ('你的存在，本身就是奇蹟', 'system'),
  ('在黑暗中，你依然發光', 'system'),
  ('每一刻都是新的開始', 'system'),
  ('你並不孤單', 'system'),
  ('靜下來，聽聽內心的聲音', 'system'),
  ('讓思緒如雲般飄散', 'system'),
  ('此刻，只有你與當下', 'system')
ON CONFLICT DO NOTHING;

-- 啟用 Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 刪除已存在的策略（如果存在）
DROP POLICY IF EXISTS "Allow public read access to active messages" ON messages;
DROP POLICY IF EXISTS "Allow public insert access" ON messages;

-- 設置 RLS 策略：所有人都可以讀取 active 的訊息
CREATE POLICY "Allow public read access to active messages"
  ON messages
  FOR SELECT
  USING (is_active = true);

-- 設置 RLS 策略：所有人都可以插入新訊息
CREATE POLICY "Allow public insert access"
  ON messages
  FOR INSERT
  WITH CHECK (true);

