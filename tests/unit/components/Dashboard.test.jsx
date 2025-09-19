import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import Dashboard from '../../../src/components/Dashboard';

// Mock Material-UI 组件
jest.mock('@mui/material', () => ({
  Paper: ({ children, className, onClick, title }) => (
    <div className={className} onClick={onClick} title={title} data-testid="paper">
      {children}
    </div>
  ),
  Typography: ({ children, variant, className, title }) => (
    <div className={className} data-variant={variant} title={title}>
      {children}
    </div>
  ),
}));

// Mock jotai
jest.mock('jotai', () => ({
  atom: jest.fn(),
  useAtom: jest.fn(),
  Provider: ({ children }) => <div data-testid="jotai-provider">{children}</div>,
}));

// Mock AddRedPacket 模块
jest.mock('../../../src/components/AddRedPacket', () => ({
  redPacketContractAtom: {},
}));

const mockRedPacketState = {
  count: '5',
  isEqual: true,
  balance: '1.5',
  address: '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99',
};

const renderWithProviders = (component) => {
  return render(<Provider>{component}</Provider>);
};

// Mock useAtom hook
const mockUseAtom = require('jotai').useAtom;

describe('Dashboard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // 设置默认的 useAtom mock 返回值
    mockUseAtom.mockReturnValue([mockRedPacketState]);
  });

  // 测试组件基本渲染
  test('renders Dashboard component', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText('平台统计')).toBeInTheDocument();
    expect(screen.getAllByTestId('paper')).toHaveLength(4);
  });

  // 测试显示红包总数
  test('displays red packet count', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('总红包数')).toBeInTheDocument();
  });

  // 测试显示等额发放状态
  test('displays equal amount status', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText('是')).toBeInTheDocument();
    expect(screen.getByText('是否等额发放')).toBeInTheDocument();
  });

  // 测试显示总金额
  test('displays total balance', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText('1.500000')).toBeInTheDocument();
    expect(screen.getByText('总金额 (ETH)')).toBeInTheDocument();
  });

  // 测试显示合约地址
  test('displays contract address', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText('0x8e...3c99')).toBeInTheDocument();
    expect(screen.getByText('红包合约地址（点击查看）')).toBeInTheDocument();
  });

  // 测试非等额发放状态
  test('displays non-equal amount status', () => {
    const nonEqualState = {
      ...mockRedPacketState,
      isEqual: false,
    };
    mockUseAtom.mockReturnValue([nonEqualState]);

    renderWithProviders(<Dashboard />);

    expect(screen.getByText('否')).toBeInTheDocument();
    expect(screen.getByText('是否等额发放')).toBeInTheDocument();
  });

  // 测试空状态处理
  test('handles empty state', () => {
    const emptyState = {
      count: '',
      isEqual: true,
      balance: '',
      address: '',
    };
    mockUseAtom.mockReturnValue([emptyState]);

    renderWithProviders(<Dashboard />);

    expect(screen.getByText('平台统计')).toBeInTheDocument();
    expect(screen.getAllByTestId('paper')).toHaveLength(4);
  });

  // 测试大数值格式化
  test('formats large balance correctly', () => {
    const largeBalanceState = {
      ...mockRedPacketState,
      balance: '123.456789123456',
    };
    mockUseAtom.mockReturnValue([largeBalanceState]);

    renderWithProviders(<Dashboard />);

    expect(screen.getByText('123.456789')).toBeInTheDocument();
  });

  // 测试零余额处理
  test('handles zero balance', () => {
    const zeroBalanceState = {
      ...mockRedPacketState,
      balance: '0',
    };
    mockUseAtom.mockReturnValue([zeroBalanceState]);

    renderWithProviders(<Dashboard />);

    expect(screen.getByText('0.000000')).toBeInTheDocument();
  });

  // 测试组件结构
  test('has correct component structure', () => {
    renderWithProviders(<Dashboard />);

    const dashboardDiv = screen.getByText('平台统计').closest('.Dashboard');
    expect(dashboardDiv).toBeInTheDocument();

    const papers = screen.getAllByTestId('paper');
    expect(papers).toHaveLength(4);
  });

  // 测试合约地址格式化
  test('formats contract address correctly', () => {
    const customAddressState = {
      ...mockRedPacketState,
      address: '0x1234567890abcdef1234567890abcdef12345678',
    };
    mockUseAtom.mockReturnValue([customAddressState]);

    renderWithProviders(<Dashboard />);

    expect(screen.getByText('0x12...5678')).toBeInTheDocument();
  });
});
