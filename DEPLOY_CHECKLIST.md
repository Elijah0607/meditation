# 部署檢查清單

## ✅ 已完成

- [x] 代碼已提交到本地 Git 倉庫
- [x] 環境變數已配置（.env.local）
- [x] Supabase RLS 策略已設置

## 📋 待完成步驟

### 1. 創建 GitHub 倉庫並推送代碼

**選項 A: 在 GitHub 網站創建（推薦）**

1. 前往 https://github.com/new
2. 倉庫名稱：`meditation` 或 `brain-noise-reduction`
3. 選擇 **Public** 或 **Private**
4. **不要**勾選任何初始化選項（README、.gitignore、license）
5. 點擊 **Create repository**

6. 複製倉庫 URL（例如：`https://github.com/你的用戶名/meditation.git`）

7. 在終端執行：

```bash
cd /Users/chenquanfa/meditation
git remote add origin https://github.com/你的用戶名/meditation.git
git branch -M main
git push -u origin main
```

**選項 B: 使用 GitHub CLI（如果已安裝）**

```bash
gh repo create meditation --public --source=. --remote=origin --push
```

### 2. 在 Vercel 部署

1. **登入 Vercel**
   - 前往 https://vercel.com
   - 使用 GitHub 帳號登入

2. **導入項目**
   - 點擊 **Add New...** → **Project**
   - 選擇你的 GitHub 倉庫
   - 點擊 **Import**

3. **配置環境變數**
   
   在 **Environment Variables** 部分添加：

   ```
   NEXT_PUBLIC_SUPABASE_URL
   = https://yztmnzekgavqixjfmnvj.supabase.co
   
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dG1uemVrZ2F2cWl4amZtbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NjExMDAsImV4cCI6MjA4MjEzNzEwMH0.o96bM8vVj2MWfMky7CPo8IOfItgW8XK8kX0KeBRJwgg
   
   NEXT_PUBLIC_LINE_GROUP_URL
   = #
   ```

   **重要**：確保添加到所有環境（Production、Preview、Development）

4. **部署**
   - 點擊 **Deploy**
   - 等待構建完成（約 1-2 分鐘）

### 3. 驗證部署

- [ ] 訪問 Vercel 提供的 URL
- [ ] 測試 Phase 1（輸入文字 → FLUSH）
- [ ] 測試 Phase 2（呼吸動畫）
- [ ] 測試 Phase 3（查看善意小語）

## 🔗 快速參考

- **Supabase 項目**: https://supabase.com/dashboard/project/yztmnzekgavqixjfmnvj
- **GitHub 新倉庫**: https://github.com/new
- **Vercel Dashboard**: https://vercel.com/dashboard

## 📝 注意事項

1. **環境變數安全**：`.env.local` 不會被推送到 GitHub（已在 .gitignore 中）
2. **自動部署**：之後每次推送到 `main` 分支，Vercel 會自動重新部署
3. **自定義域名**：可在 Vercel 項目設置中添加自定義域名

