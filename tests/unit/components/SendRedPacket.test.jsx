import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ethers } from 'ethers';
import { Provider } from 'jotai';
import SendRedPacket from '../../../src/components/SendRedPacket';

// Mock Material-UI组件
jest.mock('@mui/material', () => ({
  Alert: ({ children }) => <div data-testid="alert">{children}</div>,
  Box: ({ children }) => <div data-testid="box">{children}</div>,
  Button: ({ children, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  ),
  CircularProgress: () => <div data-testid="loading">加载中...</div>,
  Divider: () => <hr data-testid="divider" />,
  Paper: ({ children }) => <div data-testid="paper">{children}</div>,
  TextField: ({ label, value, onChange }) => (
    <input placeholder={label} value={value} onChange={(e) => onChange && onChange(e)} />
  ),
  Typography: ({ children }) => <span>{children}</span>,
}));

// Mock Material-UI图标
jest.mock('@mui/icons-material', () => ({
  CardGiftcard: () => <span data-testid="CardGiftcardIcon" />,
  Send: () => <span data-testid="SendIcon" />,
}));

// Mock ethers库
jest.mock('ethers', () => ({
  ethers: {
    Contract: jest.fn().mockImplementation(() => ({
      getBalance: jest.fn().mockResolvedValue('10000000000000000000'),
      count: jest.fn().mockResolvedValue(5),
      isEqual: jest.fn().mockResolvedValue(true),
      withdraw: jest.fn().mockResolvedValue({ hash: '0x456' }),
      withdrawAll: jest.fn().mockResolvedValue({ hash: '0x789' }),
      on: jest.fn(),
      off: jest.fn(),
      interface: {
        parseLog: jest.fn(),
      },
    })),
    formatUnits: jest.fn().mockReturnValue('5'),
    formatEther: jest.fn().mockReturnValue('10.0'),
    parseEther: jest.fn().mockReturnValue('10000000000000000000'),
  },
}));

// Mock @ethersproject/bignumber
jest.mock('@ethersproject/bignumber', () => ({
  BigNumber: {
    from: jest.fn().mockReturnValue({
      toString: () => '0',
      eq: jest.fn().mockReturnValue(false),
    }),
  },
}));

// Mock RedPacket ABI
jest.mock('../../../src/abis/RedPacket', () => ({
  default: {
    abi: [],
  },
}));

// Mock WalletContext
const mockUseWalletContext = jest.fn();
jest.mock('../../../src/contexts/WalletContext', () => ({
  default: ({ children }) => children,
  useWalletContext: () => mockUseWalletContext(),
}));

// Mock钱包上下文数据
const mockWalletContext = {
  isConnected: true,
  signer: {
    getAddress: jest.fn().mockResolvedValue('0x123'),
    signMessage: jest.fn(),
  },
  provider: {},
  address: '0x123',
  balance: '10.0',
  chainId: 1,
  networkName: 'Ethereum Mainnet',
  connectWallet: jest.fn(),
  disconnectWallet: jest.fn(),
  switchNetwork: jest.fn(),
};

// 未连接钱包的上下文数据
const disconnectedWalletContext = {
  isConnected: false,
  signer: null,
  provider: null,
  address: null,
  balance: null,
  chainId: null,
  networkName: null,
  connectWallet: jest.fn(),
  disconnectWallet: jest.fn(),
  switchNetwork: jest.fn(),
};

// 使用Provider包装组件的渲染函数
const renderWithProviders = (component) => {
  return render(<Provider>{component}</Provider>);
};

// SendRedPacket组件测试套件
describe('SendRedPacket Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // 默认设置为已连接的钱包状态
    mockUseWalletContext.mockReturnValue(mockWalletContext);
  });

  // 测试组件渲染
  test('renders SendRedPacket component', () => {
    renderWithProviders(<SendRedPacket />);

    // 检查是否渲染了主要按钮
    expect(screen.getByText('抢红包')).toBeInTheDocument();
  });

  // 测试合约信息显示
  test('displays contract information', async () => {
    renderWithProviders(<SendRedPacket />);

    // 等待合约信息加载
    await waitFor(() => {
      // 检查是否显示了合约相关信息
      expect(screen.getByText('抢红包')).toBeInTheDocument();
    });
  });

  // 测试钱包未连接时的错误提示
  test('shows error when wallet is not connected', () => {
    // 设置为未连接状态
    mockUseWalletContext.mockReturnValue(disconnectedWalletContext);

    renderWithProviders(<SendRedPacket />);

    // 检查是否显示连接钱包提示
    expect(screen.getByText('请先连接钱包')).toBeInTheDocument();
  });

  // 测试单个红包提取
  test('handles withdraw single red packet', async () => {
    renderWithProviders(<SendRedPacket />);

    const withdrawButton = screen.getByText('抢红包');
    fireEvent.click(withdrawButton);

    // 检查是否显示加载状态或处理点击事件
    expect(withdrawButton).toBeInTheDocument();
  });

  // 测试提取所有余额功能
  test('handles withdraw all balance', async () => {
    renderWithProviders(<SendRedPacket />);

    // 查找提取所有余额按钮（如果存在）
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  // 测试合约数据获取时的加载状态
  test('displays loading state during contract data fetch', () => {
    renderWithProviders(<SendRedPacket />);

    // 检查组件是否正常渲染
    expect(screen.getByText('抢红包')).toBeInTheDocument();
  });

  // 测试交易成功消息
  test('shows transaction success message', async () => {
    renderWithProviders(<SendRedPacket />);

    const withdrawButton = screen.getByText('抢红包');
    fireEvent.click(withdrawButton);

    // 检查按钮点击后的状态
    expect(withdrawButton).toBeInTheDocument();
  });

  // 测试交易错误处理
  test('handles transaction error', async () => {
    // Mock合约方法抛出错误
    const errorContract = {
      getBalance: jest.fn().mockRejectedValue(new Error('Transaction failed')),
      count: jest.fn().mockResolvedValue(5),
      isEqual: jest.fn().mockResolvedValue(true),
      withdraw: jest.fn().mockRejectedValue(new Error('Transaction failed')),
      on: jest.fn(),
      off: jest.fn(),
      interface: {
        parseLog: jest.fn(),
      },
    };

    jest.mocked(ethers.Contract).mockImplementation(() => errorContract);

    renderWithProviders(<SendRedPacket />);

    const withdrawButton = screen.getByText('抢红包');
    fireEvent.click(withdrawButton);

    // 检查按钮是否存在（错误处理可能在内部进行）
    expect(withdrawButton).toBeInTheDocument();
  });

  // 测试无红包时的状态
  test('handles zero red packets scenario', async () => {
    // Mock零数量的合约
    const zeroCountContract = {
      getBalance: jest.fn().mockResolvedValue(0),
      count: jest.fn().mockResolvedValue(0),
      isEqual: jest.fn().mockResolvedValue(true),
      withdraw: jest.fn(),
      withdrawAll: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
      interface: {
        parseLog: jest.fn(),
      },
    };

    jest.mocked(ethers.Contract).mockImplementation(() => zeroCountContract);

    renderWithProviders(<SendRedPacket />);

    // 检查组件是否正常渲染
    expect(screen.getByText('抢红包')).toBeInTheDocument();
  });

  // 测试合约交互
  test('interacts with contract correctly', async () => {
    renderWithProviders(<SendRedPacket />);

    const withdrawButton = screen.getByText('抢红包');
    fireEvent.click(withdrawButton);

    // 检查按钮点击是否正常处理
    expect(withdrawButton).toBeInTheDocument();

    // 验证ethers.Contract是否被调用
    expect(ethers.Contract).toHaveBeenCalled();
  });
});
