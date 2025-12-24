# 组件重新设计文档

## 概述

本次更新对主要组件进行了全面的重新设计，提升了视觉层次、交互体验和内容展示效果。

## 1. Sidebar（左侧导航）重新设计

### 1.1 背景优化
- **背景色**：使用 `#f8f9fa`（浅灰背景）
- **Logo 区域**：白色卡片背景 + 微妙阴影
- **分隔**：使用边框分隔不同区域

### 1.2 导航项优化
- **Active 状态**：白色背景卡片 + 阴影效果
- **Hover 状态**：更明显的背景变化和阴影
- **视觉反馈**：使用 `transition-all` 平滑过渡

### 1.3 用户区域优化
- **头像**：更大尺寸（10x10），更精致
- **用户信息**：使用卡片背景，增加阴影
- **登出按钮**：更明显的交互反馈

## 2. Dashboard Feed 重新设计

### 2.1 布局优化
- **卡片间距**：从 `mb-4` 增加到 `mb-6`，增加呼吸感
- **内容层次**：更清晰的信息层次
- **元数据展示**：更精致的作者、时间、类型标签

### 2.2 FeedCard 优化
- **标题**：使用 `h3` 类，更大更醒目
- **类型标签**：添加内容类型标签（文章/影片/音檔）
- **正文**：使用 `body` 类，行高 1.625，提升可读性
- **交互按钮**：统一高度，更好的视觉对齐
- **分隔线**：添加顶部边框分隔内容区域

### 2.3 搜索和筛选功能
- **FeedFilters 组件**：新增搜索和筛选功能
  - 搜索栏：带图标和清除按钮
  - 筛选标签：全部/文章/影片/音檔
  - 实时筛选：支持搜索和类型筛选

### 2.4 AnnouncementCard 优化
- **阴影**：使用 `card-shadow-elevated` 突出重要性
- **标题**：使用 `h4` 类
- **内容**：使用 `body` 类，更好的可读性

## 3. Events 页面优化

### 3.1 布局改进
- **从网格改为列表**：更大的卡片，更好的信息展示
- **卡片间距**：`mb-6`，增加呼吸感

### 3.2 EventCard 优化
- **封面图片**：高度从 48 增加到 56（h-56）
- **标题**：使用 `h3` 类
- **描述**：使用 `body` 类，更好的可读性
- **元数据**：使用图标 + 文字，更清晰
- **RSVP 按钮**：更大尺寸（`size="lg"`），更突出的 CTA

### 3.3 筛选功能
- **Tabs 组件**：全部/即将到来/已结束
- **灵活布局**：根据内容自动调整

## 4. Resources 页面优化

### 4.1 ResourceCard 优化
- **标题**：使用 `h4` 类
- **描述**：使用 `body-small` 类
- **标签系统**：更清晰的分类标签展示
- **开启按钮**：使用主要按钮样式，更突出

### 4.2 分类系统
- **Tabs 筛选**：全部/音檔/文章/影片
- **标签展示**：资源标签更清晰

## 5. Profile 页面优化

### 5.1 布局结构化
- **卡片分组**：使用多个卡片展示不同信息
- **信息层次**：更清晰的信息组织

### 5.2 基本資訊卡片
- **头像**：更大尺寸（20x20）
- **信息展示**：使用网格布局（2列）
- **分隔线**：使用 Separator 组件

### 5.3 帳戶設定卡片
- **预留空间**：为未来功能预留
- **一致性**：与其他卡片保持一致的样式

## 6. 设计改进总结

### 6.1 视觉层次
- ✅ 更明确的标题层次（h1-h6）
- ✅ 更好的正文可读性（行高 1.625）
- ✅ 更精致的元数据展示

### 6.2 交互体验
- ✅ 更明显的 Hover 状态
- ✅ 更突出的 Active 状态
- ✅ 更精致的按钮设计

### 6.3 内容展示
- ✅ 更大的卡片，更好的内容展示
- ✅ 更清晰的信息层次
- ✅ 更精致的元数据展示

### 6.4 功能增强
- ✅ Feed 搜索和筛选
- ✅ Events 筛选功能
- ✅ Resources 分类系统

## 7. 更新的组件列表

### 7.1 布局组件
- `components/layout/Sidebar.tsx` - 完全重新设计
- `components/layout/MainContent.tsx` - 背景色优化
- `components/layout/RightSidebar.tsx` - 背景色优化

### 7.2 Dashboard 组件
- `components/dashboard/FeedCard.tsx` - 重新设计
- `components/dashboard/AnnouncementCard.tsx` - 优化
- `components/dashboard/FeedFilters.tsx` - 新增组件
- `components/dashboard/ContentFeed.tsx` - 保持不变

### 7.3 Events 组件
- `components/events/EventCard.tsx` - 完全重新设计
- `components/events/EventList.tsx` - 布局优化
- `components/events/RSVPButton.tsx` - 按钮优化

### 7.4 Resources 组件
- `components/resources/ResourceCard.tsx` - 重新设计
- `components/resources/ResourceGrid.tsx` - 保持不变

### 7.5 页面组件
- `app/page.tsx` - 添加搜索和筛选
- `app/(dashboard)/events/page.tsx` - Typography 优化
- `app/(dashboard)/resources/page.tsx` - Typography 优化
- `app/(dashboard)/profile/page.tsx` - 完全重新设计

## 8. 使用指南

### 8.1 搜索功能
```tsx
<FeedFilters
  onSearch={setSearchQuery}
  onFilter={setActiveFilter}
  activeFilter={activeFilter}
/>
```

### 8.2 卡片使用
所有卡片现在使用统一的样式：
- 默认阴影：`card-shadow`
- 提升阴影：`card-shadow-elevated`
- 统一圆角：`rounded-lg`
- 统一间距：`mb-6`

### 8.3 Typography
- 标题：使用 `h1`-`h6` 类
- 正文：使用 `body`、`body-small` 类
- 辅助信息：使用 `caption`、`text-muted` 类

## 9. 后续优化建议

1. **图片支持**：为 FeedCard 添加缩略图支持
2. **响应式优化**：确保移动端体验良好
3. **动画效果**：添加微妙的过渡动画
4. **加载状态**：添加骨架屏或加载状态
5. **空状态**：优化空状态的展示

---

**更新日期**: 2025-01-27  
**版本**: 3.0.0

