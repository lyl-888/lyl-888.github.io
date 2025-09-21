---
title: 个人笔记网站搭建指南
date: 2024/01/05
tags:
  - 网站搭建
  - VuePress
  - 个人博客
categories:
  - 技术文档
cover: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop
---

# 个人笔记网站搭建指南

## 为什么选择 VuePress

VuePress 是一个基于 Vue.js 的静态网站生成器，特别适合技术文档和个人博客。

### 优势
- 🚀 **简单易用**：基于 Markdown 编写内容
- ⚡ **性能优秀**：静态生成，加载速度快
- 🎨 **主题丰富**：多种主题可选
- 🔧 **高度可定制**：支持插件和自定义配置
- 📱 **响应式设计**：移动端友好

## 快速开始

### 1. 环境准备
```bash
# 安装 Node.js (版本 >= 14)
node --version

# 安装 VuePress
npm install -g vuepress
```

### 2. 创建项目
```bash
# 创建项目目录
mkdir my-notes
cd my-notes

# 初始化项目
npm init -y

# 安装 VuePress
npm install vuepress vuepress-theme-reco
```

### 3. 项目结构
```
my-notes/
├── .vuepress/
│   └── config.js
├── docs/
│   └── README.md
├── blogs/
│   └── 笔记内容
└── package.json
```

### 4. 基础配置
```javascript
// .vuepress/config.js
module.exports = {
  title: '我的笔记',
  description: '个人学习笔记',
  theme: 'reco',
  themeConfig: {
    // 主题配置
  }
}
```

## 内容编写

### Markdown 基础
```markdown
# 标题

## 子标题

**粗体** *斜体*

- 列表项 1
- 列表项 2

[链接](https://example.com)

```代码块```

> 引用内容
```

### Front Matter
```markdown
---
title: 文章标题
date: 2024/01/01
tags:
  - 标签1
  - 标签2
categories:
  - 分类
---

文章内容...
```

## 主题配置

### 导航栏
```javascript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '分类', link: '/categories/' },
    { text: '标签', link: '/tags/' }
  ]
}
```

### 侧边栏
```javascript
themeConfig: {
  sidebar: {
    '/docs/': [
      {
        title: '学习笔记',
        children: ['chapter1', 'chapter2']
      }
    ]
  }
}
```

## 部署上线

### GitHub Pages
1. 创建 GitHub 仓库
2. 配置 GitHub Actions
3. 推送代码自动部署

### Netlify
1. 连接 GitHub 仓库
2. 配置构建命令
3. 自动部署

### Vercel
1. 导入项目
2. 配置构建设置
3. 一键部署

## 进阶功能

### 搜索功能
```javascript
// 安装搜索插件
npm install @vuepress/plugin-search

// 配置
plugins: [
  ['@vuepress/search', {
    searchMaxSuggestions: 10
  }]
]
```

### 评论系统
```javascript
// 配置 Valine 评论
themeConfig: {
  valineConfig: {
    appId: 'your-app-id',
    appKey: 'your-app-key'
  }
}
```

### 统计功能
```javascript
// 配置百度统计
themeConfig: {
  baiduAnalytics: 'your-baidu-id'
}
```

## 维护建议

1. **定期更新**：保持依赖包最新
2. **备份内容**：使用 Git 版本控制
3. **SEO 优化**：合理设置标题和描述
4. **性能优化**：压缩图片，使用 CDN
5. **内容质量**：保持内容更新和准确性

## 常见问题

### Q: 如何添加数学公式？
A: 安装 `@vuepress/plugin-mathjax` 插件

### Q: 如何自定义样式？
A: 在 `.vuepress/styles/` 目录下添加 CSS 文件

### Q: 如何添加自定义组件？
A: 在 `.vuepress/components/` 目录下添加 Vue 组件

---

*最后更新：2024年1月5日*