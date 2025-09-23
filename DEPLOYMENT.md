# Cloudflare Pages 部署配置

## 问题描述

当使用 Cloudflare Pages 连接 GitHub 仓库时，每次 push 都会触发自动部署，但此时 GitHub Actions CI 流程可能还在运行中。这会导致：

1. 部署可能基于未经测试验证的代码
2. CI 测试失败时，错误的代码已经被部署
3. 资源浪费（同时运行 CI 和部署）

## 解决方案

### 方案一：GitHub Actions 控制部署（推荐）

我们在 `.github/workflows/ci.yml` 中添加了 `deploy` 任务：

- **依赖关系**：只有在 `lint`、`test`、`e2e` 三个任务都成功后才执行
- **分支限制**：只在 `main` 和 `develop` 分支执行部署
- **并发控制**：确保同一分支只有一个工作流运行

### 方案二：Cloudflare Pages 配置

在 Cloudflare Pages 设置中：

1. **构建配置**：
   - 构建命令：`pnpm install && pnpm run build`
   - 构建输出目录：`dist`
   - Root directory：`/`

2. **部署分支**：
   - 生产分支：`main`
   - 预览分支：`develop`

3. **环境变量**：
   ```
   NODE_VERSION=18
   NPM_FLAGS=--version
   ```

### 方案三：使用 GitHub Status Checks（高级）

在 Cloudflare Pages 中启用 "Wait for CI" 选项，这样 Cloudflare 会等待 GitHub Actions 完成后再开始部署。

## 推荐配置

### Cloudflare Pages 设置

```yaml
# 在 Cloudflare Pages 项目设置中
Build command: pnpm install && pnpm run build
Build output directory: dist
Root directory: /
Node.js version: 18
```

### 部署流程

1. 开发者 push 代码到 GitHub
2. GitHub Actions 自动运行 CI 流程：
   - ESLint 代码检查
   - Jest 单元测试
   - Cypress E2E 测试
3. 所有测试通过后，执行 `deploy` 任务
4. Cloudflare Pages 检测到成功的部署信号后开始构建
5. 部署完成

## 文件说明

- `_headers`：Cloudflare Pages 安全头配置
- `.github/workflows/ci.yml`：完整的 CI/CD 流程
- `package.json`：包含 `build` 脚本

## 注意事项

1. 确保 Cloudflare Pages 项目连接的是正确的 GitHub 仓库和分支
2. 在 Cloudflare Pages 设置中禁用自动部署，改为手动触发或基于 webhook
3. 监控部署日志，确保构建过程正常
4. 考虑设置部署通知，及时了解部署状态
