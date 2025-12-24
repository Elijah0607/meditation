# Vercel 部署指南

## 步驟 1: 推送代碼到 GitHub

### 如果還沒有 GitHub 倉庫：

1. 前往 [GitHub](https://github.com/new) 創建新倉庫
   - 倉庫名稱：`meditation` 或 `brain-noise-reduction`
   - 選擇 Public 或 Private
   - **不要**初始化 README、.gitignore 或 license（我們已經有了）

2. 創建後，GitHub 會顯示倉庫 URL，類似：
   ```
   https://github.com/你的用戶名/meditation.git
   ```

3. 在終端執行（替換成你的倉庫 URL）：

```bash
git remote add origin https://github.com/你的用戶名/meditation.git
git branch -M main
git push -u origin main
```

### 如果已經有 GitHub 倉庫：

```bash
# 檢查遠程倉庫
git remote -v

# 如果沒有遠程倉庫，添加它
git remote add origin https://github.com/你的用戶名/倉庫名.git

# 推送代碼
git push -u origin main
```

## 步驟 2: 在 Vercel 部署

### 2.1 導入項目

1. 前往 [Vercel](https://vercel.com)
2. 使用 GitHub 帳號登入
3. 點擊 **Add New...** → **Project**
4. 選擇你的 GitHub 倉庫（meditation）
5. 點擊 **Import**

### 2.2 配置項目設置

Vercel 會自動檢測 Next.js 項目，保持默認設置即可：

- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`（自動）
- **Output Directory**: `.next`（自動）
- **Install Command**: `npm install`（自動）

### 2.3 添加環境變數

在 **Environment Variables** 部分，添加以下變數：

```
NEXT_PUBLIC_SUPABASE_URL = https://yztmnzekgavqixjfmnvj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dG1uemVrZ2F2cWl4amZtbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NjExMDAsImV4cCI6MjA4MjEzNzEwMH0.o96bM8vVj2MWfMky7CPo8IOfItgW8XK8kX0KeBRJwgg
NEXT_PUBLIC_LINE_GROUP_URL = #
```

**重要**：
- 確保每個環境變數都添加到 **Production**、**Preview** 和 **Development** 環境
- 點擊每個變數旁邊的環境標籤來選擇

### 2.4 部署

1. 點擊 **Deploy** 按鈕
2. 等待構建完成（通常 1-2 分鐘）
3. 部署成功後，Vercel 會提供一個 URL，例如：
   ```
   https://meditation-xxx.vercel.app
   ```

## 步驟 3: 驗證部署

1. 訪問 Vercel 提供的 URL
2. 測試完整流程：
   - ✅ Phase 1: 輸入文字 → FLUSH
   - ✅ Phase 2: 呼吸動畫
   - ✅ Phase 3: 查看善意小語

## 步驟 4: 自定義域名（可選）

1. 在 Vercel 項目設置中，前往 **Domains**
2. 添加你的自定義域名
3. 按照指示配置 DNS 記錄

## 常見問題

### 構建失敗

- 檢查環境變數是否正確設置
- 查看 Vercel 構建日誌中的錯誤訊息
- 確保 `package.json` 中的依賴都正確

### 環境變數未生效

- 確保變數名稱以 `NEXT_PUBLIC_` 開頭（用於客戶端）
- 重新部署項目（環境變數更改後需要重新部署）

### Supabase 連接問題

- 確認 Supabase 項目狀態為 active
- 檢查 RLS 策略是否正確設置
- 確認 anon key 是否正確

## 後續更新

每次推送代碼到 GitHub 的 `main` 分支，Vercel 會自動重新部署。

```bash
git add .
git commit -m "更新說明"
git push
```

Vercel 會自動觸發新的部署。

