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
      await window.ethereum.request({
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
