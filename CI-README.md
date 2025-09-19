# CI/CD 流程说明

本项目配置了完整的 CI/CD 流程，包含代码质量检查、单元测试、E2E 测试和构建验证。

## 🚀 CI 流程概览

### 触发条件

- 推送到 `main` 或 `develop` 分支
- 创建针对 `main` 或 `develop` 分支的 Pull Request

### 流程步骤

#### 1. 代码质量检查 (lint)

- ✅ TypeScript 类型检查
- ✅ 依赖安装验证

#### 2. 单元测试 (unit-tests)

- ✅ Jest 单元测试执行
- ✅ 测试覆盖率报告生成
- ✅ 覆盖率上传到 Codecov

#### 3. E2E 测试 (e2e-tests)

- ✅ 应用构建和启动
- ✅ Cypress E2E 测试执行
- ✅ 测试截图和视频记录

#### 4. 构建验证 (build)

- ✅ 生产环境构建
- ✅ 构建产物上传

## 📋 本地测试命令

### 单元测试（Jest）

```bash
# 运行单元测试
pnpm run test:unit

# 运行单元测试（CI模式，带覆盖率）
pnpm run test:unit:ci

# 交互式测试界面
pnpm run test:ui
```

### E2E 测试（Cypress）

```bash
# 打开 Cypress 测试界面
pnpm run test:e2e

# 运行 E2E 测试（无头模式）
pnpm run test:e2e:ci
```

### 🔄 测试分离说明

- **单元测试**：只运行 `tests/unit/` 目录下的测试文件
- **E2E测试**：只运行 `tests/e2e/` 目录下的测试文件
- **完全独立**：运行单元测试时不会触发E2E测试，反之亦然

### 代码质量

```bash
# 代码检查
pnpm run lint

# 代码检查并自动修复
pnpm run lint:fix

# 代码格式化
pnpm run format
```

## 🔧 配置文件说明

### GitHub Actions 工作流

- `.github/workflows/ci.yml` - 主要的 CI 流程配置

### 测试配置

- `jest.config.js` - Jest 单元测试配置
- `cypress.config.js` - Cypress E2E 测试配置

### 代码质量配置

- `tsconfig.json` - TypeScript 配置

## 📊 测试覆盖率

### 覆盖率要求

- 分支覆盖率: ≥ 70%
- 函数覆盖率: ≥ 70%
- 行覆盖率: ≥ 70%
- 语句覆盖率: ≥ 70%

### 覆盖率报告

- HTML 报告: `coverage/lcov-report/index.html`
- Jest Stare 报告: `jest-stare/index.html`

## 🛠️ 开发工作流

### Pre-commit 钩子

项目配置了 Husky pre-commit 钩子，在提交前自动运行：

- 代码格式化
- 代码质量检查
- 单元测试

### 提交规范

使用 Conventional Commits 规范：

```bash
# 使用 commitizen 进行规范化提交
pnpm run commit
```

## 🚨 故障排除

### 常见问题

1. **E2E 测试失败**
   - 检查应用是否正确启动在 `http://localhost:8080`
   - 查看 Cypress 截图和视频了解失败原因

2. **单元测试覆盖率不足**
   - 查看覆盖率报告，识别未测试的代码
   - 添加相应的测试用例

3. **代码质量检查失败**
   - 运行 `pnpm run lint:fix` 自动修复
   - 手动修复剩余的代码质量问题

### 调试技巧

1. **本地运行 CI 命令**

   ```bash
   # 模拟 CI 环境运行测试
   CI=true pnpm run test:unit:ci
   CI=true pnpm run test:e2e:ci
   ```

2. **查看详细日志**
   ```bash
   # 详细模式运行测试
   pnpm run test:unit -- --verbose
   ```

## 📈 持续改进

### 性能优化

- 使用 pnpm 缓存加速依赖安装
- 并行运行独立的测试任务
- 智能的测试文件变更检测

### 扩展功能

- 集成更多代码质量工具
- 添加性能测试
- 集成安全扫描
- 自动化部署流程

---

💡 **提示**: 确保在推送代码前本地运行所有测试，这样可以避免 CI 流程中的失败。
