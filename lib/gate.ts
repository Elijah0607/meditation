/**
 * Gate (門禁) 相關工具函數
 */

const STORAGE_KEY = 'brain_noise_access';
const TIMESTAMP_KEY = 'brain_noise_timestamp';
const EXPIRY_DAYS = 30; // 30 天後需要重新驗證

/**
 * 檢查使用者是否已通過驗證
 */
export function isAccessGranted(): boolean {
  if (typeof window === 'undefined') return false;

  const access = localStorage.getItem(STORAGE_KEY);
  const timestamp = localStorage.getItem(TIMESTAMP_KEY);

  if (!access || access !== 'granted' || !timestamp) {
    return false;
  }

  // 檢查是否過期
  const now = Date.now();
  const storedTime = parseInt(timestamp, 10);
  const daysSinceAccess = (now - storedTime) / (1000 * 60 * 60 * 24);

  if (daysSinceAccess > EXPIRY_DAYS) {
    // 清除過期的驗證
    clearAccess();
    return false;
  }

  return true;
}

/**
 * 清除驗證狀態
 */
export function clearAccess(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TIMESTAMP_KEY);
}

/**
 * 設置驗證狀態
 */
export function setAccessGranted(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, 'granted');
  localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
}

