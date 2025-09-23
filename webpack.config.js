const { merge } = require('webpack-merge');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const argv = require('yargs-parser')(process.argv.slice(2));

// 定义环境变量
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode === 'production' ? true : false;
const _shouldAnalyze = argv?.env === 'analyze' || false;
const Dotenv = require('dotenv-webpack');

const webpackBaseConfig = {
  entry: {
    main: './src/index.tsx',
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
        use: [
          _modeflag ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      chunkFilename: _modeflag
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
    // 生产环境压缩
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: _modeflag,
            drop_debugger: _modeflag,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
            passes: 2, // 多次压缩以获得更好的结果
            unsafe_arrows: false,
            unsafe_methods: false,
            unsafe_proto: false,
          },
          mangle: {
            safari10: true,
            properties: false,
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
  resolve: {
    alias: {
      '@': resolve('src'),
      '@pages': resolve('src/pages'),
      '@abis': resolve('src/abis'),
      '@states': resolve('src/states'),
      '@hooks': resolve('src/hooks'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@utils': resolve('src/utils'),
      '@connectors': resolve('src/connectors'),
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
  },
};

module.exports = merge(webpackBaseConfig, _mergeConfig);
