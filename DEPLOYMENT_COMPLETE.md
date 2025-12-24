# 🎉 部署完成！

## ✅ 部署检查清单

### 已完成
- [x] 代码已推送到 GitHub
- [x] Vercel 项目已配置
- [x] Framework Preset 设置为 Next.js
- [x] 环境变量已添加
- [x] 部署已启动

## 🔍 验证部署

### 1. 检查部署状态

在 Vercel Dashboard 中：
- 查看部署日志，确认构建成功
- 等待部署完成（通常 1-2 分钟）

### 2. 访问应用

部署完成后，你会得到一个 URL，例如：
```
https://meditation-xxx.vercel.app
```

### 3. 功能测试

访问你的应用 URL，测试完整流程：

**Phase 1: The Catharsis (宣洩區)**
- [ ] 输入文字
- [ ] 文字自动模糊效果
- [ ] 点击 FLUSH 按钮
- [ ] 粒子特效正常显示

**Phase 2: The Void (真空區)**
- [ ] 全黑背景显示
- [ ] 呼吸灯动画正常
- [ ] 完成 3 次呼吸循环
- [ ] 自动跳转到共生区

**Phase 3: The Connection (共生區)**
- [ ] 显示随机善意小语
- [ ] 可以输入并提交留言
- [ ] Line Group 链接显示

## 🐛 如果遇到问题

### 问题 1: 构建失败
- 检查 Vercel 构建日志
- 确认环境变量正确设置
- 确认 Supabase 数据库表已创建

### 问题 2: Phase 3 显示"載入中..."
- 检查 Supabase 数据库中是否有 `type='system'` 的消息
- 在 Supabase SQL Editor 执行：
  ```sql
  SELECT COUNT(*) FROM messages WHERE type = 'system';
  ```
- 如果返回 0，需要执行完整的表创建 SQL

### 问题 3: 无法提交留言
- 检查 Supabase RLS 策略是否正确
- 确认 `Allow public insert access` 策略存在

## 📝 后续操作

### 自定义域名（可选）

1. 在 Vercel 项目设置中，前往 **Domains**
2. 添加你的自定义域名
3. 按照指示配置 DNS 记录

### 更新 Line Group 链接

1. 在 Vercel 项目设置中，前往 **Environment Variables**
2. 编辑 `NEXT_PUBLIC_LINE_GROUP_URL`
3. 更新为你的实际 Line Group URL
4. 重新部署

### 添加更多善意小语

在 Supabase SQL Editor 执行：

```sql
INSERT INTO messages (content, type) VALUES
  ('你的新訊息', 'system');
```

## 🔄 自动部署

现在每次你推送代码到 GitHub 的 `main` 分支，Vercel 会自动重新部署：

```bash
git add .
git commit -m "更新说明"
git push
```

## 📊 监控和分析

- **Vercel Analytics**: 查看访问统计
- **Supabase Dashboard**: 查看数据库使用情况
- **Vercel Logs**: 查看运行时错误

## 🎨 自定义配置

### 修改颜色主题

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --cyberpunk-primary: #00ff41;
  --cyberpunk-secondary: #00d9ff;
  --cyberpunk-glow: #00ff88;
}
```

### 修改呼吸次数

编辑 `components/void/BreathingCircle.tsx`：

```typescript
const TOTAL_BREATHS = 3; // 改为你想要的次数
```

---

**恭喜！你的「大腦降噪」應用已經成功部署！** 🚀

如有任何问题，随时告诉我。

