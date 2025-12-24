# Typography 系统文档

## 概述

本次更新优化了字体排版系统，提升了可读性和视觉层次感。使用 Inter 作为主要字体，配合 Geist 作为备选，确保中英文都优雅显示。

## 1. 字体选择

### 1.1 字体栈

```css
--font-sans: Inter, Geist Sans, -apple-system, BlinkMacSystemFont, 
             "Segoe UI", "PingFang SC", "Hiragino Sans GB", 
             "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**字体优先级**：
1. **Inter** - 主要英文字体（现代、清晰）
2. **Geist Sans** - 备选英文字体（Vercel 优化）
3. **系统字体** - 中文字体自动选择最佳显示

### 1.2 中文字体支持

- **macOS/iOS**: PingFang SC（苹方）
- **Windows**: Microsoft YaHei（微软雅黑）
- **Android**: 系统默认中文字体

### 1.3 代码字体

```css
--font-mono: Geist Mono, "SF Mono", Monaco, "Cascadia Code", 
             "Roboto Mono", Consolas, "Courier New", monospace;
```

## 2. 字体大小系统

```css
--font-size-xs: 0.75rem;    /* 12px - 小字/辅助信息 */
--font-size-sm: 0.875rem;   /* 14px - 次要文字 */
--font-size-base: 1rem;     /* 16px - 正文 */
--font-size-lg: 1.125rem;   /* 18px - 大正文 */
--font-size-xl: 1.25rem;    /* 20px - 小标题 */
--font-size-2xl: 1.5rem;    /* 24px - 标题 */
--font-size-3xl: 1.875rem;  /* 30px - 大标题 */
--font-size-4xl: 2.25rem;    /* 36px - 超大标题 */
--font-size-5xl: 3rem;      /* 48px - 展示标题 */
```

## 3. 字重系统

```css
--font-weight-normal: 400;    /* 正文 */
--font-weight-medium: 500;    /* 强调 */
--font-weight-semibold: 600;  /* 标题 */
--font-weight-bold: 700;      /* 重要标题 */
```

## 4. 行高系统

```css
--line-height-tight: 1.25;     /* 标题 - 紧凑 */
--line-height-snug: 1.375;     /* 小标题 - 适中 */
--line-height-normal: 1.5;     /* 默认 - 标准 */
--line-height-relaxed: 1.625;  /* 正文 - 舒适（推荐） */
--line-height-loose: 1.75;     /* 大段落 - 宽松 */
```

**推荐使用**：
- 标题：`line-height-tight` (1.25)
- 正文：`line-height-relaxed` (1.625-1.7) - 提升可读性
- 小字：`line-height-normal` (1.5)

## 5. Typography 层次

### 5.1 标题层次

```tsx
<h1 className="h1">主标题</h1>        {/* 36px, bold, tight */}
<h2 className="h2">二级标题</h2>      {/* 30px, bold, tight */}
<h3 className="h3">三级标题</h3>      {/* 24px, semibold, snug */}
<h4 className="h4">四级标题</h4>      {/* 20px, semibold, snug */}
<h5 className="h5">五级标题</h5>      {/* 18px, medium, normal */}
<h6 className="h6">六级标题</h6>      {/* 16px, medium, normal */}
```

### 5.2 正文层次

```tsx
<p className="body">正文内容</p>              {/* 16px, normal, relaxed */}
<p className="body-large">大正文</p>         {/* 18px, normal, relaxed */}
<p className="body-small">小正文</p>         {/* 14px, normal, relaxed */}
```

### 5.3 辅助信息

```tsx
<span className="caption">辅助信息</span>     {/* 12px, normal, normal */}
<span className="text-muted">次要文字</span>  {/* 14px, muted color */}
<span className="text-subtle">微妙文字</span> {/* 14px, subtle color */}
```

### 5.4 强调文字

```tsx
<span className="text-emphasis">强调内容</span> {/* semibold, primary color */}
```

## 6. 使用示例

### 6.1 卡片标题

```tsx
<CardTitle className="h3">
  卡片标题
</CardTitle>
```

### 6.2 卡片描述

```tsx
<CardDescription>
  这是卡片描述文字
</CardDescription>
```

### 6.3 正文内容

```tsx
<p className="body">
  这是正文内容，使用 16px 字体，行高 1.625，提供最佳可读性。
</p>
```

### 6.4 元数据

```tsx
<div className="flex items-center gap-2">
  <span className="text-muted">作者</span>
  <span className="caption text-muted-foreground">2025-01-27</span>
</div>
```

## 7. 最佳实践

### 7.1 标题使用

- **H1**: 页面主标题，每页只有一个
- **H2**: 主要章节标题
- **H3**: 卡片标题、小节标题
- **H4-H6**: 更细分的层次

### 7.2 正文优化

- 使用 `body` 类（16px, line-height 1.625）
- 长段落使用 `body-large`（18px）提升可读性
- 短文本使用 `body-small`（14px）

### 7.3 辅助信息

- 时间、作者等元数据使用 `text-muted`
- 提示文字使用 `caption`
- 确保对比度符合可访问性标准

### 7.4 中英文混排

- 字体栈已优化，自动选择最佳字体
- 中文字体优先使用系统字体
- 英文字体使用 Inter/Geist

## 8. 组件更新

### 8.1 Card 组件

- `CardTitle`: 使用 `h3` 类
- `CardDescription`: 使用 `body-small` 类

### 8.2 页面标题

- 主页面标题：使用 `h1` 类
- 副标题：使用 `body-small text-muted-foreground`

### 8.3 导航和侧边栏

- 导航项：使用 `body-small`
- 用户信息：使用 `body-small` 和 `caption`

## 9. 可访问性

### 9.1 对比度

- 主文字 (#0a0a0a) vs 背景 (#fafafa): 16.5:1 ✅
- 次要文字 (#525252) vs 背景: 7.1:1 ✅
- 辅助文字 (#737373) vs 背景: 4.8:1 ✅

### 9.2 字体大小

- 最小字体：12px（caption）
- 正文：16px（符合 WCAG 标准）
- 标题：18px+（清晰易读）

### 9.3 行高

- 正文行高 1.625-1.7，提供舒适阅读体验
- 标题行高 1.25，保持紧凑

## 10. 迁移检查清单

- [x] 添加 Inter 字体
- [x] 创建字体大小系统
- [x] 创建字重系统
- [x] 创建行高系统
- [x] 创建 Typography 类（h1-h6, body, caption）
- [x] 更新 Card 组件
- [x] 更新页面标题
- [x] 更新导航和侧边栏
- [x] 优化中文字体支持

## 11. 后续优化

1. **响应式字体大小**：根据屏幕尺寸调整
2. **字体加载优化**：使用 font-display: swap
3. **可变字体**：考虑使用可变字体提升性能
4. **暗色模式**：适配暗色主题的字体颜色

---

**更新日期**: 2025-01-27  
**版本**: 2.1.0

