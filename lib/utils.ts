/**
 * 延遲函數
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 生成隨機數
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * 限制數值範圍
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

