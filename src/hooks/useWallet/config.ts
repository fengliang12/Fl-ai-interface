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
