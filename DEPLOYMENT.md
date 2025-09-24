# Cloudflare Pages 部署指南

## 概述

本项目使用 GitHub Actions CI/CD 流程与 Cloudflare Pages 集成，确保只有通过完整测试验证的代码才会被部署到生产环境。

## 部署流程

### 1. CI/CD 工作流程

#### 触发条件

- **develop 分支推送**: 运行完整的 CI 测试（lint、单元测试、E2E测试）
- **master 分支推送**: 运行 CI 测试 + 自动部署到 Cloudflare Pages
- **Pull Request 到 master**: 运行 CI 测试验证代码质量

#### 部署时机控制

- ✅ **正确流程**: develop → PR to master → CI 通过 → 合并到 master → 自动部署
- ❌ **避免问题**: Cloudflare Pages 不会在 PR 创建时自动部署，只在 master 分支推送且 CI 通过后部署

### 2. Cloudflare Pages 配置

#### 必需配置步骤

1. **禁用 Cloudflare Pages 自动部署**
   - 登录 Cloudflare Dashboard
   - 进入 Pages 项目设置
   - 在 "Builds & deployments" 中禁用 "Automatic deployments"
   - 这样可以防止 Cloudflare 在代码推送时立即部署，而是等待 GitHub Actions 完成测试

2. **GitHub Secrets 配置**
   需要在 GitHub 仓库设置中添加以下 Secrets：

   ```
   CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
   CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
   ```

3. **获取 Cloudflare API Token**
   - 访问 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - 创建自定义 Token，权限包括：
     - Zone:Zone:Read
     - Zone:Page Rules:Edit
     - Account:Cloudflare Pages:Edit

### 3. 项目配置文件

#### wrangler.jsonc

```json
{
  "name": "fl-ai-interface",
  "compatibility_date": "2025-09-23",
  "build": {
    "command": "pnpm run build"
  },
  "assets": {
    "directory": "./dist"
  }
}
```

#### package.json 构建脚本

```json
{
  "scripts": {
    "build": "webpack --mode production"
  }
}
```

### 4. 部署命令

GitHub Actions 使用以下命令进行部署：

```bash
wrangler pages deploy dist --project-name=fl-ai-interface
```

## 推荐的开发工作流

### 功能开发流程

1. 在 `develop` 分支开发新功能
2. 推送到 `develop` 分支触发 CI 测试
3. 创建 PR 从 `develop` 到 `master`
4. PR 会触发 CI 测试验证
5. 测试通过后合并 PR 到 `master`
6. `master` 分支推送触发 CI 测试 + 自动部署

### 紧急修复流程

1. 直接在 `master` 分支创建 hotfix
2. 推送触发 CI 测试 + 自动部署
3. 将修复同步回 `develop` 分支

## 环境变量

### 构建时环境变量

- `NODE_ENV=production`: 生产环境构建优化
- `CI=true`: CI 环境标识

### 运行时环境变量

可以在 Cloudflare Pages 项目设置中配置：

- 生产环境变量
- 预览环境变量

## 监控和日志

### GitHub Actions 日志

- 查看 CI/CD 流程执行状态
- 构建和测试结果
- 部署状态和错误信息

### Cloudflare Pages 日志

- 部署历史记录
- 构建日志和错误信息
- 性能监控数据

## 故障排除

### 常见问题

1. **部署失败：dist 目录不存在**
   - 确保 `wrangler.jsonc` 中配置了正确的构建命令
   - 检查 webpack 配置输出路径

2. **API Token 权限不足**
   - 验证 Cloudflare API Token 权限
   - 确保 Account ID 正确

3. **CI 测试失败导致部署跳过**
   - 检查 lint、单元测试、E2E 测试结果
   - 修复测试问题后重新推送

### 调试命令

本地测试部署：

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm run build

# 本地预览
npx wrangler pages dev dist

# 手动部署（需要配置 wrangler auth）
npx wrangler pages deploy dist --project-name=fl-ai-interface
```

## 性能优化

### 构建优化

- Webpack 代码分割和压缩
- CSS 提取和压缩
- 图片和字体资源优化

### 部署优化

- 启用 Cloudflare CDN 缓存
- 配置适当的缓存策略
- 使用 HTTP/2 和 Brotli 压缩

## 安全考虑

- API Token 存储在 GitHub Secrets 中
- 生产环境变量与开发环境隔离
- 定期轮换 API Token
- 监控部署日志中的敏感信息泄露
