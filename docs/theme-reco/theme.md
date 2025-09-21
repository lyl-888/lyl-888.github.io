---
title: VuePress 主题配置笔记
date: 2024/01/02
tags:
  - VuePress
  - 主题
  - 配置
categories:
  - 技术文档
---

# VuePress 主题配置笔记

## 主题选择

选择 `vuepress-theme-reco` 作为个人笔记网站的主题，原因如下：

### 优点
- 🎨 界面美观，适合个人博客
- 📱 响应式设计，移动端友好
- 🔍 内置搜索功能
- 📊 支持分类和标签
- 💬 支持评论系统
- 📈 支持统计功能

### 配置要点

#### 1. 基础配置
```javascript
theme: recoTheme({
  logo: "/logo.png",
  author: "lyl",
  authorAvatar: "/head.png",
  // ... 其他配置
})
```

#### 2. 导航栏配置
```javascript
navbar: [
  { text: "首页", link: "/" },
  { text: "分类", link: "/categories/技术/1.html" },
  { text: "标签", link: "/tags/学习/1.html" },
  // ...
]
```

#### 3. 侧边栏配置
```javascript
series: {
  "/docs/": [
    {
      text: "学习笔记",
      children: ["home", "theme"],
    },
    // ...
  ],
}
```

## 注意事项

1. **图片资源**：需要将 logo 和头像放在 `public` 目录下
2. **路径配置**：注意相对路径和绝对路径的使用
3. **SEO 优化**：合理设置 title 和 description
4. **性能优化**：合理使用懒加载和代码分割

## 后续计划

- [ ] 添加更多自定义样式
- [ ] 集成评论系统
- [ ] 添加搜索功能
- [ ] 优化移动端体验

---

*最后更新：2024年1月2日*