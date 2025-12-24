# 视觉设计系统升级文档

## 概述

本次更新将设计系统从赛博庞克深色风格升级为现代简洁的浅色设计系统，提升视觉层次感和用户体验。

## 1. 配色系统

### 1.1 背景层次

```css
--color-background: #fafafa        /* 主背景 - 非常浅的灰 */
--color-card: #ffffff              /* 卡片背景 - 纯白，形成对比 */
--color-secondary-bg: #f5f5f5     /* 次要背景 - 用于侧边栏等 */
```

### 1.2 文字层次

```css
--color-primary-text: #0a0a0a     /* 主文字 - 接近黑色，高对比度 */
--color-secondary-text: #525252   /* 次要文字 - 中灰 */
--color-muted-text: #737373       /* 辅助文字 - 浅灰 */
```

### 1.3 强调色

```css
--color-primary: #2563eb          /* 深蓝 - 主要强调色 */
--color-destructive: #ef4444      /* 红色 - 错误/警告 */
```

## 2. 阴影系统

### 2.1 卡片阴影

**默认状态**：
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
```

**Hover 状态**：
```css
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
```

**提升状态**：
```css
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
```

### 2.2 输入框聚焦阴影

```css
--shadow-input-focus: 0 0 0 3px rgba(37, 99, 235, 0.1);
```

### 2.3 使用方式

在组件中使用工具类：

```tsx
// 卡片默认阴影
<Card className="card-shadow">

// 按钮阴影
<Button className="button-shadow">

// 输入框聚焦效果
<Input className="input-focus">
```

## 3. 边框和分隔

### 3.1 边框颜色

```css
--color-border: #e0e0e0          /* 更明显但不突兀 */
--color-input: #e0e0e0
```

### 3.2 圆角系统

```css
--color-radius: 0.75rem;         /* 12px - 统一使用 */
--radius-sm: 0.5rem;             /* 8px */
--radius-md: 0.75rem;            /* 12px */
--radius-lg: 1rem;               /* 16px */
```

**应用规则**：
- 卡片：`rounded-lg` (12px)
- 按钮：`rounded-lg` (12px)
- 输入框：`rounded-lg` (12px)
- 小元素：`rounded-md` (8px)

## 4. 间距系统

基于 4px 基准的间距系统：

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 0.75rem;   /* 12px */
--spacing-lg: 1rem;      /* 16px */
--spacing-xl: 1.5rem;    /* 24px */
--spacing-2xl: 2rem;     /* 32px */
```

### 4.1 容器间距

- 页面容器：`px-6 py-8` (24px 水平，32px 垂直)
- 卡片内边距：`p-6` (24px)
- 元素间距：使用 `gap-4` (16px) 或 `gap-6` (24px)

## 5. 组件更新

### 5.1 Card 组件

- ✅ 圆角：`rounded-lg` (12px)
- ✅ 阴影：使用 `card-shadow` 类
- ✅ 边框：使用新的边框颜色

### 5.2 Button 组件

- ✅ 圆角：`rounded-lg` (12px)
- ✅ 阴影：使用 `button-shadow` 类
- ✅ 过渡效果：`transition-all`

### 5.3 Input 组件

- ✅ 圆角：`rounded-lg` (12px)
- ✅ 聚焦效果：使用 `input-focus` 类
- ✅ 阴影：聚焦时显示微妙光晕

### 5.4 布局组件

**Sidebar**：
- 背景：`bg-secondary-bg` (#f5f5f5)
- Logo 区域：`bg-card` (#ffffff)

**MainContent**：
- 背景：`bg-background` (#fafafa)

**RightSidebar**：
- 背景：`bg-secondary-bg` (#f5f5f5)
- 内部卡片：`bg-card` (#ffffff)

## 6. 视觉层次

### 6.1 背景层次

```
主背景 (#fafafa)
  └─ 卡片 (#ffffff) - 形成对比
  └─ 侧边栏 (#f5f5f5) - 次要层次
```

### 6.2 文字层次

```
主文字 (#0a0a0a) - 标题、重要内容
  └─ 次要文字 (#525252) - 描述、元数据
  └─ 辅助文字 (#737373) - 提示、占位符
```

### 6.3 阴影层次

```
默认 (shadow-sm) - 基础卡片
  └─ Hover (shadow-md) - 交互反馈
  └─ 提升 (shadow-lg) - 重要内容
```

## 7. 使用指南

### 7.1 创建新卡片

```tsx
<Card className="mb-4">
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    {/* 内容 */}
  </CardContent>
</Card>
```

### 7.2 创建按钮

```tsx
<Button variant="default" className="button-shadow">
  按钮文字
</Button>
```

### 7.3 创建输入框

```tsx
<Input 
  className="input-focus"
  placeholder="输入内容"
/>
```

## 8. 最佳实践

1. **一致性**：所有卡片使用相同的圆角和阴影
2. **层次感**：通过背景色和阴影创建视觉层次
3. **呼吸感**：使用合理的间距，避免拥挤
4. **交互反馈**：Hover 状态使用更明显的阴影
5. **聚焦状态**：输入框聚焦时显示微妙光晕

## 9. 迁移检查清单

- [x] 更新全局 CSS 变量
- [x] 更新 Card 组件样式
- [x] 更新 Button 组件样式
- [x] 更新 Input 组件样式
- [x] 更新布局组件背景色
- [x] 添加阴影工具类
- [x] 统一圆角系统
- [x] 更新间距系统

## 10. 后续优化

1. **响应式设计**：确保移动端体验良好
2. **暗色模式**：可选的暗色主题支持
3. **动画效果**：添加微妙的过渡动画
4. **可访问性**：确保对比度符合 WCAG 标准

---

**更新日期**: 2025-01-27  
**版本**: 2.0.0

