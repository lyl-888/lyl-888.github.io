---
title: VuePress 插件开发笔记
date: 2024/01/04
tags:
  - VuePress
  - 插件
  - 开发
categories:
  - 技术文档
---

# VuePress 插件开发笔记

## 插件基础结构

### 1. 插件文件结构
```
my-plugin/
├── package.json
├── index.js
└── README.md
```

### 2. 基础插件代码
```javascript
// index.js
module.exports = (options = {}) => {
  return {
    name: 'my-plugin',
    define: {
      // 定义全局常量
    },
    clientAppEnhanceFiles: [
      // 客户端增强文件
    ],
    extendMarkdown: (md) => {
      // 扩展 Markdown
    },
    chainWebpack: (config) => {
      // 修改 Webpack 配置
    }
  }
}
```

## 常用插件功能

### 1. 添加全局组件
```javascript
module.exports = (options = {}) => {
  return {
    name: 'my-plugin',
    clientAppEnhanceFiles: [
      path.resolve(__dirname, 'enhanceApp.js')
    ]
  }
}
```

```javascript
// enhanceApp.js
import MyComponent from './MyComponent.vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('MyComponent', MyComponent)
}
```

### 2. 扩展 Markdown
```javascript
module.exports = (options = {}) => {
  return {
    name: 'my-plugin',
    extendMarkdown: (md) => {
      // 添加自定义 Markdown 规则
      md.use(require('markdown-it-plugin'))
    }
  }
}
```

### 3. 修改 Webpack 配置
```javascript
module.exports = (options = {}) => {
  return {
    name: 'my-plugin',
    chainWebpack: (config) => {
      config.module
        .rule('custom')
        .test(/\.custom$/)
        .use('custom-loader')
        .loader('custom-loader')
    }
  }
}
```

## 插件开发最佳实践

### 1. 配置选项
```javascript
module.exports = (options = {}) => {
  const {
    // 设置默认值
    enable = true,
    theme = 'default',
    // ... 其他选项
  } = options

  if (!enable) {
    return {}
  }

  return {
    // 插件逻辑
  }
}
```

### 2. 错误处理
```javascript
module.exports = (options = {}) => {
  try {
    // 插件逻辑
    return {
      // 插件配置
    }
  } catch (error) {
    console.error('Plugin error:', error)
    return {}
  }
}
```

### 3. 文档和示例
- 提供详细的 README 文档
- 包含使用示例
- 说明配置选项
- 提供常见问题解答

## 发布插件

### 1. package.json 配置
```json
{
  "name": "vuepress-plugin-my-plugin",
  "version": "1.0.0",
  "description": "My VuePress plugin",
  "main": "index.js",
  "keywords": ["vuepress", "plugin"],
  "author": "lyl",
  "license": "MIT"
}
```

### 2. 发布到 npm
```bash
npm login
npm publish
```

## 常用插件推荐

1. **@vuepress/plugin-back-to-top**：返回顶部
2. **@vuepress/plugin-medium-zoom**：图片缩放
3. **@vuepress/plugin-nprogress**：进度条
4. **@vuepress/plugin-pwa**：PWA 支持
5. **@vuepress/plugin-search**：搜索功能

---

*最后更新：2024年1月4日*