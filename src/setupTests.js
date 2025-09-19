// src/setupTests.js - 测试环境设置
require('@testing-library/jest-dom'); // Jest DOM 匹配器

// 模拟 Web3 相关的全局对象
Object.defineProperty(window, 'ethereum', {
  writable: true,
  value: {
    request: jest.fn(),
    on: jest.fn(),
    removeListener: jest.fn(),
    isMetaMask: true,
  },
});

// 模拟 matchMedia (用于响应式测试)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // 已弃用
    removeListener: jest.fn(), // 已弃用
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// 模拟 ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// 模拟 IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// 设置测试超时时间
jest.setTimeout(10000);

// 全局测试工具函数
global.testUtils = {
  // 等待异步操作完成
  waitFor: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

  // 模拟用户事件
  mockUserEvent: {
    click: jest.fn(),
    type: jest.fn(),
    clear: jest.fn(),
  },
};
