# 推送代碼到 GitHub

## 方法 1: 使用 GitHub CLI（最簡單）

如果你已安裝 GitHub CLI：

```bash
cd /Users/chenquanfa/meditation
gh auth login
gh repo create meditation --public --source=. --remote=origin --push
```

## 方法 2: 使用 Personal Access Token

1. **創建 Personal Access Token**：
   - 前往：https://github.com/settings/tokens
   - 點擊 **Generate new token (classic)**
   - 勾選 `repo` 權限
   - 複製生成的 token

2. **推送代碼**：

```bash
cd /Users/chenquanfa/meditation

# 使用 token 作為密碼推送
git push -u origin main
# 當提示輸入用戶名時：輸入你的 GitHub 用戶名
# 當提示輸入密碼時：貼上剛才複製的 token
```

## 方法 3: 使用 SSH（如果已配置 SSH key）

```bash
cd /Users/chenquanfa/meditation
git remote set-url origin git@github.com:Elijah0607/meditation.git
git push -u origin main
```

## 方法 4: 在 GitHub 網站手動上傳（臨時方案）

如果以上方法都不行，可以：

1. 在 GitHub 網站創建倉庫（已完成）
2. 使用 GitHub Desktop 或其他 Git 客戶端推送
3. 或者使用 Vercel 的 GitHub 集成，讓 Vercel 自動拉取代碼

---

**推薦使用方法 1 或方法 2**。

