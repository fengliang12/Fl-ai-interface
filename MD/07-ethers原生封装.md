## 6️⃣ Web3 集成系统

### 安装 Web3 依赖

```bash
# 核心 Web3 库
pnpm add ethers@6.13.4

# 状态管理
pnpm add jotai@2.10.3

# Web3 连接器（可选）
pnpm add @web3-react/core@8.2.3 @web3-react/metamask@8.2.4 @web3-react/walletconnect@8.2.2 @web3-react/types@8.2.3

# 开发和测试依赖
pnpm add -D @types/node@22.10.2

# 当前项目使用的版本及作用说明
# ethers@6.13.4 - 现代化的以太坊JavaScript库，用于与区块链交互
# jotai@2.10.3 - 轻量级状态管理库，用于管理Web3状态
# @web3-react/* - Web3连接器库，提供多种钱包连接支持
```

### 核心配置文件

#### 主要文件结构

```
src/
├── hooks/
│   └── useWallet/
│       ├── index.ts          # 钱包Hook主文件
│       ├── config.ts         # 网络配置
│       └── index.d.ts        # 类型定义
├── contexts/
│   └── WalletContext.tsx     # 钱包上下文
├── components/
│   ├── AddRedPacket.tsx      # 红包充值组件
│   └── SendRedPacket.tsx     # 红包发送组件
├── abis/
│   └── RedPacket.ts          # 智能合约ABI
└── utils/
    └── getName.ts            # 连接器名称工具
```

### 关键配置要点

#### 1. 网络配置 (`src/hooks/useWallet/config.ts`)

```typescript
// 支持的网络配置
export const NETWORKS = {
  mainnet: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://eth.llamarpc.com',
      'https://rpc.ankr.com/eth',
      'https://ethereum.publicnode.com',
    ],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  sepolia: {
    chainId: '0xaa36a7',
    chainName: 'Sepolia Test Network',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://sepolia.gateway.tenderly.co',
      'https://eth-sepolia.public.blastapi.io',
      'https://api.zan.top/eth-sepolia',
    ],
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
  },
};
```

#### 2. 类型定义 (`src/hooks/useWallet/index.d.ts`)

```typescript
export type WalletState = {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  chainId: string | null;
  networkName: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.Signer | null;
  account: string | null;
  networks: Record<string, NetworkConfig>;
};
```

#### 3. 钱包状态管理 (`src/hooks/useWallet/index.ts`)

```typescript
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { NETWORKS } from './config';
import type { WalletState } from './index.d';
export { NETWORKS } from './config';
export * from './index.d';

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
    networkName: null,
    provider: null,
    signer: null,
    account: null,
    networks: NETWORKS,
  });

  const [isConnecting, setIsConnecting] = useState(false);

  const [error, setError] = useState<string | null>('');

  /**
   * 获取网络名称
   */
  const getNetworkName = (chainId: string): string => {
    const networks = Object.entries(NETWORKS);
    const network = networks.find(([, config]) => config.chainId === chainId);
    return network ? network[1].chainName : 'Unknown Network';
  };

  /**
   * 获取钱包状态
   */
  const updateWalletState = useCallback(
    async (provider: ethers.BrowserProvider) => {
      try {
        // 使用重试机制获取签名者
        const signer = await provider.getSigner();
        // 钱包地址
        const address = await signer.getAddress();
        //查询账户余额
        const balance = await provider.getBalance(address);
        // 获取当前网络信息
        const network = await provider.getNetwork();
        // 主网id
        const chainId = `0x${network.chainId.toString(16)}`;

        setWalletState((pre) => ({
          ...pre,
          isConnected: true,
          address,
          balance: ethers.formatEther(balance),
          chainId,
          networkName: getNetworkName(chainId),
          provider,
          signer,
          account: address,
        }));
        setError('');
      } catch (err: any) {
        console.error('Error updating wallet state:', err);
        // 更详细的错误处理
        if (
          err?.code === 'NETWORK_ERROR' ||
          err?.message?.includes('network changed')
        ) {
          // 网络切换错误，这是正常现象，不需要显示错误
          console.log('Network change detected, will reconnect automatically');
          return;
        } else if (err?.code === -32603) {
          setError('网络连接问题，请稍后重试');
        } else if (err?.message?.includes('circuit breaker')) {
          setError('网络请求过于频繁，请稍后重试');
        } else if (err?.code === 4001) {
          setError('用户拒绝了连接请求');
        } else {
          setError('钱包连接失败，请检查网络连接');
        }
      }
    },
    []
  );

  /**
   * 选择网络
   */
  const switchNetwork = useCallback(
    async (networkKey: keyof typeof NETWORKS) => {
      if (!window.ethereum) {
        setError('请安装 MetaMask 或其他 Web3 钱包');
        return;
      }
      const network = NETWORKS[networkKey];
      setError(''); // 清除之前的错误

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: network.chainId }],
        });
      } catch (switchError: any) {
        // 如果网络不存在，尝试添加网络
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [network],
            });
          } catch (addError: any) {
            console.error('Error adding network:', addError);
            if (addError.code === 4001) {
              setError('用户拒绝了添加网络的请求');
            } else {
              setError('添加网络失败，请手动添加');
            }
          }
        } else if (switchError.code === 4001) {
          setError('用户拒绝了切换网络的请求');
        } else {
          console.error('Error switching network:', switchError);
          setError('网络切换失败，请重试');
        }
      }
    },
    []
  );

  /**
   * 连接钱包
   */
  const connectWallet = useCallback(async () => {
    setIsConnecting(true);
    setError('');
    if (!window.ethereum) {
      setError('请安装 MetaMask 或其他 Web3 钱包');
      setIsConnecting(false);
      return;
    }

    // 获取用户授权
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // 创建一个 ethers 提供程序
      const provider = new ethers.BrowserProvider(window.ethereum);

      // 更新钱包状态
      await updateWalletState(provider);
    } catch (err: any) {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error.
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        setError('用户拒绝了连接请求');
      } else {
        console.error(err);
        setError('钱包连接失败，请重试');
      }
    } finally {
      setIsConnecting(false);
    }
  }, []);

  /**
   * 监听网络变化
   * 监听账户变化
   */
  useEffect(() => {
    if (!walletState.provider) {
      return;
    }

    // 监听账户变换
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts.
        console.log('Please connect to MetaMask.');
        disconnectWallet();
      } else if (accounts[0] !== walletState.account) {
        setWalletState({
          ...walletState,
          account: accounts[0],
        });
        if (walletState.provider) {
          updateWalletState(walletState.provider);
        }
      }
    };
    window.ethereum.on('accountsChanged', handleAccountsChanged);

    // 监听网络变化
    const handleChainChanged = async () => {
      try {
        // 网络切换后需要重新创建 provider 和网络挂钩啊
        const newProvider = new ethers.BrowserProvider(window.ethereum);
        await updateWalletState(newProvider);
      } catch (err) {
        console.error('Error handling chain change:', err);
        // 网络切换错误时，重置连接状态
        setError('网络切换失败，请重新连接钱包');
      }
    };
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener('chainChanged', handleChainChanged);
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, [walletState.provider]);

  /**
   * 断开连接
   * 只是重置了状态，并没有物理的断开连接
   */
  const disconnectWallet = useCallback(() => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
      chainId: null,
      networkName: null,
      provider: null,
      signer: null,
      account: null,
      networks: NETWORKS,
    });
    setError('');
  }, []);

  /**
   * 检查钱包连接状态
   */
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.ethereum) return;

      try {
        // 检查是否已连接
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await updateWalletState(provider);
        }
      } catch (err) {
        console.error('Error checking connection:', err);
      }
    };

    checkConnection();
  }, []);

  return {
    ...walletState,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    switchNetwork,
  };
};
```

#### 4. 封装Context上下文(`src/hooks/useWalletContext.ts`)

```typescript
import { type ReactNode, createContext, useContext } from 'react';
import { type NETWORKS, type WalletState, useWallet } from '../hooks/useWallet';
import React from 'react';

interface WalletContextType extends WalletState {
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (networkKey: keyof typeof NETWORKS) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const walletState = useWallet();
  return (
    <WalletContext.Provider value={{ ...walletState }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

export const useWalletContext = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};

```

#### 5. 使用Context上下文(`src/index.tsx`)

```tsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import './tailwind.css';
import WalletProvider from './contexts/WalletContext';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
```

#### 6. 智能合约配置

```typescript
import RedPacketContract from '../abis/RedPacket';
// 合约地址配置
const RED_PACKET_ADDRESS = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99';
const RedPacketABI = RedPacketContract.abi;
// 合约状态管理（使用 Jotai）
export const redPacketContractAtom = atom({
  count: '',
  isEqual: true,
  balance: '',
  address: '',
});

// 合约交互示例
const getContractBalance = async () => {
  if (!signer) return;
  try {
    const contract = new ethers.Contract(
      RED_PACKET_ADDRESS,
      RedPacketABI,
      signer
    );
    const balance = await contract.getBalance();
    const count = await contract.count();
    const isEqual = await contract.isEqual();

    setRedPacketState({
      ...redPacketState,
      count: ethers.formatUnits(count, 0),
      address: RED_PACKET_ADDRESS,
      isEqual: isEqual,
      balance: ethers.formatEther(balance),
    });
  } catch (err) {
    console.error('获取合约余额失败:', err);
  }
};
```

#### 7. 智能合约 ABI 定义 (`src/abis/RedPacket.ts`)

```typescript
export default {
  _format: 'hh-sol-artifact-1',
  contractName: 'RedPacket',
  sourceName: 'contracts/RedPacket.sol',
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    // 事件定义
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'Already',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'depositor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'count',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'isEqual',
          type: 'bool',
        },
      ],
      name: 'DepositMade',
      type: 'event',
    },
    // 函数定义
    {
      inputs: [],
      name: 'sendRedPacket',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    // ... 更多函数定义
  ],
};
```

### Web3 业务逻辑实现

#### 1. 红包充值功能 (`AddRedPacket.tsx`)

```typescript
const handleDeposit = async () => {
  const count = Number.parseInt(redPacketCount);
  const amount = Number.parseFloat(depositAmount);

  if (count <= 0 || amount <= 0) {
    setError('红包数量和充值金额必须大于0');
    return;
  }

  setIsDepositing(true);
  setError(null);
  setSuccess(null);

  try {
    const contract = new ethers.Contract(
      RED_PACKET_ADDRESS,
      RedPacketABI,
      signer
    );

    // 调用充值合约方法
    const tx = await contract.deposit(count, isEqualAmount, {
      value: ethers.parseEther(depositAmount),
    });

    await tx.wait();
    setSuccess(`成功充值 ${depositAmount} ETH，创建 ${count} 个红包！`);

    // 重新获取合约余额
    await getContractBalance();

    // 清空表单
    setRedPacketCount('');
    setDepositAmount('');
  } catch (err: any) {
    console.error('充值失败:', err);
    setError('充值失败，请重试');
  } finally {
    setIsDepositing(false);
  }
};
```

#### 2. 红包发送功能 (`SendRedPacket.tsx`)

```typescript
const handleSendRedPacket = async () => {
  setIsDepositing(true);
  setError(null);
  setSuccess(null);

  try {
    const contract = new ethers.Contract(
      RED_PACKET_ADDRESS,
      RedPacketABI,
      signer
    );

    const _count = await contract.count();
    if (_count == zero) {
      setError('红包已抢完~');
      return;
    }

    // 设置事件监听
    const eventListener = setupAlreadyEventListener(contract);

    try {
      const tx = await contract.sendRedPacket();
      const transactionReceipt = await provider?.waitForTransaction(tx.hash);

      if (transactionReceipt?.status === 1) {
        // 检查交易日志中的Already事件
        const alreadyEventFound = checkAlreadyEventInLogs(
          contract,
          transactionReceipt
        );

        if (!alreadyEventFound) {
          setSuccess('恭喜您！成功抢到红包 🎉');
          await getContractBalance();
        }
      } else {
        setError('交易失败，请重试');
      }
    } catch (txError: any) {
      console.error('交易执行失败:', txError);
      setError('交易执行失败，请重试');
    }

    // 清理事件监听器
    eventListener();
  } catch (err: any) {
    console.error('发送红包失败:', err);
    setError('发送红包失败，请重试');
  } finally {
    setIsDepositing(false);
  }
};
```

### 相关文档

- [Ethers.js 官方文档](https://docs.ethers.org/)
- [Jotai 状态管理](https://jotai.org/)
- [MetaMask 开发者文档](https://docs.metamask.io/)
- [Cypress Web3 测试](https://docs.cypress.io/)
- [Web3-React 连接器](https://github.com/Uniswap/web3-react)

---

**注意事项：**

- 确保在生产环境中使用正确的合约地址
- 妥善管理私钥和敏感信息
- 定期更新依赖版本以获得安全补丁
- 充分测试所有Web3交互功能
