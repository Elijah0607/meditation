-- 驗證數據庫設置是否完整
-- 在 Supabase SQL Editor 中執行此查詢來檢查設置

-- 1. 檢查表是否存在
SELECT 
  table_name,
  table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name = 'messages';

-- 2. 檢查預設系統訊息數量（應該有 10 條）
SELECT 
  COUNT(*) as system_messages_count,
  type
FROM messages
WHERE type = 'system'
GROUP BY type;

-- 3. 檢查 RLS 是否啟用
SELECT 
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public' 
  AND tablename = 'messages';

-- 4. 檢查 RLS 策略
SELECT 
  policyname,
  cmd as command,
  qual as using_expression,
  with_check as with_check_expression
FROM pg_policies
WHERE tablename = 'messages';

-- 5. 查看所有預設訊息內容
SELECT 
  id,
  content,
  type,
  created_at,
  is_active
FROM messages
WHERE type = 'system'
ORDER BY created_at;

