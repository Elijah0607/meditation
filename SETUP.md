# 大腦降噪 - 設置指南

## 前置需求

- Node.js 18+ 
- npm 或 yarn
- Supabase 帳號
- GitHub 帳號（用於部署）
- Vercel 帳號（用於部署）

## 本地開發設置

### 1. 安裝依賴

```bash
npm install
```

### 2. 設置 Supabase

#### 2.1 創建 Supabase 專案

1. 前往 [Supabase](https://supabase.com) 創建新專案
2. 記下你的專案 URL 和 anon key

#### 2.2 執行數據庫遷移

在 Supabase Dashboard 中：

1. 進入 SQL Editor
2. 執行 `supabase/migrations/001_create_messages_table.sql` 中的 SQL 語句

或者使用 Supabase CLI：

```bash
# 安裝 Supabase CLI
npm install -g supabase

# 登入 Supabase
supabase login

# 連結到你的專案
supabase link --project-ref your-project-ref

# 執行遷移
supabase db push
```

#### 2.3 設置環境變數

創建 `.env.local` 文件：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_LINE_GROUP_URL=https://line.me/ti/g/your_group_id
```

### 3. 運行開發服務器

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看應用。

## 部署到 Vercel

### 1. 推送代碼到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main
```

### 2. 在 Vercel 部署

1. 前往 [Vercel](https://vercel.com)
2. 導入你的 GitHub 倉庫
3. 在環境變數設置中添加：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_LINE_GROUP_URL`（可選）
4. 點擊部署

### 3. 設置 Supabase RLS

確保 Supabase 的 Row Level Security (RLS) 已正確設置：

- `messages` 表的讀取權限應對所有用戶開放（僅限 `is_active = true` 的記錄）
- `messages` 表的插入權限應對所有用戶開放

## 功能說明

### Phase 1: The Catharsis (宣洩區)

- 全螢幕文字輸入介面
- 文字自動模糊效果
- Flush 按鈕觸發粒子特效
- 完成後自動跳轉到真空區

### Phase 2: The Void (真空區)

- 全黑背景
- 呼吸燈動畫引導
- 3 次完整呼吸循環
- 完成後自動跳轉到共生區

### Phase 3: The Connection (共生區)

- 顯示隨機善意小語
- 用戶可以留下自己的話
- 低調的 Line Group 連結

## 自定義配置

### 修改顏色主題

編輯 `app/globals.css` 中的 CSS 變數：

```css
:root {
  --cyberpunk-primary: #00ff41;
  --cyberpunk-secondary: #00d9ff;
  --cyberpunk-glow: #00ff88;
}
```

### 添加更多善意小語

在 Supabase Dashboard 的 SQL Editor 中執行：

```sql
INSERT INTO messages (content, type) VALUES
  ('你的新訊息', 'system');
```

### 修改呼吸次數

編輯 `components/void/BreathingCircle.tsx` 中的 `TOTAL_BREATHS` 常數。

## 故障排除

### 構建錯誤

如果遇到構建錯誤，確保：
- 所有環境變數都已設置
- Supabase 表結構正確
- TypeScript 類型檢查通過

### Supabase 連接問題

- 檢查環境變數是否正確
- 確認 Supabase 專案狀態為 active
- 檢查 RLS 策略是否正確設置

### 動畫性能問題

- 在低端設備上，粒子特效可能會影響性能
- 可以考慮添加性能檢測並降低特效強度

## 技術棧

- **Next.js 14** - React 框架
- **TypeScript** - 類型安全
- **Tailwind CSS v4** - 樣式框架
- **Framer Motion** - 動畫庫
- **Supabase** - 後端即服務
- **Canvas API** - 粒子特效

## 許可證

MIT

