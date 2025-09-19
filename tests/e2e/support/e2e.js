// ***********************************************************
// Cypress E2E 测试支持文件
// 这个文件会在每个测试文件之前自动加载
// ***********************************************************

// 导入 Cypress 命令
import './commands';

// 或者，你可以使用 CommonJS 语法:
// require('./commands')

// 全局配置
Cypress.on('uncaught:exception', (err, runnable) => {
  // 忽略某些Web3相关的错误，防止测试中断
  if (
    err.message.includes('MetaMask') ||
    err.message.includes('ethereum') ||
    err.message.includes('Web3') ||
    err.message.includes('provider')
  ) {
    return false;
  }
  // 对于其他错误，让测试失败
  return true;
});

// 在每个测试之前执行的钩子
beforeEach(() => {
  // 清理本地存储和会话存储
  cy.clearLocalStorage();
  cy.clearCookies();

  // 设置视口大小
  cy.viewport(1280, 720);

  // 访问应用首页
  cy.visit('/');

  // 等待页面完全加载
  cy.get('body').should('be.visible');
});

// 在每个测试之后执行的钩子
afterEach(() => {
  // 截图（仅在测试失败时）
  cy.screenshot({ capture: 'runner', onlyOnFailure: true });
});

// 全局测试配置
Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('requestTimeout', 10000);
Cypress.config('responseTimeout', 10000);

// 添加自定义断言
// 注意：在Cypress中，chai已经全局可用，不需要chaiGlobal
// 自定义断言可以通过Cypress.Commands.add来添加

// 日志输出辅助函数
Cypress.Commands.add('testLog', (message) => {
  console.log(`[E2E Test] ${message}`);
});
