const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path');

const port = 3000;

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: join(__dirname, '../public'),
    },
    hot: true,
    liveReload: false,
    port,
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundule.js',
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fl的前端架构',
      filename: 'index.html',
      favicon: resolve(__dirname, '../public/favicon.ico'),
      template: resolve(__dirname, '../src/index-dev.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
  ],
};
