# Supabase 數據庫設置說明

## 步驟 1: 在 Supabase Dashboard 執行 SQL

1. 前往你的 Supabase 專案：https://supabase.com/dashboard/project/yztmnzekgavqixjfmnvj
2. 點擊左側選單的 **SQL Editor**
3. 點擊 **New query**
4. 複製並貼上以下 SQL 語句（已修復重複執行問題）：

```sql
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

-- 刪除已存在的策略（如果存在）- 避免重複執行錯誤
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
```

5. 點擊 **Run** 執行 SQL

## 步驟 2: 驗證設置

執行完成後，你可以：

1. 前往 **Table Editor** 查看 `messages` 表
2. 確認有 10 條 `type='system'` 的預設訊息
3. 確認 RLS 已啟用（在 **Authentication > Policies** 中查看）

## 步驟 3: 測試本地開發

```bash
npm run dev
```

打開 http://localhost:3000 測試應用功能。

## 常見問題

### 如果遇到 "relation does not exist" 錯誤
- 確保 SQL 語句完整執行
- 檢查表名是否正確（`messages`）

### 如果無法讀取訊息
- 檢查 RLS 策略是否正確設置
- 確認 `is_active = true` 的條件

### 如果無法插入訊息
- 檢查 INSERT 策略是否已創建
- 確認 anon key 是否正確

