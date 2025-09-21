# 部署说明

## GitHub Pages 自动部署

这个项目已经配置了GitHub Actions来自动部署到GitHub Pages。

### 部署步骤

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 进入你的GitHub仓库：https://github.com/lyl-888/lyl-888.github.io
   - 点击 "Settings" 标签
   - 在左侧菜单中找到 "Pages"
   - 在 "Source" 部分选择 "GitHub Actions"
   - 保存设置

3. **等待部署完成**
   - 推送代码后，GitHub Actions会自动开始构建和部署
   - 你可以在 "Actions" 标签页查看部署进度
   - 部署完成后，你的网站将在以下地址可用：
     `https://lyl-888.github.io/lyl-888.github.io/`

### 本地测试

在部署前，你可以本地测试构建：

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build
```

### 配置说明

- **base路径**：已设置为 `/lyl-888.github.io/` 以匹配你的GitHub Pages URL
- **自动部署**：每次推送到main分支都会自动触发部署
- **构建输出**：构建文件会输出到 `dist` 目录

### 故障排除

如果部署失败，请检查：

1. **GitHub Actions权限**
   - 确保仓库有正确的Pages权限
   - 检查Actions是否被启用

2. **构建错误**
   - 查看Actions日志中的错误信息
   - 确保所有依赖都正确安装

3. **路径问题**
   - 确保base路径配置正确
   - 检查所有链接是否使用相对路径

### 更新内容

要更新网站内容：

1. 修改本地文件
2. 提交并推送更改：
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. 等待自动部署完成

部署完成后，你的个人笔记网站就可以通过 `https://lyl-888.github.io/lyl-888.github.io/` 访问了！
