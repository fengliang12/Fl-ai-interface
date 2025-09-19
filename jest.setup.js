// Jest 全局设置文件
// 用于静默测试过程中的特定警告和日志

// 保存原始的 console 方法
const originalError = console.error;
const originalWarn = console.warn;
const originalLog = console.log;

// 需要静默的警告模式
const silencePatterns = [
  /Warning.*not wrapped in act/,
  /Warning.*An update to .* inside a test was not wrapped in act/,
  /An update to .* inside a test was not wrapped in act/,
  /When testing, code that causes React state updates should be wrapped into act/,
  /This ensures that you're testing the behavior the user would see in the browser/,
  /Learn more at https:\/\/react.dev\/link\/wrap-tests-with-act/,
  /React does not recognize the .* prop on a DOM element/,
  /If you intentionally want it to appear in the DOM as a custom attribute/,
  /spell it as lowercase .* instead/,
  /If you accidentally passed it from a parent component, remove it from the DOM element/,
  /console.error/,
  /console.log/,
  /ENS解析失败/,
  /ENS头像解析失败/,
  /Error checking connection/,
  /Please connect to MetaMask/,
  /事件监听器清理完成/,
  /抢红包失败/,
  /红包已抢完/,
  /您已经抢过红包了/,
];

// 重写 console.error 来过滤特定警告
console.error = (...args) => {
  const message = args.join(' ');
  const shouldSilence = silencePatterns.some((pattern) =>
    pattern.test(message)
  );

  if (!shouldSilence) {
    originalError.apply(console, args);
  }
};

// 重写 console.warn 来过滤特定警告
console.warn = (...args) => {
  const message = args.join(' ');
  const shouldSilence = silencePatterns.some((pattern) =>
    pattern.test(message)
  );

  if (!shouldSilence) {
    originalWarn.apply(console, args);
  }
};

// 重写 console.log 来过滤特定日志
console.log = (...args) => {
  const message = args.join(' ');
  const shouldSilence = silencePatterns.some((pattern) =>
    pattern.test(message)
  );

  if (!shouldSilence) {
    originalLog.apply(console, args);
  }
};

// 设置全局测试超时
jest.setTimeout(30000);

// 静默 Node.js 弃用警告
process.env.NODE_NO_WARNINGS = '1';
