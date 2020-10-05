"use strict";

var webpack = require('webpack');

var path = require('path');

var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var config = {
  entry: ['react-hot-loader/patch', './client/src/index.js'],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [new LodashModuleReplacementPlugin()]
};
module.exports = config;