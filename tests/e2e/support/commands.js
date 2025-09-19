// ***********************************************************
// 自定义 Cypress 命令
// 用于模拟钱包连接和Web3交互（Web3专用版本）
// ***********************************************************

// 导入 Cypress 命令类型定义（如果使用 TypeScript）
// /// <reference types="cypress" />

/**
 * 轻量级MetaMask模拟 - 专为Web3应用设计
 * 提供完整的钱包功能模拟，包括连接、签名、交易等
 */
Cypress.Commands.add('setupMetaMask', (options = {}) => {
  const config = {
    address: options.address || '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
    chainId: options.chainId || '0x1',
    networkId: options.networkId || '1',
    balance: options.balance || '0x1bc16d674ec80000', // 2 ETH
    ...options,
  };

  cy.on('window:before:load', (win) => {
    // 创建完整的MetaMask provider
    const metamaskProvider = {
      isMetaMask: true,
      _metamask: {
        isUnlocked: () => Promise.resolve(true),
      },
      selectedAddress: config.address,
      chainId: config.chainId,
      networkVersion: config.networkId,

      // 主要的request方法
      request: async ({ method, params = [] }) => {
        console.log(`🦊 MetaMask ${method}:`, params);

        switch (method) {
          case 'eth_requestAccounts':
          case 'eth_accounts':
            return [config.address];

          case 'eth_chainId':
            return config.chainId;

          case 'net_version':
            return config.networkId;

          case 'eth_getBalance':
            return config.balance;

          case 'eth_estimateGas':
            return '0x5208'; // 21000 gas

          case 'eth_gasPrice':
            return '0x4a817c800'; // 20 gwei

          case 'eth_sendTransaction':
            const txHash = '0x' + Math.random().toString(16).substr(2, 64).padStart(64, '0');
            console.log('🚀 Transaction sent:', txHash);
            return txHash;

          case 'personal_sign':
            const signature = '0x' + Math.random().toString(16).substr(2, 130).padStart(130, '0');
            console.log('✍️ Message signed:', signature);
            return signature;

          case 'eth_signTypedData_v4':
            const typedSignature = '0x' + Math.random().toString(16).substr(2, 130).padStart(130, '0');
            console.log('📝 Typed data signed:', typedSignature);
            return typedSignature;

          case 'wallet_switchEthereumChain':
            config.chainId = params[0].chainId;
            console.log('🔄 Network switched to:', config.chainId);
            return null;

          case 'wallet_addEthereumChain':
            console.log('➕ Network added:', params[0]);
            return null;

          default:
            throw new Error(`Unsupported method: ${method}`);
        }
      },

      // 兼容sendAsync
      sendAsync: (payload, callback) => {
        metamaskProvider
          .request(payload)
          .then((result) => callback(null, { result }))
          .catch((error) => callback(error));
      },

      // 事件系统
      _events: {},
      on: (event, handler) => {
        if (!metamaskProvider._events[event]) {
          metamaskProvider._events[event] = [];
        }
        metamaskProvider._events[event].push(handler);
        console.log(`📡 Event listener added: ${event}`);
      },

      emit: (event, data) => {
        if (metamaskProvider._events[event]) {
          metamaskProvider._events[event].forEach((handler) => handler(data));
        }
      },

      removeListener: (event, handler) => {
        if (metamaskProvider._events[event]) {
          const index = metamaskProvider._events[event].indexOf(handler);
          if (index > -1) {
            metamaskProvider._events[event].splice(index, 1);
          }
        }
      },

      removeAllListeners: (event) => {
        if (event) {
          metamaskProvider._events[event] = [];
        } else {
          metamaskProvider._events = {};
        }
      },
    };

    // 设置全局ethereum对象
    win.ethereum = metamaskProvider;

    // 兼容web3.js
    win.web3 = {
      currentProvider: metamaskProvider,
      eth: {
        defaultAccount: config.address,
      },
    };

    // 模拟初始化事件
    setTimeout(() => {
      metamaskProvider.emit('connect', { chainId: config.chainId });
      metamaskProvider.emit('accountsChanged', [config.address]);
      console.log('🎉 MetaMask initialized successfully');
    }, 100);
  });
});

// 切换网络
Cypress.Commands.add('changeMetaMaskNetwork', (network) => {
  const networks = {
    mainnet: { chainId: '0x1', networkId: '1' },
    goerli: { chainId: '0x5', networkId: '5' },
    sepolia: { chainId: '0xaa36a7', networkId: '11155111' },
    localhost: { chainId: '0x539', networkId: '1337' },
  };

  const networkConfig = networks[network] || networks.mainnet;

  cy.window().then((win) => {
    if (win.ethereum) {
      win.ethereum.chainId = networkConfig.chainId;
      win.ethereum.networkVersion = networkConfig.networkId;
      win.ethereum.emit('chainChanged', networkConfig.chainId);
      console.log(`🌐 Network changed to: ${network}`);
    }
  });
});

// 连接钱包（模拟用户授权）
Cypress.Commands.add('connectWallet', () => {
  cy.window().then(async (win) => {
    if (win.ethereum) {
      const accounts = await win.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('🔗 Wallet connected:', accounts[0]);
      return accounts;
    }
  });
});

// 添加模拟钱包连接的辅助命令
Cypress.Commands.add('mockWalletConnection', () => {
  cy.log('模拟钱包连接状态');

  cy.window().then((win) => {
    if (win.ethereum) {
      // 触发连接事件
      if (win.ethereum._events && win.ethereum._events.connect) {
        win.ethereum._events.connect.forEach((callback) => {
          callback({ chainId: '0xaa36a7' });
        });
      }

      // 触发账户变更事件
      if (win.ethereum._events && win.ethereum._events.accountsChanged) {
        win.ethereum._events.accountsChanged.forEach((callback) => {
          callback([win.ethereum.selectedAddress]);
        });
      }
    }
  });
});

// 兼容旧版本的mockWeb3Wallet命令
Cypress.Commands.add('mockWeb3Wallet', (address = '0x742d35Cc6634C0532925a3b8D0C9e3e0C8b0e8e8') => {
  cy.setupMetaMask({ address });
});

// 添加连接钱包的辅助命令（重写以使用新的MetaMask模拟）
Cypress.Commands.add('connectWalletUI', () => {
  cy.log('开始连接钱包流程');

  // 首先模拟钱包连接
  cy.mockWalletConnection();

  // 检查是否已经连接（钱包信息按钮是否存在）
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="wallet-info-button"]').length > 0) {
      // 已经连接，直接验证
      cy.log('钱包已连接，跳过连接步骤');
      cy.get('[data-testid="wallet-info-button"]').should('be.visible').should('contain.text', '已连接');
    } else {
      // 需要点击连接按钮
      cy.log('点击连接钱包按钮');
      cy.get('[data-testid="connect-wallet-button"]').should('be.visible').should('not.be.disabled').click();

      // 等待连接完成
      cy.get('[data-testid="wallet-info-button"]', { timeout: 15000 })
        .should('be.visible')
        .should('contain.text', '已连接');
    }
  });

  // 额外等待确保状态完全更新
  cy.wait(1000);

  cy.log('钱包连接完成');
});

/**
 * 等待页面加载完成
 * 等待React应用完全渲染
 */
Cypress.Commands.add('waitForAppLoad', () => {
  cy.log('等待应用加载完成');

  // 等待主要组件渲染
  cy.get('[data-testid="app-container"]', { timeout: 10000 }).should('be.visible');

  // 等待加载状态消失
  cy.get('[data-testid="loading"]', { timeout: 5000 }).should('not.exist');
});

/**
 * 填写红包创建表单
 * @param {Object} redPacketData - 红包数据
 * @param {number} redPacketData.amount - 红包总金额
 * @param {number} redPacketData.count - 红包数量
 * @param {string} redPacketData.message - 红包祝福语
 */
Cypress.Commands.add('fillRedPacketForm', (redPacketData) => {
  cy.log(`填写红包表单: ${JSON.stringify(redPacketData)}`);

  const { amount, count, message } = redPacketData;

  // 填写红包总金额
  if (amount) {
    cy.get('[data-testid="deposit-amount-input"]').clear().type(amount.toString());
  }

  // 填写红包数量
  if (count) {
    cy.get('[data-testid="red-packet-count-input"]').clear().type(count.toString());
  }

  // 填写祝福语
  if (message) {
    cy.get('[data-testid="message-input"]').clear().type(message);
  }
});

/**
 * 提交红包创建表单
 */
Cypress.Commands.add('submitRedPacketForm', () => {
  cy.log('提交红包创建表单');

  // 点击创建按钮
  cy.get('[data-testid="create-red-packet-button"]').should('be.enabled').click();

  // 等待交易确认对话框出现
  cy.get('[data-testid="transaction-dialog"]', { timeout: 5000 }).should('be.visible');
});

/**
 * 确认交易
 * 模拟用户在钱包中确认交易
 */
Cypress.Commands.add('confirmTransaction', () => {
  cy.log('确认交易');

  // 在交易确认对话框中点击确认
  cy.get('[data-testid="confirm-transaction-button"]').click();

  // 等待交易处理完成
  cy.get('[data-testid="transaction-success"]', { timeout: 30000 }).should('be.visible');
});

/**
 * 检查红包卡片信息
 * @param {Object} expectedData - 期望的红包数据
 */
Cypress.Commands.add('verifyRedPacketCard', (expectedData) => {
  cy.log(`验证红包卡片: ${JSON.stringify(expectedData)}`);

  const { amount, count, message } = expectedData;

  // 检查红包卡片是否显示
  cy.get('[data-testid="red-packet-card"]').should('be.visible');

  // 验证红包金额
  if (amount) {
    cy.get('[data-testid="red-packet-amount"]').should('contain.text', amount.toString());
  }

  // 验证红包数量
  if (count) {
    cy.get('[data-testid="red-packet-count"]').should('contain.text', count.toString());
  }

  // 验证祝福语
  if (message) {
    cy.get('[data-testid="red-packet-message"]').should('contain.text', message);
  }
});

/**
 * 检查钱包连接状态
 * @param {boolean} shouldBeConnected - 是否应该已连接
 */
Cypress.Commands.add('verifyWalletStatus', (shouldBeConnected = true) => {
  cy.log(`验证钱包连接状态: ${shouldBeConnected ? '已连接' : '未连接'}`);

  if (shouldBeConnected) {
    // 检查钱包地址显示
    cy.get('[data-testid="wallet-address"]').should('be.visible').and('not.be.empty');

    // 检查断开连接按钮
    cy.get('[data-testid="disconnect-wallet-button"]').should('be.visible');
  } else {
    // 检查连接钱包按钮
    cy.get('[data-testid="connect-wallet-button"]').should('be.visible');
  }
});

/**
 * 等待并处理加载状态
 * @param {number} timeout - 超时时间（毫秒）
 */
Cypress.Commands.add('waitForLoading', (timeout = 10000) => {
  cy.log('等待加载完成');

  // 等待加载指示器消失
  cy.get('[data-testid="loading-spinner"]', { timeout }).should('not.exist');
});

/**
 * 检查错误消息
 * @param {string} expectedError - 期望的错误消息
 */
Cypress.Commands.add('verifyErrorMessage', (expectedError) => {
  cy.log(`验证错误消息: ${expectedError}`);

  cy.get('[data-testid="error-message"]').should('be.visible').and('contain.text', expectedError);
});

/**
 * 清理测试数据
 * 清理本地存储中的测试数据
 */
Cypress.Commands.add('cleanupTestData', () => {
  cy.log('清理测试数据');

  // 清理本地存储
  cy.clearLocalStorage();

  // 清理会话存储
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });

  // 重新加载页面
  cy.reload();
});

/**
 * 日志辅助命令
 */
Cypress.Commands.add('logMessage', (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  const logLevels = {
    info: 'ℹ️',
    warn: '⚠️',
    error: '❌',
    success: '✅',
  };

  cy.log(`${logLevels[level] || '📝'} [${timestamp}] ${message}`);
});

/**
 * 重置钱包连接状态
 */
Cypress.Commands.add('resetWalletConnection', () => {
  cy.window().then((win) => {
    if (win.ethereum && win.ethereum._resetConnection) {
      win.ethereum._resetConnection();
      // 触发accountsChanged事件通知应用连接状态变化
      win.ethereum.emit('accountsChanged', []);
      cy.log('🔄 钱包连接状态已重置');
    } else {
      cy.log('⚠️ 未找到钱包重置方法');
    }
  });
});

/**
 * 模拟红包合约交互
 */
Cypress.Commands.add('mockRedPacketContract', (options = {}) => {
  const { contractBalance = '10.0', redPacketCount = '5', isEqual = true, shouldFailDeposit = false } = options;

  cy.window().then((win) => {
    // 扩展ethers模拟以支持合约交互
    if (win.ethers && win.ethers.Contract) {
      // 保存原始的Contract构造函数
      const OriginalContract = win.ethers.Contract;

      // 创建模拟的合约类
      win.ethers.Contract = class MockContract extends OriginalContract {
        constructor(address, abi, signer) {
          super(address, abi, signer);
          console.log('🏗️ 创建模拟红包合约实例:', address);
        }

        async getBalance() {
          console.log('💰 调用合约 getBalance()');
          return win.ethers.parseEther(contractBalance);
        }

        async count() {
          console.log('🔢 调用合约 count()');
          return BigInt(redPacketCount);
        }

        async isEqual() {
          console.log('⚖️ 调用合约 isEqual()');
          return isEqual;
        }

        async deposit(count, isEqualAmount, options) {
          console.log('💸 调用合约 deposit():', {
            count,
            isEqualAmount,
            value: options?.value,
          });
          console.log('💰 合约当前余额:', shouldFailDeposit);
          if (shouldFailDeposit) {
            throw new Error('insufficient funds');
          }

          // 模拟交易对象
          const mockTx = {
            hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
            wait: async () => {
              console.log('⏳ 等待交易确认...');
              await new Promise((resolve) => setTimeout(resolve, 1000));
              console.log('✅ 交易已确认');
              return {
                status: 1,
                blockNumber: 12345,
                gasUsed: BigInt('21000'),
              };
            },
          };

          return mockTx;
        }
      };
    }

    cy.log('🎭 红包合约模拟已设置');
  });
});

let isConnected = false; // 默认已连接状态
// 钱包模拟设置函数
function setupWalletMocks(win) {
  console.log('=== 开始设置钱包模拟环境 ===');

  // 模拟 ethers 库
  win.ethers = {
    BrowserProvider: class MockBrowserProvider {
      constructor(ethereum) {
        console.log('🔧 创建 MockBrowserProvider 实例');
        this.ethereum = ethereum;
      }

      async getSigner() {
        console.log('🔐 调用 getSigner()');
        const signer = {
          async getAddress() {
            return '0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65';
          },
        };
        return signer;
      }

      async getBalance(address) {
        console.log('💰 调用 getBalance() for address:', address);
        const balance = BigInt('1000000000000000000'); // 1 ETH in wei
        return balance;
      }

      async getNetwork() {
        console.log('🌐 调用 getNetwork()');
        const network = {
          chainId: 1n,
          name: 'mainnet',
        };
        return network;
      }
    },

    // 模拟 formatEther 函数
    formatEther: (wei) => {
      console.log('🔄 调用 formatEther(), wei:', wei.toString());
      const ether = (Number(wei) / 1e18).toString();
      return ether;
    },
  };

  // 模拟 window.ethereum
  const eventHandlers = {};

  // 添加 parseEther 函数到 ethers 模拟
  win.ethers.parseEther = (ether) => {
    console.log('🔄 调用 parseEther(), ether:', ether);
    const wei = BigInt(Math.floor(Number.parseFloat(ether) * 1e18));
    return wei;
  };

  // 添加 Contract 基类
  win.ethers.Contract = class MockContractBase {
    constructor(address, abi, signer) {
      this.address = address;
      this.abi = abi;
      this.signer = signer;
    }
  };

  win.ethereum = {
    isMetaMask: true,
    selectedAddress: '0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65',

    request: async ({ method, params }) => {
      switch (method) {
        case 'eth_requestAccounts':
          console.log('🔗 处理 eth_requestAccounts - 模拟用户同意连接');
          isConnected = true;
          win.ethereum.selectedAddress = '0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65';
          const accounts = ['0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65'];
          return accounts;

        case 'eth_accounts':
          const currentAccounts = isConnected ? ['0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65'] : [];
          console.log('👤 处理 eth_accounts - 当前连接状态:', isConnected, '返回账户:', currentAccounts);
          return currentAccounts;

        case 'eth_chainId':
          return '0x1';

        case 'net_version':
          return '1';

        case 'eth_getBalance':
          return '0xde0b6b3a7640000'; // 1 ETH in hex

        case 'wallet_switchEthereumChain':
          return null;

        case 'wallet_addEthereumChain':
          return null;
        case 'eth_blockNumber':
          return '0x5f5e100'; // 15,000,000 in hex
        case 'eth_estimateGas':
          return '0x5208'; // 21,000 in hex
        case 'eth_sendTransaction':
          return {
            hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
          };
        case 'eth_getTransactionByHash':
          return {
            hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
            blockNumber: '0x5f5e100',
            gasPrice: '0x3b9aca00',
            gas: '0x5208',
            to: '0x1234567890abcdef1234567890abcdef12345678',
            value: '0x0',
            nonce: '0x0',
            chainId: '0x1',
          };
        default:
          console.log('❓ 未处理的方法:', method);
          return null;
      }
    },

    on: (event, handler) => {
      console.log('👂 注册事件监听器:', event);
      if (!eventHandlers[event]) {
        eventHandlers[event] = [];
      }
      eventHandlers[event].push(handler);
    },

    removeListener: (event, handler) => {
      console.log('🚫 移除事件监听器:', event);
      if (eventHandlers[event]) {
        const index = eventHandlers[event].indexOf(handler);
        if (index > -1) {
          eventHandlers[event].splice(index, 1);
        }
      }
    },

    // 添加触发事件的方法用于测试
    emit: (event, data) => {
      console.log('📡 触发事件:', event, data);
      if (eventHandlers[event]) {
        eventHandlers[event].forEach((handler) => {
          try {
            handler(data);
          } catch (err) {
            console.error('事件处理器错误:', err);
          }
        });
      }
    },

    // 提供重置连接状态的方法
    _resetConnection: () => {
      isConnected = false;
      win.ethereum.selectedAddress = null;
      console.log('🔄 重置钱包连接状态');
    },

    // 提供设置连接状态的方法
    _setConnected: (connected) => {
      isConnected = connected;
      win.ethereum.selectedAddress = connected ? '0xe2c7F510832C654E3Ef4e7664DA4098f2954ae65' : null;
      console.log('🔧 设置钱包连接状态:', connected);
    },
  };

  console.log('✅ 钱包模拟环境设置完成');
  console.log('🔍 初始连接状态:', isConnected);
}

/**
 * 访问页面并在加载前设置完整钱包模拟环境
 * 确保window.ethereum在useWallet钩子执行前就已存在
 */
Cypress.Commands.add('visitWithWalletMocks', (url = '/', options = {}) => {
  cy.visit('/', {
    onBeforeLoad(win) {
      // 在页面加载前直接设置钱包模拟环境
      setupWalletMocks(win);
    },
  });
});
