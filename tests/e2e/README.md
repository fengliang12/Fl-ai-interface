# Web3 钱包测试指南

本项目使用自定义的轻量级 MetaMask 模拟来进行 Web3 应用的端到端测试，无需安装额外的插件，完全兼容 Windows 系统。

## 🚀 快速开始

### 基本用法

```javascript
describe('钱包连接测试', () => {
  beforeEach(() => {
    // 设置 MetaMask 模拟
    cy.setupMetaMask({
      address: '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
      chainId: '0x1', // 主网
      balance: '0x1bc16d674ec80000' // 2 ETH
    });
    
    cy.visit('/');
    cy.wait(2000);
  });
  
  it('应该能够连接钱包', () => {
    cy.connectWallet().then((accounts) => {
      expect(accounts[0]).to.match(/^0x[a-fA-F0-9]{40}$/);
    });
  });
});
```

## 📋 可用命令

### `cy.setupMetaMask(options)`

设置 MetaMask 模拟环境。

**参数：**
- `address` (string): 钱包地址，默认为 `0x742d35Cc6634C0532925a3b8D4C9db96590c6C87`
- `chainId` (string): 链 ID，默认为 `0x1` (主网)
- `networkId` (string): 网络 ID，默认为 `1`
- `balance` (string): 账户余额（十六进制），默认为 `0x1bc16d674ec80000` (2 ETH)

**示例：**
```javascript
cy.setupMetaMask({
  address: '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
  chainId: '0xaa36a7', // Sepolia 测试网
  networkId: '11155111',
  balance: '0x2386f26fc10000' // 0.01 ETH
});
```

### `cy.changeMetaMaskNetwork(network)`

切换网络。

**支持的网络：**
- `mainnet`: 以太坊主网
- `goerli`: Goerli 测试网
- `sepolia`: Sepolia 测试网
- `localhost`: 本地开发网络

**示例：**
```javascript
cy.changeMetaMaskNetwork('sepolia');
```

### `cy.connectWallet()`

模拟用户授权连接钱包。

**示例：**
```javascript
cy.connectWallet().then((accounts) => {
  console.log('连接的账户:', accounts[0]);
});
```

## 🔧 支持的 Web3 方法

模拟的 MetaMask provider 支持以下 Web3 方法：

### 账户相关
- `eth_requestAccounts`: 请求账户访问权限
- `eth_accounts`: 获取已连接的账户
- `eth_getBalance`: 获取账户余额

### 网络相关
- `eth_chainId`: 获取当前链 ID
- `net_version`: 获取网络版本
- `wallet_switchEthereumChain`: 切换网络
- `wallet_addEthereumChain`: 添加新网络

### 交易相关
- `eth_sendTransaction`: 发送交易
- `eth_estimateGas`: 估算 Gas 费用
- `eth_gasPrice`: 获取 Gas 价格

### 签名相关
- `personal_sign`: 个人签名
- `eth_signTypedData_v4`: 类型化数据签名

## 📝 测试示例

### 1. 基本钱包连接测试

```javascript
it('应该能够检测到钱包', () => {
  cy.window().then((win) => {
    expect(win.ethereum).to.exist;
    expect(win.ethereum.isMetaMask).to.be.true;
  });
});
```

### 2. 账户余额测试

```javascript
it('应该能够获取账户余额', () => {
  cy.window().then(async (win) => {
    const balance = await win.ethereum.request({
      method: 'eth_getBalance',
      params: [win.ethereum.selectedAddress, 'latest']
    });
    expect(balance).to.match(/^0x[a-fA-F0-9]+$/);
  });
});
```

### 3. 交易签名测试

```javascript
it('应该能够签名消息', () => {
  cy.window().then(async (win) => {
    const message = 'Hello, Web3!';
    const signature = await win.ethereum.request({
      method: 'personal_sign',
      params: [message, win.ethereum.selectedAddress]
    });
    expect(signature).to.match(/^0x[a-fA-F0-9]{130}$/);
  });
});
```

### 4. 网络切换测试

```javascript
it('应该能够切换网络', () => {
  cy.changeMetaMaskNetwork('sepolia');
  
  cy.window().then((win) => {
    expect(win.ethereum.chainId).to.equal('0xaa36a7');
  });
});
```

### 5. 事件监听测试

```javascript
it('应该能够监听账户变化事件', () => {
  cy.window().then((win) => {
    let eventTriggered = false;
    
    win.ethereum.on('accountsChanged', (accounts) => {
      eventTriggered = true;
      expect(accounts).to.be.an('array');
    });
    
    // 触发账户变化事件
    win.ethereum.emit('accountsChanged', [win.ethereum.selectedAddress]);
    
    expect(eventTriggered).to.be.true;
  });
});
```

## 🎯 最佳实践

1. **在 `beforeEach` 中设置钱包**：确保每个测试都有干净的钱包状态
2. **使用合适的等待时间**：给钱包初始化留出足够时间
3. **验证返回值格式**：确保地址、交易哈希等符合预期格式
4. **测试错误情况**：验证不支持的方法会正确抛出错误
5. **清理事件监听器**：避免测试间的事件监听器干扰

## 🔍 调试技巧

1. **查看控制台日志**：模拟器会输出详细的操作日志
2. **使用 `cy.window().then()`**：直接访问 `window.ethereum` 对象
3. **检查网络状态**：确认 `chainId` 和 `networkVersion` 设置正确
4. **验证事件触发**：使用 `emit` 方法手动触发事件进行测试

## 🚨 注意事项

- 这是一个模拟环境，不会进行真实的区块链交易
- 所有的交易哈希和签名都是随机生成的
- 余额和 Gas 费用是预设的固定值
- 事件系统是简化版本，可能与真实 MetaMask 有细微差别

## 📁 文件结构

```
tests/e2e/
├── support/
│   ├── commands.js          # 自定义命令定义
│   └── e2e.js              # 全局配置
├── wallet-connection.cy.js  # 钱包连接测试
├── wallet-web3.cy.js       # Web3 功能测试
├── metamask-demo.cy.js     # 功能演示测试
└── README.md               # 本文档
```

## 🤝 兼容性

- ✅ Windows 10/11
- ✅ Cypress 12+
- ✅ 现代浏览器 (Chrome, Firefox, Edge)
- ✅ Web3.js 1.x/4.x
- ✅ Ethers.js 5.x/6.x

---

**提示**：如果遇到问题，请检查浏览器控制台的日志输出，模拟器会提供详细的操作信息。