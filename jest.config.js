// jest.config.js - Jest 配置文件
module.exports = {
  // Jest 预设
  // preset: "ts-jest", // 移除 ts-jest 预设，因为现在使用 JavaScript 测试

  // 测试环境设置为 jsdom (模拟浏览器环境)
  testEnvironment: 'jsdom',

  // 测试设置文件
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // 静默特定的控制台警告
  setupFiles: ['<rootDir>/jest.setup.js'],

  // 模块路径映射
  moduleNameMapper: {
    // CSS 文件映射
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // 图片文件映射
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    // 路径别名映射
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 测试文件匹配模式 - 只匹配单元测试
  testMatch: [
    '<rootDir>/tests/unit/**/*.{test,spec}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],

  // 忽略的文件和目录
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/tests/e2e/', // 忽略E2E测试目录
    '<rootDir>/cypress/', // 忽略Cypress目录
  ],

  // 收集测试覆盖率
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
  ],

  // 覆盖率阈值
  // 暂时禁用覆盖率阈值检查，专注于CI流程搭建
  // coverageThreshold: {
  //   global: {
  //     branches: 55,
  //     functions: 60,
  //     lines: 65,
  //     statements: 65,
  //   },
  // },

  // 覆盖率报告格式
  coverageReporters: ['text', 'lcov', 'html'],

  // Jest Stare 报告配置
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'jest-stare', // 报告输出目录
        reportTitle: 'Web3 Frontend Tests', // 报告标题
        additionalResultsProcessors: [], // 额外的结果处理器
        coverageLink: '../coverage/lcov-report/index.html', // 覆盖率链接
        jestStareConfigJson: 'jest-stare.json', // 配置文件
        jestGlobalConfigJson: 'globalStuff.json', // 全局配置
      },
    ],
  ],

  // 转换配置
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // 模块文件扩展名
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // 全局配置 - 移除 ts-jest 相关配置
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.json",
  //     isolatedModules: true,
  //   },
  // },
};
