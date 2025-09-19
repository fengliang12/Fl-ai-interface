# Hooks 测试文档

本目录包含所有自定义 React Hooks 的单元测试。

## 测试文件说明

### useENS.test.js
- **测试 Hook**: `src/hooks/useENS.ts`
- **测试内容**: ENS 名称解析 Hook 功能测试
- **主要测试点**:
  - Hook 初始化状态
  - ENS 名称解析功能
  - 地址格式化功能
  - 错误处理机制
  - 依赖变化时的重新解析

### useWallet.test.js
- **测试 Hook**: `src/hooks/useWallet/index.ts`
- **测试内容**: 钱包连接 Hook 功能测试
- **主要测试点**:
  - Hook 初始化状态
  - 钱包连接功能
  - 钱包断开功能
  - 账户变化监听
  - 网络切换处理
  - 错误状态管理

## 运行测试

```bash
# 运行所有 Hooks 测试
npm run test:unit -- tests/unit/hooks

# 运行特定 Hook 测试
npm run test:unit -- tests/unit/hooks/useENS.test.js
```

## 测试覆盖率

Hooks 测试应该覆盖：
- Hook 的初始状态
- 状态更新逻辑
- 副作用处理
- 清理函数执行
- 依赖数组变化
- 错误边界情况

## 测试最佳实践

1. **使用 renderHook**: 使用 `@testing-library/react-hooks` 的 `renderHook` 来测试 Hooks
2. **模拟依赖**: 适当模拟外部依赖（如 Web3 提供者）
3. **异步测试**: 正确处理异步操作的测试
4. **清理资源**: 确保测试后正确清理副作用