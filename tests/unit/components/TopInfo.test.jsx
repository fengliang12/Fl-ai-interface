import { render, screen } from '@testing-library/react';
import TopInfo from '../../../src/components/TopInfo';

// Mock the useWalletContext hook
const mockUseWalletContext = jest.fn();
jest.mock('../../../src/contexts/WalletContext', () => ({
  __esModule: true,
  useWalletContext: () => mockUseWalletContext(),
}));

// Mock useENS hook
jest.mock('../../../src/hooks/useENS', () => ({
  useENS: () => ({ ensName: null, ensAvatar: null, isLoading: false }),
  formatDisplayName: (address) => (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''),
}));

// Mock NETWORKS from hooks
jest.mock('../../../src/hooks', () => ({
  NETWORKS: {
    mainnet: {
      chainId: '0x1',
      chainName: 'Ethereum Mainnet',
      nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    },
    sepolia: {
      chainId: '0xaa36a7',
      chainName: 'Sepolia Test Network',
      nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    },
  },
}));

// Mock ethers
jest.mock('ethers', () => ({
  ethers: {
    formatEther: jest.fn((value) => '1.0'),
    parseEther: jest.fn((value) => value),
    BrowserProvider: jest.fn(),
    Contract: jest.fn(),
  },
}));

// Mock Material-UI components that might cause issues
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Menu: ({ children, open, ...props }) => (open ? <div {...props}>{children}</div> : null),
  MenuItem: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

const mockWalletContext = {
  isConnected: true,
  address: '0x1234567890123456789012345678901234567890',
  balance: '1000000000000000000',
  chainId: '0x1',
  networkName: 'Ethereum Mainnet',
  connectWallet: jest.fn(),
  disconnectWallet: jest.fn(),
  switchNetwork: jest.fn(),
  isConnecting: false,
  error: null,
  networks: {
    mainnet: { chainId: '0x1', chainName: 'Ethereum Mainnet' },
    sepolia: { chainId: '0xaa36a7', chainName: 'Sepolia Test Network' },
  },
  provider: { getNetwork: jest.fn() },
};

const disconnectedWalletContext = {
  isConnected: false,
  address: null,
  balance: null,
  chainId: null,
  networkName: null,
  connectWallet: jest.fn(),
  disconnectWallet: jest.fn(),
  switchNetwork: jest.fn(),
  isConnecting: false,
  error: null,
  networks: {
    mainnet: { chainId: '0x1', chainName: 'Ethereum Mainnet' },
    sepolia: { chainId: '0xaa36a7', chainName: 'Sepolia Test Network' },
  },
  provider: null,
};

describe('TopInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseWalletContext.mockReturnValue(mockWalletContext);
  });

  // 连接钱包时渲染不会崩溃
  it('renders without crashing when wallet is connected', () => {
    render(<TopInfo />);
    expect(screen.getByText('0x1234...7890')).toBeInTheDocument();
  });

  // 钱包未连接时显示连接钱包按钮
  it('renders connect wallet button when wallet is not connected', () => {
    mockUseWalletContext.mockReturnValue(disconnectedWalletContext);
    render(<TopInfo />);
    expect(screen.getByText('连接钱包')).toBeInTheDocument();
  });

  // 连接钱包时显示正确的网络名称
  it('displays the correct network name', () => {
    render(<TopInfo />);
    expect(screen.getByText('Ethereum Mainnet')).toBeInTheDocument();
  });
});
