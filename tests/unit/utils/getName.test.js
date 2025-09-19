// jest.mock(): Jest的模块模拟函数，用于替换整个模块的导出
// 这里我们模拟@web3-react/metamask模块，让它返回我们的Mock类
// 第一个参数是要模拟的模块路径，第二个参数是返回模拟对象的函数
jest.mock('@web3-react/metamask', () => ({
  MetaMask: class MockMetaMask {
    constructor() {
      this.provider = null;
      // jest.fn(): 创建一个Jest模拟函数，可以追踪函数调用
      this.activate = jest.fn();
      this.deactivate = jest.fn();
    }
  },
}));

// jest.mock(): Jest的模块模拟函数，用于替换整个模块的导出
// 这里我们模拟@web3-react/walletconnect模块
jest.mock('@web3-react/walletconnect', () => ({
  WalletConnect: class MockWalletConnect {
    constructor() {
      this.provider = null;
      this.activate = jest.fn();
      this.deactivate = jest.fn();
    }
  },
}));

// Mock（模拟）连接器类 - 用于测试时替代真实的外部依赖
// Mock是Jest的重要概念，用于创建假的对象来替代真实的依赖项

// 在模拟之后导入 - 确保导入的是被模拟的版本
// 注意：必须在jest.mock()调用之后导入，这样才能获取到模拟的模块
import getName from '../../../src/utils/getName';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect';

// describe: 创建测试套件，组织相关的测试用例
describe('getName', () => {
  // test: 定义单个测试用例
  test('returns "MetaMask" for MetaMask connector', () => {
    // 创建模拟的MetaMask连接器实例
    const mockMetaMask = new MetaMask({});
    // 调用被测试的函数
    const result = getName(mockMetaMask);

    // 验证返回值是否正确
    expect(result).toBe('MetaMask');
  });

  // 测试 WalletConnect V2 连接器的 getName 函数
  test('returns "WalletConnect V2" for WalletConnect connector', () => {
    const mockWalletConnect = new WalletConnectV2({});
    const result = getName(mockWalletConnect);

    expect(result).toBe('WalletConnect V2');
  });

  // 测试未知连接器类型的 getName 函数
  test('returns "Unknown" for unknown connector type', () => {
    const mockUnknownConnector = {
      provider: null,
      activate: jest.fn(),
      deactivate: jest.fn(),
    };

    const result = getName(mockUnknownConnector);

    expect(result).toBe('Unknown');
  });

  // 测试 getName 函数对 null 和 undefined 输入的处理
  test('returns "Unknown" for null connector', () => {
    const result = getName(null);

    expect(result).toBe('Unknown');
  });

  // 测试 getName 函数对 undefined 输入的处理
  test('returns "Unknown" for undefined connector', () => {
    const result = getName(undefined);

    expect(result).toBe('Unknown');
  });

  // 测试 getName 函数对部分接口连接器的处理
  test('handles connector with partial interface', () => {
    const partialConnector = {
      provider: null,
    };

    const result = getName(partialConnector);

    expect(result).toBe('Unknown');
  });

  // 测试 getName 函数对多个连接器类型的正确识别
  test('correctly identifies MetaMask instance among multiple connectors', () => {
    const metaMaskConnector = new MetaMask({});
    const walletConnectConnector = new WalletConnectV2({});

    expect(getName(metaMaskConnector)).toBe('MetaMask');
    expect(getName(walletConnectConnector)).toBe('WalletConnect V2');
  });
});
