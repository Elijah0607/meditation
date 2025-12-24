# 修復 Vercel 部署錯誤

## 問題分析

從截圖看到兩個需要修復的問題：

### 1. Framework Preset 設置錯誤
- ❌ 當前選擇：**Other**
- ✅ 應該選擇：**Next.js**

### 2. 需要先推送代碼到 GitHub
- GitHub 倉庫目前是空的，需要先推送代碼

## 解決步驟

### 步驟 1: 推送代碼到 GitHub

在終端執行：

```bash
cd /Users/chenquanfa/meditation

# 如果還沒登入 GitHub CLI
gh auth login

# 推送代碼
git push -u origin main
```

如果 `gh auth login` 失敗，可以：

1. **使用 Personal Access Token**：
   - 前往：https://github.com/settings/tokens
   - 創建新 token（勾選 `repo` 權限）
   - 執行：
   ```bash
   git push -u origin main
   # 用戶名：Elijah0607
   # 密碼：貼上你的 token
   ```

2. **或使用 SSH**（如果已配置）：
   ```bash
   git remote set-url origin git@github.com:Elijah0607/meditation.git
   git push -u origin main
   ```

### 步驟 2: 在 Vercel 重新配置

推送代碼後，在 Vercel：

1. **刷新頁面**或重新導入項目

2. **修正 Framework Preset**：
   - 將 **Framework Preset** 從 "Other" 改為 **"Next.js"**
   - Vercel 會自動檢測並設置正確的構建配置

3. **確認環境變數**：
   確保這 3 個變數都已添加：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_LINE_GROUP_URL`

4. **確認項目設置**：
   - **Root Directory**: `./` ✅
   - **Build Command**: 自動設置為 `npm run build` ✅
   - **Output Directory**: 自動設置為 `.next` ✅

5. **點擊 Deploy**

## 正確的 Vercel 配置

```
Framework Preset: Next.js  ← 重要！
Root Directory: ./
Build Command: npm run build (自動)
Output Directory: .next (自動)
Install Command: npm install (自動)
```

## 如果還有錯誤

如果項目名稱 "meditation" 仍然報錯，可以嘗試：

1. 將項目名稱改為 `meditation-app` 或 `brain-noise-reduction`
2. 或者檢查是否有特殊字符（應該沒有）

---

**關鍵點**：Framework Preset 必須選擇 **Next.js**，這樣 Vercel 才能正確構建 Next.js 項目。

