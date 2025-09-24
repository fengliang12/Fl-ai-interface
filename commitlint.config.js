// commitlint.config.js - 提交信息规范配置
module.exports = {
  // 继承常规提交规范
  extends: ['@commitlint/config-conventional'],

  // 自定义规则
  rules: {
    // 提交类型枚举
    'type-enum': [
      2, // 错误级别
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式化
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试相关
        'build', // 构建相关
        'ci', // CI/CD相关
        'chore', // 其他杂项
        'revert', // 回滚
      ],
    ],
    // 主题长度限制
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 4],
    // 主题格式
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // 主题结尾不能有句号
    'subject-full-stop': [2, 'never', '.'],
    // 正文长度限制
    'body-max-line-length': [2, 'always', 100],
    // 页脚长度限制
    'footer-max-line-length': [2, 'always', 100],
  },

  // 忽略规则 (可选)
  ignores: [
    (commit) => commit.includes('WIP'), // 忽略包含 WIP 的提交
  ],

  // 默认忽略
  defaultIgnores: true,

  // 帮助信息
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
