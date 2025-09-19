# Components 测试文档

本目录包含所有 React 组件的单元测试。

## 测试文件说明

### AddRedPacket.test.js
- **测试组件**: `src/components/AddRedPacket.tsx`
- **测试内容**: 添加红包组件的功能测试
- **主要测试点**:
  - 组件渲染
  - 表单输入验证
  - 红包创建流程
  - 错误处理

### Dashboard.test.js
- **测试组件**: `src/components/Dashboard.tsx`
- **测试内容**: 仪表板主界面组件测试
- **主要测试点**:
  - 组件渲染
  - 导航标签切换
  - 钱包连接状态处理
  - 键盘导航
  - 布局结构

### SendRedPacket.test.js
- **测试组件**: `src/components/SendRedPacket.tsx`
- **测试内容**: 发送红包组件功能测试
- **主要测试点**:
  - 组件渲染
  - 合约信息显示
  - 红包领取功能
  - 余额提取功能
  - 交易状态处理

### TopInfo.test.js
- **测试组件**: `src/components/TopInfo.tsx`
- **测试内容**: 顶部信息组件测试
- **主要测试点**:
  - 组件渲染
  - 钱包信息显示
  - 连接状态切换
  - 用户交互

## 运行测试

```bash
# 运行所有组件测试
npm run test:unit -- tests/unit/components

# 运行特定组件测试
npm run test:unit -- tests/unit/components/Dashboard.test.js
```

## 测试覆盖率

组件测试应该覆盖：
- 组件正常渲染
- 用户交互行为
- 状态变化处理
- 错误边界情况
- 可访问性要求