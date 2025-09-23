// tailwind.config.js - Tailwind CSS 配置
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 扫描 src 目录下的所有文件
    './stories/**/*.{js,jsx,ts,tsx}', // 包含 Storybook 文件
    './.storybook/**/*.{js,jsx,ts,tsx}', // 包含 Storybook 配置
    './public/index.html', // 包含 HTML 文件
  ],
  theme: {
    extend: {
      // 自定义主题扩展
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // 自定义字体
      },
      spacing: {
        18: '4.5rem', // 自定义间距
        88: '22rem',
      },
    },
  },
  plugins: [
    // 可以添加 Tailwind 插件
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
