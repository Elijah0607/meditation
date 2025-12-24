# The Gate (門禁功能) 說明文檔

## 功能概述

「The Gate」是一個訪問控制機制，確保只有通過驗證的使用者才能進入核心功能區。同時作為導流漏斗，引導使用者加入 LINE 社群獲取通關密語。

## 功能特點

### 1. 鎖定核心功能
- 使用者進入首頁時，可以看到背景視覺效果
- 但必須通過驗證才能使用核心功能（文字輸入、FLUSH 按鈕等）
- 使用全螢幕 Modal 覆蓋，保持 Cyberpunk 風格

### 2. 驗證機制
- 4-10 位數密碼輸入（可配置）
- 前端驗證（簡單快速）
- 錯誤時顯示 "Signal Lost" 雜訊抖動特效
- 成功時顯示 "Access Granted"，畫面像電視關機一樣縮小消失

### 3. 持久化存儲
- 使用 `localStorage` 記住驗證狀態
- 30 天有效期（可配置）
- 清除瀏覽器快取後需要重新驗證

### 4. 導流漏斗
- 顯眼的 CTA 按鈕：「取得通關密語」
- 點擊後開新視窗連結到 LINE 社群
- 補充說明引導使用者到置頂公告領取密鑰

## 配置說明

### 環境變數

在 `.env.local` 或 Vercel 環境變數中添加：

```env
# 通關密語（預設：1984）
NEXT_PUBLIC_ACCESS_CODE=1984

# LINE 社群連結
NEXT_PUBLIC_LINE_GROUP_URL=https://line.me/ti/g/your_group_id
```

### 修改預設密碼

1. **方法 1：環境變數（推薦）**
   - 在 `.env.local` 設置 `NEXT_PUBLIC_ACCESS_CODE`
   - 在 Vercel 環境變數中設置

2. **方法 2：直接修改代碼**
   - 編輯 `components/shared/GateModal.tsx`
   - 修改 `ACCESS_CODE` 常數

### 修改有效期

編輯 `lib/gate.ts`：

```typescript
const EXPIRY_DAYS = 30; // 改為你想要的天數
```

## 使用流程

### 使用者視角

1. 訪問網站首頁
2. 看到「此頻率僅限內部成員連接」的 Modal
3. 輸入通關密語（或點擊「取得通關密語」加入 LINE 社群）
4. 驗證成功後，Modal 消失，進入主功能區
5. 30 天內再次訪問，自動通過驗證

### 開發者視角

1. 設置環境變數 `NEXT_PUBLIC_ACCESS_CODE`
2. 設置環境變數 `NEXT_PUBLIC_LINE_GROUP_URL`
3. 在 LINE 社群置頂公告中發布本週密鑰
4. 定期更新密碼（可選）

## 技術實現

### 組件結構

```
components/shared/GateModal.tsx  # 門禁 Modal 組件
lib/gate.ts                       # 驗證邏輯工具函數
app/page.tsx                      # 主頁面（整合 Gate）
```

### 驗證流程

```typescript
1. 頁面載入 → 檢查 localStorage
2. 如果已驗證且未過期 → 直接進入
3. 如果未驗證或已過期 → 顯示 GateModal
4. 使用者輸入密碼 → 驗證
5. 成功 → 保存到 localStorage → 進入主功能區
6. 失敗 → 顯示錯誤動畫 → 重置輸入
```

### 動畫效果

- **Modal 出現**：淡入 + 縮放
- **輸入框**：呼吸微光效果
- **錯誤狀態**：雜訊抖動 + 紅色邊框
- **成功狀態**：縮小消失（像電視關機）

## 自定義樣式

### 修改顏色

編輯 `components/shared/GateModal.tsx`：

```typescript
// 修改邊框顏色
border-cyberpunk-primary/50

// 修改發光效果
boxShadow: '0 0 40px rgba(0, 255, 65, 0.3)'
```

### 修改動畫

編輯 `components/shared/GateModal.tsx` 中的 `motion` 組件：

```typescript
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: 0.8, opacity: 0 }}
```

## 測試

### 本地測試

1. 啟動開發服務器：`npm run dev`
2. 訪問首頁，應該看到 Gate Modal
3. 輸入錯誤密碼，測試錯誤動畫
4. 輸入正確密碼（預設：1984），測試成功動畫
5. 刷新頁面，應該自動通過驗證

### 清除驗證狀態

在瀏覽器控制台執行：

```javascript
localStorage.removeItem('brain_noise_access');
localStorage.removeItem('brain_noise_timestamp');
location.reload();
```

## 安全注意事項

⚠️ **重要**：這是前端驗證，僅用於導流和體驗控制，不是真正的安全機制。

- 密碼存儲在客戶端代碼中
- 技術使用者可以查看源代碼找到密碼
- 適合用於：社群導流、體驗控制、輕量級訪問管理
- 不適合用於：敏感數據保護、付費內容保護

如果需要真正的安全驗證，建議：
- 使用後端 API 驗證
- 使用 Supabase Auth
- 使用 JWT Token

## 常見問題

### Q: 如何更改密碼？
A: 修改環境變數 `NEXT_PUBLIC_ACCESS_CODE` 或直接修改代碼中的 `ACCESS_CODE`。

### Q: 如何清除所有使用者的驗證狀態？
A: 更改密碼即可，舊的驗證狀態會失效。

### Q: 可以設置多個密碼嗎？
A: 目前不支援，但可以修改 `GateModal.tsx` 中的驗證邏輯來實現。

### Q: 如何禁用 Gate 功能？
A: 在 `app/page.tsx` 中設置 `isVerified` 初始值為 `true`，或移除 GateModal 組件。

---

**版本**: 1.0.0  
**最後更新**: 2025-01-27

