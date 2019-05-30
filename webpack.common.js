const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: 'runtime',
      preload: {
        test: /\.js$/,
      },
    }),
    new CopyWebpackPlugin([{
      from: 'public',
    }]),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};
