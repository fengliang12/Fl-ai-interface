// postcss.config.js - PostCSS 配置
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    tailwindcss: {}, // Tailwind CSS 处理
    autoprefixer: {}, // 自动添加浏览器前缀
    'postcss-preset-env': {
      // 现代 CSS 特性支持
      stage: 1, // 使用 Stage 1 特性
      features: {
        'nesting-rules': true, // 启用 CSS 嵌套
      },
    },
  },
};
