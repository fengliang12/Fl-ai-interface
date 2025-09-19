# 单元测试总览

本目录包含项目的所有单元测试，按照源代码的目录结构进行组织。

## 目录结构

```
unit/
├── components/              # React 组件测试
│   ├── AddRedPacket.test.js    # 添加红包组件测试
│   ├── Dashboard.test.js       # 仪表板组件测试
│   ├── SendRedPacket.test.js   # 发送红包组件测试
│   ├── TopInfo.test.js         # 顶部信息组件测试
│   └── README.md              # 组件测试文档
├── hooks/                   # React Hooks 测试
│   ├── useENS.test.js         # ENS Hook 测试
│   ├── useWallet.test.js      # 钱包 Hook 测试
│   └── README.md              # Hooks 测试文档
├── utils/                   # 工具函数测试
│   ├── getName.test.js        # 获取名称函数测试
│   ├── index.test.js          # 地址格式化函数测试
│   ├── sum.test.js            # 数学计算函数测试
│   └── README.md              # 工具函数测试文档
└── README.md               # 本文件
```

## 测试统计

### 组件测试 (4 个文件)
- **AddRedPacket.test.js**: 添加红包功能测试
- **Dashboard.test.js**: 主界面导航和布局测试
- **SendRedPacket.test.js**: 红包发送和领取测试
- **TopInfo.test.js**: 钱包信息显示测试

### Hooks 测试 (2 个文件)
- **useENS.test.js**: ENS 名称解析功能测试
- **useWallet.test.js**: 钱包连接管理测试

### 工具函数测试 (3 个文件)
- **getName.test.js**: 连接器名称识别测试
- **index.test.js**: 地址格式化工具测试
- **sum.test.js**: 基础数学计算测试

## 运行测试

### 运行所有单元测试
```bash
npm run test:unit
```

### 按类别运行测试
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
# 运行特定测试文件
npm run test:unit -- tests/unit/components/Dashboard.test.js

# 监听模式运行测试
npm run test:unit -- --watch tests/unit/hooks/useWallet.test.js
```

## 测试覆盖率目标

当前项目的测试覆盖率目标：
- **分支覆盖率**: ≥ 70%
- **函数覆盖率**: ≥ 70%
- **行覆盖率**: ≥ 70%
- **语句覆盖率**: ≥ 70%

查看覆盖率报告：
```bash
npm run test:unit -- --coverage
```

## 测试技术栈

- **测试框架**: Jest
- **React 测试**: React Testing Library
- **DOM 匹配器**: @testing-library/jest-dom
- **模拟库**: Jest 内置 mock 功能
- **测试环境**: jsdom (模拟浏览器环境)

## 测试最佳实践

### 1. 测试命名
- 使用描述性的测试名称
- 遵循 "should do something when condition" 格式
- 使用中文描述测试场景

### 2. 测试结构
- 使用 AAA 模式：Arrange（准备）、Act（执行）、Assert（断言）
- 每个测试只验证一个功能点
- 使用 `describe` 和 `it` 组织测试

### 3. 模拟和存根
- 适当使用 mock 隔离测试单元
- 模拟外部依赖（API、第三方库等）
- 在 `beforeEach` 中重置 mock

### 4. 异步测试
- 使用 `async/await` 处理异步操作
- 使用 `waitFor` 等待异步状态更新
- 设置合理的超时时间

## 调试测试

### 调试失败的测试
```bash
# 运行特定测试并显示详细输出
npm run test:unit -- --verbose tests/unit/components/Dashboard.test.js

# 只运行失败的测试
npm run test:unit -- --onlyFailures
```

### 查看测试输出
```bash
# 显示控制台输出
npm run test:unit -- --verbose

# 生成详细的测试报告
npm run test:ui
```

## 添加新测试

当添加新的源代码文件时，请按照以下步骤添加对应的测试：

1. **确定测试类型**：组件、Hook 还是工具函数
2. **创建测试文件**：在对应的子目录中创建 `.test.js` 文件
3. **编写测试用例**：参考现有测试文件的结构
4. **运行测试**：确保新测试通过
5. **更新文档**：在相应的 README.md 中添加说明

## 维护指南

- 定期运行测试确保代码质量
- 重构代码时同步更新测试
- 保持测试覆盖率在目标范围内
- 及时修复失败的测试
- 定期审查和优化测试代码