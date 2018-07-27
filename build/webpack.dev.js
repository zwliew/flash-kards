const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
