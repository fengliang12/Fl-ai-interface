// 导入React Testing Library的Hook测试工具
// renderHook: 用于测试自定义Hook的函数
// waitFor: 等待异步操作完成的工具函数
import { renderHook, waitFor } from '@testing-library/react';
import { useENS, formatDisplayName } from '../../../src/hooks/useENS';
import { ethers } from 'ethers';

// 创建模拟的ethers provider对象
// 这些模拟对象用于替代真实的区块链交互
const mockProvider = {
  // jest.fn(): 创建模拟函数，可以追踪调用和设置返回值
  lookupAddress: jest.fn(),
  getResolver: jest.fn(),
};

const mockResolver = {
  getAvatar: jest.fn(),
};

// jest.mock(): 模拟整个ethers模块
// mockImplementation(): 为模拟函数提供自定义实现
// mockReturnValue(): 设置模拟函数的返回值
jest.mock('ethers', () => ({
  ethers: {
    BrowserProvider: jest.fn().mockImplementation(() => mockProvider),
  },
  isAddress: jest.fn().mockReturnValue(true),
}));

describe('useENS Hook', () => {
  // beforeEach: Jest的生命周期钩子，在每个测试用例执行前运行
  // 用于重置模拟函数的状态，确保测试之间不会相互影响
  beforeEach(() => {
    // jest.clearAllMocks(): 清除所有模拟函数的调用历史和返回值
    jest.clearAllMocks();
    // mockReset(): 重置特定模拟函数的状态
    mockProvider.lookupAddress.mockReset();
    mockProvider.getResolver.mockReset();
    mockResolver.getAvatar.mockReset();
  });

  // 测试Hook的初始状态
  test('initializes with default state', () => {
    // renderHook(): React Testing Library提供的Hook测试函数
    // 返回一个包含result对象的结构，result.current包含Hook的返回值
    const { result } = renderHook(() => useENS(null, null));

    // 验证Hook的初始状态是否正确
    // toBeNull(): Jest断言，检查值是否为null
    expect(result.current.ensName).toBeNull();
    expect(result.current.ensAvatar).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  // 测试Hook在地址或provider为null时的行为
  test('returns early when address or provider is null', async () => {
    const { result } = renderHook(() => useENS(null, mockProvider));

    // 等待异步操作完成的工具函数
    await waitFor(() => {
      expect(result.current.ensName).toBeNull();
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    expect(mockProvider.lookupAddress).not.toHaveBeenCalled();
  });

  // 测试Hook在成功解析ENS名称时的行为
  test('resolves ENS name successfully', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';
    const testEnsName = 'test.eth';

    mockProvider.lookupAddress.mockResolvedValue(testEnsName);
    mockProvider.getResolver.mockResolvedValue(mockResolver);
    mockResolver.getAvatar.mockResolvedValue('https://example.com/avatar.png');

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    // Should start loading
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBe(testEnsName);
      expect(result.current.ensAvatar).toBe('https://example.com/avatar.png');
      expect(result.current.error).toBeNull();
    });

    expect(mockProvider.lookupAddress).toHaveBeenCalledWith(testAddress);
    expect(mockProvider.getResolver).toHaveBeenCalledWith(testEnsName);
  });

  // 测试Hook在解析ENS名称失败时的行为
  test('handles ENS name resolution failure', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';

    mockProvider.lookupAddress.mockRejectedValue(new Error('ENS resolution failed'));

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBeNull();
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.error).toBe('ENS解析失败');
    });
  });

  test('handles no ENS name found', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';

    mockProvider.lookupAddress.mockResolvedValue(null);

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBeNull();
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.error).toBeNull();
    });

    expect(mockProvider.getResolver).not.toHaveBeenCalled();
  });

  test('resolves ENS name but fails to get avatar', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';
    const testEnsName = 'test.eth';

    mockProvider.lookupAddress.mockResolvedValue(testEnsName);
    mockProvider.getResolver.mockResolvedValue(mockResolver);
    mockResolver.getAvatar.mockRejectedValue(new Error('Avatar resolution failed'));

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBe(testEnsName);
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.error).toBeNull();
    });
  });

  test('handles resolver not found', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';
    const testEnsName = 'test.eth';

    mockProvider.lookupAddress.mockResolvedValue(testEnsName);
    mockProvider.getResolver.mockResolvedValue(null);

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBe(testEnsName);
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.error).toBeNull();
    });

    expect(mockResolver.getAvatar).not.toHaveBeenCalled();
  });

  test('handles empty avatar response', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';
    const testEnsName = 'test.eth';

    mockProvider.lookupAddress.mockResolvedValue(testEnsName);
    mockProvider.getResolver.mockResolvedValue(mockResolver);
    mockResolver.getAvatar.mockResolvedValue(null);

    const { result } = renderHook(() => useENS(testAddress, mockProvider));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ensName).toBe(testEnsName);
      expect(result.current.ensAvatar).toBeNull();
      expect(result.current.error).toBeNull();
    });
  });

  test('updates when address changes', async () => {
    const address1 = '0x1111111111111111111111111111111111111111';
    const address2 = '0x2222222222222222222222222222222222222222';
    const ensName1 = 'test1.eth';
    const ensName2 = 'test2.eth';

    mockProvider.lookupAddress.mockResolvedValueOnce(ensName1).mockResolvedValueOnce(ensName2);
    mockProvider.getResolver.mockResolvedValue(null);

    const { result, rerender } = renderHook(({ address, provider }) => useENS(address, provider), {
      initialProps: { address: address1, provider: mockProvider },
    });

    await waitFor(() => {
      expect(result.current.ensName).toBe(ensName1);
    });

    // Change address
    rerender({ address: address2, provider: mockProvider });

    await waitFor(() => {
      expect(result.current.ensName).toBe(ensName2);
    });

    expect(mockProvider.lookupAddress).toHaveBeenCalledTimes(2);
    expect(mockProvider.lookupAddress).toHaveBeenNthCalledWith(1, address1);
    expect(mockProvider.lookupAddress).toHaveBeenNthCalledWith(2, address2);
  });

  test('updates when provider changes', async () => {
    const testAddress = '0x1234567890123456789012345678901234567890';
    const testEnsName = 'test.eth';

    const provider1 = { ...mockProvider };
    const provider2 = { ...mockProvider };

    provider1.lookupAddress = jest.fn().mockResolvedValue(testEnsName);
    provider1.getResolver = jest.fn().mockResolvedValue(null);
    provider2.lookupAddress = jest.fn().mockResolvedValue('different.eth');
    provider2.getResolver = jest.fn().mockResolvedValue(null);

    const { result, rerender } = renderHook(({ address, provider }) => useENS(address, provider), {
      initialProps: { address: testAddress, provider: provider1 },
    });

    await waitFor(() => {
      expect(result.current.ensName).toBe(testEnsName);
    });

    // Change provider
    rerender({ address: testAddress, provider: provider2 });

    await waitFor(() => {
      expect(result.current.ensName).toBe('different.eth');
    });
  });
});

describe('formatDisplayName', () => {
  test('returns empty string for null address', () => {
    expect(formatDisplayName(null, null)).toBe('');
    expect(formatDisplayName(null, 'test.eth')).toBe('');
  });

  test('returns ENS name when available', () => {
    const address = '0x1234567890123456789012345678901234567890';
    const ensName = 'test.eth';

    expect(formatDisplayName(address, ensName)).toBe(ensName);
  });

  test('returns formatted address when ENS name is null', () => {
    const address = '0x1234567890123456789012345678901234567890';

    expect(formatDisplayName(address, null)).toBe('0x1234...7890');
  });

  test('returns formatted address when ENS name is empty string', () => {
    const address = '0x1234567890123456789012345678901234567890';

    expect(formatDisplayName(address, '')).toBe('0x1234...7890');
  });

  test('handles short addresses correctly', () => {
    const shortAddress = '0x1234';
    // 对于短地址"0x1234"，函数会取前6个字符(0x1234)和后4个字符(1234)
    // 所以结果是"0x1234...1234"
    expect(formatDisplayName(shortAddress, null)).toBe('0x1234...1234');
  });

  test('prioritizes ENS name over address formatting', () => {
    const address = '0x1234567890123456789012345678901234567890';
    const ensName = 'vitalik.eth';

    expect(formatDisplayName(address, ensName)).toBe('vitalik.eth');
    expect(formatDisplayName(address, ensName)).not.toBe('0x1234...7890');
  });
});
