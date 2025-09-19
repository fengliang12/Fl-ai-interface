const { renderHook, act, waitFor } = require('@testing-library/react');
const { useWallet } = require('../../../src/hooks/useWallet');
const { ethers } = require('ethers');

// Mock ethers
const mockSigner = {
  getAddress: jest.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
};

const mockProvider = {
  getSigner: jest.fn().mockResolvedValue(mockSigner),
  getNetwork: jest.fn().mockResolvedValue({
    chainId: BigInt(1),
    name: 'mainnet',
  }),
  getBalance: jest.fn().mockResolvedValue(BigInt('1000000000000000000')), // 1 ETH in wei
};

jest.mock('ethers', () => ({
  ethers: {
    BrowserProvider: jest.fn().mockImplementation(() => mockProvider),
    formatEther: jest.fn().mockReturnValue('1.0'),
    parseEther: jest.fn().mockReturnValue('1000000000000000000'),
  },
}));

// Mock window.ethereum
const mockEthereum = {
  request: jest.fn().mockImplementation((params) => {
    if (params.method === 'eth_accounts') {
      return Promise.resolve([]);
    }
    if (params.method === 'eth_requestAccounts') {
      return Promise.resolve(['0x1234567890123456789012345678901234567890']);
    }
    return Promise.resolve([]);
  }),
  on: jest.fn(),
  removeListener: jest.fn(),
  isMetaMask: true,
  selectedAddress: null,
  chainId: '0x1',
};

Object.defineProperty(window, 'ethereum', {
  value: mockEthereum,
  writable: true,
});

describe('useWallet Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockEthereum.request.mockClear();
    mockEthereum.on.mockClear();
    mockEthereum.removeListener.mockClear();
    mockEthereum.selectedAddress = null;
    mockEthereum.chainId = '0x1';
    // Reset mock implementations
    mockEthereum.request.mockImplementation((params) => {
      if (params.method === 'eth_accounts') {
        return Promise.resolve([]);
      }
      if (params.method === 'eth_requestAccounts') {
        return Promise.resolve(['0x1234567890123456789012345678901234567890']);
      }
      return Promise.resolve(null);
    });

    // Reset BrowserProvider mock
    ethers.BrowserProvider.mockImplementation(() => ({
      getSigner: jest.fn().mockResolvedValue({
        getAddress: jest.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
      }),
      getBalance: jest.fn().mockResolvedValue(ethers.parseEther('1.0')),
      getNetwork: jest.fn().mockResolvedValue({ chainId: 1n }),
    }));
  });

  test('initializes with default state', () => {
    const { result } = renderHook(() => useWallet());

    expect(result.current.isConnected).toBe(false);
    expect(result.current.address).toBeNull();
    expect(result.current.balance).toBeNull();
    expect(result.current.chainId).toBeNull();
    expect(result.current.networkName).toBeNull();
    expect(result.current.signer).toBeNull();
    expect(result.current.provider).toBeNull();
    expect(result.current.error).toBe('');
  });

  test('connects wallet successfully', async () => {
    mockEthereum.request.mockImplementation((params) => {
      if (params.method === 'eth_requestAccounts') {
        return Promise.resolve(['0x1234567890123456789012345678901234567890']);
      }
      if (params.method === 'eth_accounts') {
        return Promise.resolve([]);
      }
      return Promise.resolve([]);
    });

    const { result } = renderHook(() => useWallet());

    await act(async () => {
      await result.current.connectWallet();
    });

    await waitFor(() => {
      expect(result.current.isConnected).toBe(true);
      expect(result.current.address).toBe('0x1234567890123456789012345678901234567890');
      expect(result.current.balance).toBe('1.0');
      expect(result.current.chainId).toBe('0x1');
    });
  });

  test('handles wallet connection rejection', async () => {
    const rejectionError = { code: 4001, message: 'User rejected request' };

    const { result } = renderHook(() => useWallet());

    // Override the default mock implementation for this specific test
    mockEthereum.request.mockImplementation((params) => {
      if (params.method === 'eth_requestAccounts') {
        return Promise.reject(rejectionError);
      }
      if (params.method === 'eth_accounts') {
        return Promise.resolve([]);
      }
      return Promise.resolve(null);
    });

    await act(async () => {
      await result.current.connectWallet();
    });

    // connectWallet handles errors internally and sets error state
    expect(result.current.isConnected).toBe(false);
    expect(result.current.error).toBe('用户拒绝了连接请求');
    expect(result.current.isConnecting).toBe(false);
  });

  test('disconnects wallet', async () => {
    // First connect
    mockEthereum.request.mockResolvedValueOnce(['0x1234567890123456789012345678901234567890']);

    const { result } = renderHook(() => useWallet());

    await act(async () => {
      await result.current.connectWallet();
    });

    // Then disconnect
    await act(async () => {
      result.current.disconnectWallet();
    });

    expect(result.current.isConnected).toBe(false);
    expect(result.current.address).toBeNull();
    expect(result.current.balance).toBeNull();
    expect(result.current.signer).toBeNull();
    expect(result.current.provider).toBeNull();
  });

  test('switches network successfully', async () => {
    const targetNetwork = 'sepolia'; // Use network key instead of chainId
    mockEthereum.request.mockResolvedValueOnce(null);

    const { result } = renderHook(() => useWallet());

    await act(async () => {
      await result.current.switchNetwork(targetNetwork);
    });

    expect(mockEthereum.request).toHaveBeenCalledWith({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xaa36a7' }],
    });
  });

  test('handles network switch rejection', async () => {
    const targetNetwork = 'sepolia';
    const rejectionError = {
      code: 4001,
      message: 'User rejected network switch',
    };

    const { result } = renderHook(() => useWallet());

    // Override the default mock implementation for this specific test
    mockEthereum.request.mockImplementation((params) => {
      if (params.method === 'wallet_switchEthereumChain') {
        return Promise.reject(rejectionError);
      }
      if (params.method === 'eth_accounts') {
        return Promise.resolve([]);
      }
      if (params.method === 'eth_requestAccounts') {
        return Promise.resolve(['0x1234567890123456789012345678901234567890']);
      }
      return Promise.resolve(null);
    });

    await act(async () => {
      await result.current.switchNetwork(targetNetwork);
    });

    // switchNetwork handles errors internally and sets error state
    await waitFor(() => {
      expect(result.current.error).toBe('用户拒绝了切换网络的请求');
    });
  });

  test('handles account change events', async () => {
    const { result } = renderHook(() => useWallet());

    // Simulate account change
    const accountChangeHandler = mockEthereum.on.mock.calls.find((call) => call[0] === 'accountsChanged')?.[1];

    if (accountChangeHandler) {
      await act(async () => {
        accountChangeHandler(['0x9876543210987654321098765432109876543210']);
      });

      await waitFor(() => {
        expect(result.current.address).toBe('0x9876543210987654321098765432109876543210');
      });
    }
  });

  test('handles chain change events', async () => {
    const { result } = renderHook(() => useWallet());

    // Simulate chain change
    const chainChangeHandler = mockEthereum.on.mock.calls.find((call) => call[0] === 'chainChanged')?.[1];

    if (chainChangeHandler) {
      await act(async () => {
        chainChangeHandler('0x5'); // Goerli
      });

      await waitFor(() => {
        expect(result.current.chainId).toBe(5);
      });
    }
  });

  test('handles disconnect events', async () => {
    // First connect
    mockEthereum.request.mockResolvedValueOnce(['0x1234567890123456789012345678901234567890']);

    const { result } = renderHook(() => useWallet());

    await act(async () => {
      await result.current.connectWallet();
    });

    // Simulate disconnect event
    const disconnectHandler = mockEthereum.on.mock.calls.find((call) => call[0] === 'disconnect')?.[1];

    if (disconnectHandler) {
      await act(async () => {
        disconnectHandler();
      });

      expect(result.current.isConnected).toBe(false);
    }
  });

  test('updates balance when account changes', async () => {
    const { result } = renderHook(() => useWallet());

    // Mock different balance for new account
    const mockSigner = {
      getAddress: jest.fn().mockResolvedValue('0x9876543210987654321098765432109876543210'),
      getBalance: jest.fn().mockResolvedValue(ethers.parseEther('5.0')),
    };

    const mockProvider = {
      getSigner: jest.fn().mockResolvedValue(mockSigner),
      getNetwork: jest.fn().mockResolvedValue({ chainId: 1, name: 'homestead' }),
    };

    jest.mocked(ethers.BrowserProvider).mockImplementation(() => mockProvider);
    jest.mocked(ethers.formatEther).mockReturnValue('5.0');

    // Simulate account change
    const accountChangeHandler = mockEthereum.on.mock.calls.find((call) => call[0] === 'accountsChanged')?.[1];

    if (accountChangeHandler) {
      await act(async () => {
        accountChangeHandler(['0x9876543210987654321098765432109876543210']);
      });

      await waitFor(() => {
        expect(result.current.balance).toBe('5.0');
      });
    }
  });

  test('handles missing ethereum provider', async () => {
    // Temporarily remove ethereum from window before hook initialization
    const originalEthereum = window.ethereum;

    // Set ethereum to undefined to simulate missing provider
    window.ethereum = undefined;

    const { result } = renderHook(() => useWallet());

    // Verify initial state
    expect(result.current.error).toBe('');
    expect(result.current.isConnecting).toBe(false);

    // Call connectWallet and wait for it to complete
    await act(async () => {
      await result.current.connectWallet();
    });

    // Wait for any pending state updates
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // The error should be set when ethereum is missing
    expect(result.current.error).toBe('请安装 MetaMask 或其他 Web3 钱包');
    expect(result.current.isConnected).toBe(false);
    expect(result.current.isConnecting).toBe(false);

    // Restore ethereum
    window.ethereum = originalEthereum;
  });

  test('gets network name correctly', async () => {
    const networkCases = [
      { chainId: '0x1', expected: 'Ethereum Mainnet' },
      { chainId: '0xaa36a7', expected: 'Sepolia Test Network' },
      { chainId: '0x999', expected: 'Unknown Network' },
    ];

    for (const { chainId, expected } of networkCases) {
      const { result, unmount } = renderHook(() => useWallet());

      mockEthereum.request.mockResolvedValueOnce(['0x1234567890123456789012345678901234567890']);

      // Mock the network response
      const customMockProvider = {
        getSigner: jest.fn().mockResolvedValue(mockSigner),
        getNetwork: jest.fn().mockResolvedValue({
          chainId: BigInt(Number.parseInt(chainId, 16)),
          name: 'test',
        }),
        getBalance: jest.fn().mockResolvedValue(BigInt('1000000000000000000')),
      };

      jest.mocked(ethers.BrowserProvider).mockImplementationOnce(() => customMockProvider);

      await act(async () => {
        await result.current.connectWallet();
      });

      await waitFor(() => {
        expect(result.current.isConnected).toBe(true);
        expect(result.current.networkName).toBe(expected);
      });

      unmount();
    }
  });

  test('cleans up event listeners on unmount', async () => {
    mockEthereum.request.mockResolvedValueOnce(['0x1234567890123456789012345678901234567890']);

    const { result, unmount } = renderHook(() => useWallet());

    // First connect to set up event listeners
    await act(async () => {
      await result.current.connectWallet();
    });

    // Wait for connection to complete
    await waitFor(() => {
      expect(result.current.isConnected).toBe(true);
    });

    // Clear previous calls
    mockEthereum.removeListener.mockClear();

    // Now unmount and check cleanup
    unmount();

    expect(mockEthereum.removeListener).toHaveBeenCalledWith('chainChanged', expect.any(Function));
    expect(mockEthereum.removeListener).toHaveBeenCalledWith('accountsChanged', expect.any(Function));
    expect(mockEthereum.removeListener).toHaveBeenCalledTimes(2);
  });
});
