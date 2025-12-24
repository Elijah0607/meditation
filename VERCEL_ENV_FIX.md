# 修復 Vercel 環境變數錯誤

## 問題
錯誤訊息："The name contains invalid characters. Only letters, digits, and underscores are allowed."

## 解決方案

### 方法 1: 刪除並重新添加環境變數

1. **刪除所有現有的環境變數**
   - 點擊每個環境變數旁邊的 ❌ 刪除按鈕

2. **重新添加環境變數**（確保完全複製，沒有多餘空格）

   **變數 1:**
   ```
   Key: NEXT_PUBLIC_SUPABASE_URL
   Value: https://yztmnzekgavqixjfmnvj.supabase.co
   ```

   **變數 2:**
   ```
   Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dG1uemVrZ2F2cWl4amZtbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NjExMDAsImV4cCI6MjA4MjEzNzEwMH0.o96bM8vVj2MWfMky7CPo8IOfItgW8XK8kX0KeBRJwgg
   ```

   **變數 3:**
   ```
   Key: NEXT_PUBLIC_LINE_GROUP_URL
   Value: #
   ```

3. **確保每個變數都添加到所有環境**
   - 點擊每個變數右側的環境標籤
   - 勾選：Production、Preview、Development

### 方法 2: 使用 Import .env 功能

1. 點擊 **"Import .env"** 按鈕
2. 貼上以下內容：

```
NEXT_PUBLIC_SUPABASE_URL=https://yztmnzekgavqixjfmnvj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dG1uemVrZ2F2cWl4amZtbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NjExMDAsImV4cCI6MjA4MjEzNzEwMH0.o96bM8vVj2MWfMky7CPo8IOfItgW8XK8kX0KeBRJwgg
NEXT_PUBLIC_LINE_GROUP_URL=#
```

## 常見錯誤原因

1. **Key 名稱有空格或特殊字符**
   - ❌ `NEXT_PUBLIC_SUPABASE_URL ` (末尾有空格)
   - ✅ `NEXT_PUBLIC_SUPABASE_URL`

2. **Value 中有換行符或特殊字符**
   - 確保完整複製，沒有換行

3. **Key 名稱不完整**
   - 確保 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 完整（不是 `NEXT_PUBLIC_SUPABASE_ANON_KE`）

## 驗證步驟

添加完環境變數後：
1. 檢查每個 Key 是否完全正確
2. 確認沒有多餘的空格
3. 點擊 **Deploy** 按鈕

如果還有錯誤，嘗試：
- 刷新頁面
- 清除瀏覽器緩存
- 使用無痕模式重新配置

