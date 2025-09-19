const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

const path = require('path');
const port = 3000;

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    hot: true,
    port,
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
