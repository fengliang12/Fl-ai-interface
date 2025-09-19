// jest.config.js - Jest 配置文件
module.exports = {
  // Jest 预设
  // preset: "ts-jest", // 移除 ts-jest 预设，因为现在使用 JavaScript 测试

  // 测试环境设置为 jsdom (模拟浏览器环境)
  testEnvironment: "jsdom",

  // 测试设置文件
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // 模块路径映射
  moduleNameMapper: {
    // CSS 文件映射
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // 图片文件映射
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
    // 路径别名映射
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // 测试文件匹配模式
  testMatch: [
    "<rootDir>/tests/**/*.{test,spec}.{js,jsx,ts,tsx}",
    "<rootDir>/tests/unit/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/tests/e2e/**/*.{js,jsx,ts,tsx}",
  ],

  // 忽略的文件和目录
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/build/",
  ],

  // 收集测试覆盖率
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
  ],

  // 覆盖率阈值
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // 覆盖率报告格式
  coverageReporters: ["text", "lcov", "html"],

  // Jest Stare 报告配置
  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "jest-stare", // 报告输出目录
        reportTitle: "Web3 Frontend Tests", // 报告标题
        additionalResultsProcessors: [], // 额外的结果处理器
        coverageLink: "../coverage/lcov-report/index.html", // 覆盖率链接
        jestStareConfigJson: "jest-stare.json", // 配置文件
        jestGlobalConfigJson: "globalStuff.json", // 全局配置
      },
    ],
  ],

  // 转换配置
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // 模块文件扩展名
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // 全局配置
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      isolatedModules: true,
    },
  },
};
