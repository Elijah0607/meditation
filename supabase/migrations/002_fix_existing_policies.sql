-- 修復已存在的 RLS 策略
-- 如果策略已存在，先刪除再重新創建

-- 刪除已存在的策略（如果存在）
DROP POLICY IF EXISTS "Allow public read access to active messages" ON messages;
DROP POLICY IF EXISTS "Allow public insert access" ON messages;

-- 重新創建策略
CREATE POLICY "Allow public read access to active messages"
  ON messages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow public insert access"
  ON messages
  FOR INSERT
  WITH CHECK (true);

