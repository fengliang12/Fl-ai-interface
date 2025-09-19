const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // E2E 测试配置
  e2e: {
    // 基础URL，指向本地开发服务器
    baseUrl: "http://localhost:3000",

    // 测试文件存放目录
    specPattern: "tests/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // 支持文件目录
    supportFile: "tests/e2e/support/e2e.js",

    // 固定装置文件目录
    fixturesFolder: "tests/e2e/fixtures",

    // 截图和视频存放目录
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",

    // 视口设置
    viewportWidth: 1280,
    viewportHeight: 720,

    // 测试超时设置（Web3交互可能较慢）
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,

    // 在测试失败时录制视频
    video: true,
    videoCompression: 32,

    // 在测试失败时截图
    screenshotOnRunFailure: true,

    // 设置浏览器启动参数（适用于Web3测试）
    setupNodeEvents(on, config) {
      // 这里可以添加插件和任务

      // 处理Web3相关的任务
      on("task", {
        // 日志输出任务
        log(message) {
          console.log(message);
          return null;
        },

        // 清理测试数据任务
        clearTestData() {
          // 清理本地存储、会话存储等
          return null;
        },
      });

      return config;
    },

    // 实验性功能
    experimentalStudio: true,
    experimentalWebKitSupport: true,
  },

  // 组件测试配置（可选）
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },

  // 全局配置
  env: {
    // 环境变量，可以在测试中使用 Cypress.env('变量名') 访问
    WALLET_PRIVATE_KEY: "test_private_key_here",
    TEST_ACCOUNT_ADDRESS: "0x742d35Cc6634C0532925a3b8D0C9e3e0C8b0e8e8",
    NETWORK_URL: "http://localhost:8545", // 本地测试网络
  },

  // 忽略的错误类型（Web3应用常见）
  chromeWebSecurity: false,

  // 重试配置
  retries: {
    runMode: 2, // CI环境下重试次数
    openMode: 0, // 开发环境下重试次数
  },
});
