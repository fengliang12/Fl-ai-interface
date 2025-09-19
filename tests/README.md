# 测试文档

本目录包含项目的所有测试文件，按照功能和类型进行组织。

## 目录结构

```
tests/
├── unit/                    # 单元测试
│   ├── components/          # React 组件测试
│   │   ├── AddRedPacket.test.js
│   │   ├── Dashboard.test.js
│   │   ├── SendRedPacket.test.js
│   │   ├── TopInfo.test.js
│   │   └── README.md
│   ├── hooks/              # React Hooks 测试
│   │   ├── useENS.test.js
│   │   ├── useWallet.test.js
│   │   └── README.md
│   ├── utils/              # 工具函数测试
│   │   ├── getName.test.js
│   │   ├── index.test.js
│   │   ├── sum.test.js
│   │   └── README.md
│   └── README.md           # 单元测试总览
└── e2e/                    # 端到端测试
    ├── red-packet.test.js
    ├── wallet-connection.test.js
    └── README.md           # E2E 测试文档
```

## 测试类型说明

### 单元测试 (Unit Tests)
- **位置**: `tests/unit/`
- **目的**: 测试单个函数、组件或模块的功能
- **工具**: Jest + React Testing Library
- **运行**: `npm run test:unit`

### 端到端测试 (E2E Tests)
- **位置**: `tests/e2e/`
- **目的**: 测试完整的用户流程和系统集成
- **工具**: Cypress
- **运行**: `npm run test:e2e`

## 快速开始

### 运行所有测试
```bash
# 运行单元测试
npm run test:unit

# 运行 E2E 测试
npm run test:e2e
```

### 运行特定类型的测试
```bash
# 只运行组件测试
npm run test:unit -- tests/unit/components

# 只运行 Hooks 测试
npm run test:unit -- tests/unit/hooks

# 只运行工具函数测试
npm run test:unit -- tests/unit/utils
```

### 运行特定测试文件
```bash
# 运行特定组件测试
npm run test:unit -- tests/unit/components/Dashboard.test.js

# 运行特定 Hook 测试
npm run test:unit -- tests/unit/hooks/useWallet.test.js
```

## 测试覆盖率

查看测试覆盖率报告：
```bash
npm run test:unit -- --coverage
```

覆盖率报告将生成在 `coverage/` 目录中。

## 测试编写指南

### 组件测试
- 测试组件渲染
- 测试用户交互
- 测试状态变化
- 测试 Props 传递
- 测试错误边界

### Hooks 测试
- 测试 Hook 初始状态
- 测试状态更新逻辑
- 测试副作用处理
- 测试依赖变化
- 测试清理函数

### 工具函数测试
- 测试正常输入
- 测试边界值
- 测试异常输入
- 测试返回值格式
- 测试性能（如需要）

## 测试配置

- **Jest 配置**: `jest.config.js`
- **测试设置**: `src/setupTests.js`
- **Cypress 配置**: `cypress.config.js`（如果存在）

## 持续集成

测试会在以下情况自动运行：
- 提交代码时（通过 Git hooks）
- 创建 Pull Request 时
- 合并到主分支时

## 故障排除

### 常见问题
1. **测试文件找不到**: 检查文件路径和 Jest 配置
2. **模块导入错误**: 检查模块路径映射配置
3. **异步测试超时**: 增加测试超时时间或使用正确的异步测试方法

### 获取帮助
- 查看各子目录的 README.md 文件
- 参考现有测试文件的写法
- 查阅 Jest 和 React Testing Library 官方文档