# 微交互和动画系统文档

## 概述

本次更新添加了完整的微交互和动画系统，提升用户体验和视觉反馈。

## 1. 过渡动画

### 1.1 页面切换动画

**PageTransition 组件**：
- 淡入淡出效果
- 轻微的垂直位移（8px）
- 持续时间：0.3 秒
- 缓动函数：easeInOut

**使用方式**：
```tsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```

**应用页面**：
- ✅ Home (Feed)
- ✅ Events
- ✅ Resources
- ✅ Profile

### 1.2 卡片 Hover 动画

**Card 组件**：
- 添加 `card-animate` 类
- Hover 时：向上移动 2px (`translateY(-2px)`)
- 阴影变化：从 `shadow-sm` 到 `shadow-md`
- 过渡时间：0.2 秒

**CSS 实现**：
```css
.card-animate {
  transition: all 0.2s ease-in-out;
}

.card-animate:hover {
  transform: translateY(-2px);
}
```

### 1.3 按钮点击反馈

**Button 组件**：
- 添加 `button-animate` 类
- 点击时：缩放至 97% (`scale(0.97)`)
- 阴影变化：轻微减少
- 过渡时间：0.15 秒

**CSS 实现**：
```css
.button-animate:active {
  transform: scale(0.97);
}
```

## 2. 列表动画

### 2.1 内容流动画

**ContentFeed 组件**：
- 每个卡片依次淡入
- 延迟：每个卡片延迟 0.05 秒
- 初始状态：`opacity: 0, y: 20`
- 动画状态：`opacity: 1, y: 0`
- 持续时间：0.3 秒

**实现**：
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.3,
    delay: index * 0.05,
    ease: 'easeOut',
  }}
>
  <FeedCard {...props} />
</motion.div>
```

### 2.2 Events 列表动画

- 每个活动卡片依次淡入
- 延迟递增：0.05 秒间隔
- 平滑的垂直滑入效果

### 2.3 Resources 网格动画

- 网格布局中的卡片依次淡入
- 延迟递增：0.05 秒间隔
- 保持网格布局的同时添加动画

## 3. 加载状态

### 3.1 骨架屏组件

**Skeleton 基础组件**：
```tsx
<Skeleton className="h-4 w-full" />
```

**专用骨架屏**：
- `FeedCardSkeleton` - Feed 卡片骨架屏
- `EventCardSkeleton` - 活动卡片骨架屏
- `ResourceCardSkeleton` - 资源卡片骨架屏

**特点**：
- 脉冲动画（pulse）
- 圆角设计
- 与真实内容布局一致

### 3.2 加载指示器

**LoadingSpinner**：
- 旋转动画
- 三种尺寸：sm, md, lg
- 可访问性支持（aria-label）

**LoadingPage**：
- 全屏加载状态
- 包含旋转指示器和文字
- 用于页面级加载

**使用示例**：
```tsx
import { LoadingPage, LoadingSpinner } from '@/components/ui/loading';

// 页面加载
if (isLoading) {
  return <LoadingPage />;
}

// 内联加载
<LoadingSpinner size="md" />
```

## 4. 动画配置

### 4.1 动画时长

```css
/* 快速动画 */
--duration-fast: 0.15s;

/* 标准动画 */
--duration-normal: 0.2s;

/* 慢速动画 */
--duration-slow: 0.3s;
```

### 4.2 缓动函数

- **easeInOut**: 标准缓动（页面切换）
- **easeOut**: 快速开始，缓慢结束（列表动画）

### 4.3 延迟策略

- **列表项**：每个项目延迟 0.05 秒
- **创建级联效果**：视觉上更流畅

## 5. 性能优化

### 5.1 硬件加速

- 使用 `transform` 和 `opacity` 进行动画
- 避免动画 `width`、`height`、`top`、`left` 等属性
- 使用 `will-change` 提示浏览器优化

### 5.2 动画减少

- 尊重用户的 `prefers-reduced-motion` 设置
- 可以添加媒体查询支持

### 5.3 延迟加载

- 骨架屏在内容加载前显示
- 避免闪烁和布局偏移

## 6. 使用指南

### 6.1 添加页面过渡

```tsx
import PageTransition from '@/components/shared/PageTransition';

export default function MyPage() {
  return (
    <PageTransition>
      <YourContent />
    </PageTransition>
  );
}
```

### 6.2 添加列表动画

```tsx
import { motion } from 'framer-motion';

{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      delay: index * 0.05,
      ease: 'easeOut',
    }}
  >
    <YourCard item={item} />
  </motion.div>
))}
```

### 6.3 使用骨架屏

```tsx
import { FeedCardSkeleton } from '@/components/ui/loading';

{isLoading ? (
  <>
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
  </>
) : (
  <ContentFeed items={items} />
)}
```

## 7. 动画效果总结

### 7.1 已实现的动画

- ✅ 页面切换：淡入淡出 + 垂直位移
- ✅ 卡片 Hover：提升 + 阴影变化
- ✅ 按钮点击：缩放反馈
- ✅ 列表项：依次淡入
- ✅ 加载状态：骨架屏 + 旋转指示器

### 7.2 动画时长

| 动画类型 | 时长 | 延迟 |
|---------|------|------|
| 页面切换 | 0.3s | - |
| 卡片 Hover | 0.2s | - |
| 按钮点击 | 0.15s | - |
| 列表项 | 0.3s | 0.05s × index |

## 8. 更新的组件

### 8.1 新增组件
- `components/ui/skeleton.tsx` - 骨架屏基础组件
- `components/ui/loading.tsx` - 加载状态组件
- `components/shared/PageTransition.tsx` - 页面过渡组件

### 8.2 更新的组件
- `components/ui/card.tsx` - 添加 `card-animate` 类
- `components/ui/button.tsx` - 添加 `button-animate` 类
- `components/dashboard/ContentFeed.tsx` - 添加列表动画
- `components/events/EventList.tsx` - 添加列表动画
- `components/resources/ResourceGrid.tsx` - 添加列表动画
- 所有页面组件 - 添加 PageTransition

### 8.3 CSS 更新
- `app/globals.css` - 添加动画关键帧和工具类

## 9. 最佳实践

### 9.1 动画原则
1. **微妙**：动画应该增强体验，不干扰用户
2. **快速**：动画时长控制在 0.3 秒以内
3. **一致**：相同类型的动画使用相同的配置
4. **性能**：使用 GPU 加速的属性

### 9.2 何时使用动画
- ✅ 页面切换
- ✅ 列表加载
- ✅ 交互反馈（Hover、Click）
- ✅ 状态变化

### 9.3 何时不使用动画
- ❌ 频繁触发的操作
- ❌ 大量元素同时动画
- ❌ 用户明确禁用动画

## 10. 后续优化

1. **响应式动画**：根据设备性能调整动画复杂度
2. **可访问性**：添加 `prefers-reduced-motion` 支持
3. **更多骨架屏**：为其他组件创建专用骨架屏
4. **加载状态**：添加进度条和百分比显示
5. **错误状态**：添加错误动画和重试机制

---

**更新日期**: 2025-01-27  
**版本**: 4.0.0

