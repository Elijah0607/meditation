/**
 * 動畫配置常量
 */
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.8,
  BREATH_IN: 4,
  BREATH_OUT: 4,
} as const;

/**
 * 緩動函數
 */
export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
  easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
} as const;

