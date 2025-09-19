import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'jotai';
import AddRedPacket from '../../../src/components/AddRedPacket';

// Mock Material-UI components
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Paper: ({ children, ...props }) => (
    <div data-testid="paper" {...props}>
      {children}
    </div>
  ),
  Box: ({ children, ...props }) => (
    <div data-testid="box" {...props}>
      {children}
    </div>
  ),
  Typography: ({ children, variant, ...props }) => (
    <div data-testid={`typography-${variant}`} {...props}>
      {children}
    </div>
  ),
  TextField: ({ label, ...props }) => <input aria-label={label} {...props} />,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  Alert: ({ children, severity, ...props }) => (
    <div data-testid={`alert-${severity}`} {...props}>
      {children}
    </div>
  ),
  Divider: (props) => <hr data-testid="divider" {...props} />,
  FormControlLabel: ({ control, label, ...props }) => (
    <label {...props}>
      {control}
      {label}
    </label>
  ),
  Switch: (props) => <input type="checkbox" {...props} />,
  CircularProgress: (props) => <div data-testid="loading" {...props} />,
}));

// Mock Material-UI icons
jest.mock('@mui/icons-material', () => ({
  AccountBalanceWallet: (props) => <div data-testid="wallet-icon" {...props} />,
  Send: (props) => <div data-testid="send-icon" {...props} />,
}));

// Mock ethers
jest.mock('ethers', () => ({
  ethers: {
    Contract: jest.fn().mockImplementation(() => ({
      getBalance: jest.fn().mockResolvedValue('10000000000000000000'),
      count: jest.fn().mockResolvedValue(5),
      isEqual: jest.fn().mockResolvedValue(true),
      deposit: jest.fn().mockResolvedValue({
        hash: '0x123',
        wait: jest.fn().mockResolvedValue({}),
      }),
    })),
    formatUnits: jest.fn().mockReturnValue('5'),
    formatEther: jest.fn().mockReturnValue('10.0'),
    parseEther: jest.fn().mockReturnValue('10000000000000000000'),
  },
}));

// Mock wallet context
jest.mock('../../../src/contexts/WalletContext', () => ({
  useWalletContext: jest.fn(),
}));

// Mock jotai
jest.mock('jotai', () => ({
  ...jest.requireActual('jotai'),
  useAtom: jest.fn().mockReturnValue([
    {
      count: '5',
      isEqual: true,
      balance: '10.0',
      address: '0x742d35Cc6634C0532925a3b8D404d7C47d9d8c2E',
    },
    jest.fn(),
  ]),
}));

// Mock the RED_PACKET_ADDRESS constant
jest.mock('../../../src/components/AddRedPacket', () => {
  const actual = jest.requireActual('../../../src/components/AddRedPacket');
  return {
    __esModule: true,
    default: actual.default,
    RED_PACKET_ADDRESS: '0x742d35Cc6634C0532925a3b8D404d7C47d9d8c2E',
  };
});

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

const renderWithProviders = (component) => {
  return render(<Provider>{component}</Provider>);
};

describe('AddRedPacket Component', () => {
  beforeEach(() => {
    // 清除所有mock调用记录
    jest.clearAllMocks();
    // 设置默认的钱包上下文mock返回值
    require('../../../src/contexts/WalletContext').useWalletContext.mockReturnValue(mockWalletContext);
  });

  test('renders AddRedPacket component', () => {
    // 测试：渲染AddRedPacket组件
    renderWithProviders(<AddRedPacket />);

    // 验证组件标题和主要元素是否正确渲染
    expect(screen.getByText('红包充值')).toBeInTheDocument();
    expect(screen.getByLabelText('红包数量')).toBeInTheDocument();
    expect(screen.getByLabelText('充值金额 (ETH)')).toBeInTheDocument();
  });

  test('handles red packet count input', async () => {
    // 测试：处理红包数量输入
    renderWithProviders(<AddRedPacket />);

    const countInput = screen.getByLabelText('红包数量');
    fireEvent.change(countInput, { target: { value: '10' } });

    // 验证输入值是否正确设置
    expect(countInput).toHaveValue(10);
  });

  test('handles deposit amount input', async () => {
    // 测试：处理充值金额输入
    renderWithProviders(<AddRedPacket />);

    const amountInput = screen.getByLabelText('充值金额 (ETH)');
    fireEvent.change(amountInput, { target: { value: '5.0' } });

    // 验证输入值是否正确设置
    expect(amountInput).toHaveValue(5);
  });

  test('toggles equal amount distribution', () => {
    // 测试：切换等额分配开关
    renderWithProviders(<AddRedPacket />);

    const equalSwitch = screen.getByRole('checkbox');
    fireEvent.click(equalSwitch);

    // 验证开关状态是否正确切换
    expect(equalSwitch).not.toBeChecked();
  });

  test('shows error when wallet is not connected', () => {
    // 测试：钱包未连接时显示错误信息
    // Mock钱包上下文返回未连接状态
    require('../../../src/contexts/WalletContext').useWalletContext.mockReturnValue({
      ...mockWalletContext,
      isConnected: false,
      signer: null,
    });

    renderWithProviders(<AddRedPacket />);

    // 验证是否显示钱包未连接提示
    expect(screen.getByText('请先连接钱包')).toBeInTheDocument();
  });

  test('handles deposit transaction', async () => {
    // 测试：处理充值交易
    renderWithProviders(<AddRedPacket />);

    // 填写表单
    const countInput = screen.getByLabelText('红包数量');
    const amountInput = screen.getByLabelText('充值金额 (ETH)');
    const depositButton = screen.getByText('充值红包');

    fireEvent.change(countInput, { target: { value: '5' } });
    fireEvent.change(amountInput, { target: { value: '1.0' } });
    fireEvent.click(depositButton);

    // 验证是否显示充值中状态
    await waitFor(() => {
      expect(screen.getByText('充值中...')).toBeInTheDocument();
    });
  });

  test('validates input fields', async () => {
    // 测试：验证输入字段
    renderWithProviders(<AddRedPacket />);

    const depositButton = screen.getByText('充值红包');

    // 验证按钮在没有输入时是否被禁用
    expect(depositButton).toBeDisabled();
  });

  test('displays component structure correctly', () => {
    // 测试：正确显示组件结构
    renderWithProviders(<AddRedPacket />);

    // 验证主要UI元素是否存在
    expect(screen.getByTestId('paper')).toBeInTheDocument();
    expect(screen.getByTestId('wallet-icon')).toBeInTheDocument();
    expect(screen.getByText('等额发放')).toBeInTheDocument();
  });
});
