## 5️⃣ Webpack 构建系统

### 安装构建工具

```bash
# Webpack 核心依赖
pnpm add -D webpack@5.101.0 webpack-cli@6.0.1 webpack-dev-server@5.2.2

# HTML 和 CSS 处理插件
pnpm add -D html-webpack-plugin@5.6.3 mini-css-extract-plugin@2.9.3

# SWC 编译器和加载器
pnpm add -D @swc/core@1.13.3 swc-loader@0.2.6 css-loader@7.1.2 style-loader@4.0.0 postcss-loader@8.1.1

# 构建分析和优化工具
pnpm add -D webpack-bundle-analyzer@4.10.2 terser-webpack-plugin@5.3.14
pnpm add -D compression-webpack-plugin copy-webpack-plugin@12.0.2
pnpm add -D css-minimizer-webpack-plugin@7.0.2
pnpm add -D friendly-errors-webpack-plugin@1.7.0
pnpm add -D node-notifier@10.0.1

# 其他核心依赖
pnpm add -D webpack-merge@6.0.1
pnpm add -D dotenv-webpack@8.1.1
pnpm add -D yargs-parser@21.1.1


# 当前项目使用的版本及作用说明
# webpack@5.101.0 - 现代化的模块打包工具，用于构建和优化前端资源
# webpack-cli@6.0.1 - Webpack的命令行接口，提供构建命令和配置选项
# webpack-dev-server@5.2.2 - 开发服务器，提供热重载和实时预览功能
# html-webpack-plugin@5.6.3 - 自动生成HTML文件并注入打包后的资源
# mini-css-extract-plugin@2.9.3 - 将CSS提取为独立文件，优化加载性能
# @swc/core@1.13.3 - 高性能的JavaScript/TypeScript编译器，替代Babel
# swc-loader@0.2.6 - SWC的Webpack加载器，用于转换JS/TS代码
# css-loader@7.1.2 - 处理CSS文件的导入和依赖解析
# postcss-loader@8.1.1 - 处理CSS文件的PostCSS转换
# style-loader@4.0.0 - 将CSS注入到DOM中的加载器
# webpack-bundle-analyzer@4.10.2 - 分析打包结果，可视化展示模块大小和依赖关系
# terser-webpack-plugin@5.3.14 - JavaScript代码压缩和混淆工具
# compression-webpack-plugin - 生成Gzip压缩文件，减少传输体积（项目中未实际使用）
# copy-webpack-plugin@12.0.2 - 复制静态文件到输出目录
# css-minimizer-webpack-plugin@7.0.2 - CSS代码压缩和优化工具
# dotenv-webpack@8.1.1 - 加载环境变量的Webpack插件
# webpack-merge@6.0.1 - 合并Webpack配置的工具
# yargs-parser@21.1.1 - 解析命令行参数的工具
# friendly-errors-webpack-plugin@1.7.0 - 友好的Webpack错误插件，提供更友好的错误信息和提示
# node-notifier@10.0.1 - 跨平台的系统通知插件，用于在构建完成后发送通知
```

### 核心配置文件

- **webpack.config.js** - 主要Webpack配置（环境判断）
- **config/webpack.development.js** - 开发环境专用配置
- **config/webpack.production.js** - 生产环境专用配置
- **config/webpack.test.js** - 测试环境专用配置
- **.swcrc** - SWC编译器配置
- **webpack.common.js** - 通用配置（可选）

### 关键配置要点

#### 主配置文件 (webpack.config.js)

```javascript
// 主配置文件 (webpack.config.js)
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const argv = require('yargs-parser')(process.argv.slice(2));
const _shouldAnalyze = argv?.env === 'analyze' || false;
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production' ? true : false;

// 合并配置文件
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const webpackBaseConfig = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'), //将当前文件所在目录与dist目录拼接成一个绝对路径
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeFlag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      chunkFilename: _modeFlag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      ignoreOrder: false,
    }),
    new Dotenv(),
    _shouldAnalyze &&
      new BundleAnalyzerPlugin({
        analyzerPort: 'auto',
        openAnalyzer: true,
      }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxSize: 240000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          chunks: 'all',
          priority: 10,
        },
        mui: {
          test: /[\\/]node_modules[\\/]@mui[\\/]/,
          name: 'mui',
          chunks: 'all',
          priority: 16,
          enforce: true,
        },
        bnjs: {
          test: /[\\\/]node_modules[\\\/](bn\.js|aes-js)[\\\/]/,
          name: 'bnjs',
          chunks: 'all',
          priority: 15,
          enforce: true,
        },
        web3: {
          test: /[\\\/]node_modules[\\\/](@web3-react|ethers|@emotion)[\\\/]/,
          name: 'web3',
          chunks: 'all',
          priority: 17,
          enforce: true,
        },
        ethersproject: {
          test: /[\\\/]node_modules[\\\/](@ethersproject)[\\\/]/,
          name: 'ethersproject',
          chunks: 'all',
          priority: 18,
          enforce: true,
        },
        reactRouter: {
          test: /[\\\/]node_modules[\\\/](react-router-dom|react-router)[\\\/]/,
          name: 'reactRouter',
          priority: 21,
          chunks: 'all',
          enforce: true,
        },
        react: {
          test: /[\\\/]node_modules[\\\/](react|react-dom)[\\\/]/,
          name: 'react',
          priority: 22,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@pages': resolve('src/pages'),
      '@abis': resolve('src/abis'),
      '@states': resolve('src/states'),
      '@hooks': resolve('src/hooks'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@utils': resolve('src/utils'),
      '@connectors': resolve('src/connectors'),
    },
  },
};
module.exports = merge(webpackBaseConfig, _mergeConfig);
```

#### 开发环境配置 (config/webpack.development.js)

```javascript
// config/webpack.development.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const { join } = require('path');
const path = require('path');

const port = 3000;

module.exports = {
  // 开发服务器配置
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    hot: true,
    port,
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },
    },
  },

  // 输出配置
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundule.js',
    assetModuleFilename: 'images/[name].[ext]',
  },

  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fl的前端架构',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      template: path.resolve(__dirname, '../src/index-dev.html'),
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + port],
        notes: ['💊 构建信息请及时关注窗口右上角'],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        console.log(error);
        notifier.notify({
          title: '👒 Webpack Build Error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: join(__dirname, 'icon.png'),
        });
      },
      clearConsole: true,
    }),
  ],
};
```

#### 生产环境配置 (config/webpack.production.js)

```javascript
// config/webpack.production.js
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../dist'),
    publicPath: './',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    assetModuleFilename: 'images/[name].[contenthash:5][ext]',
  },
  performance: {
    maxAssetSize: 250000, // 最大资源大小250KB
    maxEntrypointSize: 250000, // 最大入口资源大小250KB
    hints: 'warning', // 超出限制时只给出警告
  },
  optimization: {
    // 生产环境压缩
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
            passes: 2, // 多次压缩以获得更好的结果
            unsafe_arrows: false,
            unsafe_methods: false,
            unsafe_proto: false,
          },
          mangle: {
            safari10: true,
            properties: {
              regex: /^_/,
            },
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fl的前端架构',
      filename: 'index.html',
      template: resolve(__dirname, '../src/index-prod.html'),
      favicon: './public/favicon.ico',
    }),
  ],
};
```

#### SWC 配置 (.swcrc)

```json
{
  "env": {
    "targets": {
      "chrome": "58",
      "ie": "11"
    }
  },
  "module": {
    "type": "es6",
    "ignoreDynamic": true
  },
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "dynamicImport": true,
      "decorators": true,
      "tsx": true
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true,
      "react": {
        "runtime": "automatic",
        "throwIfNamespace": true,
        "useBuiltins": true
      }
    },
    "loose": true,
    "externalHelpers": true,
    "keepClassNames": false
  }
}
```

### 环境变量配置

- 基于的是 dotenv-webpack@8.1.1 需要在 plugins 里面实例化
- 定义变量需要`REACT_APP_` 开头
- 在 package.json 的 scripts 中，为「开发 / 生产 / 测试」分别添加脚本，通过 --env mode=xxx 传递环境标识：

```bash
# .env.development
NODE_ENV=development
GENERATE_SOURCEMAP=true
REACT_APP_API_URL=http://localhost:3001

# .env.production
NODE_ENV=production
GENERATE_SOURCEMAP=false
REACT_APP_API_URL=https://api.production.com

# .env.test
NODE_ENV=test
GENERATE_SOURCEMAP=true
REACT_APP_API_URL=http://localhost:3002
```

### 最佳实践

1. **环境分离**
   - 开发环境注重开发体验和调试
   - 生产环境注重性能和体积优化
   - 测试环境注重稳定性和可调试性

2. **代码分割策略**
   - React 库单独打包
   - Web3 相关库分组
   - 第三方 UI 库独立
   - 业务代码按路由分割

3. **性能优化**
   - 使用 SWC 替代 Babel 提升编译速度
   - 启用 Gzip 压缩减少传输体积
   - 合理配置缓存策略
   - 使用 Tree Shaking 移除无用代码

4. **调试和分析**
   - 开发环境启用详细的 source map
   - 生产环境可选择性启用 source map
   - 使用 Bundle Analyzer 分析打包结果
   - 配置性能预算监控

### package.json 脚本配置

在 Webpack 配置完成后，添加以下构建相关脚本：

```json
{
  "scripts": {
    // 开发服务器
    "dev": "webpack serve --mode development",
    "prod": "webpack --mode production",
    "analyze": "webpack --mode production --env analyze"
  }
}
```

### 📚 相关文档

- [Webpack 官方文档](https://webpack.js.org/)
- [SWC 官方文档](https://swc.rs/)
- [webpack-dev-server 配置](https://webpack.js.org/configuration/dev-server/)
- [代码分割指南](https://webpack.js.org/guides/code-splitting/)
- [性能优化指南](https://webpack.js.org/guides/performance/)

---
