const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


const OUTPUT_FOLDER = './dist';
const DEVSERVER_SOURCE_FILE = './public/index.html';

module.exports = {
  mode: 'development',
  entry: './src/app',
  output: {
    path: path.resolve(OUTPUT_FOLDER),
    filename: '[name][fullhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.tsx?$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.ts','.tsx']
  },
  devServer: {
    host: 'localhost',
    port: '9000',
    open: true,
    stats: {
        colors: false,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(DEVSERVER_SOURCE_FILE),
      hash: true,
      inject: 'body'
    })
  ]
};
