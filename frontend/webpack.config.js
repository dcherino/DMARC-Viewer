/* globals __dirname */

'use strict';

const webpack = require('webpack'),
  path = require('path');

module.exports = {
  cache: true,
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: {
    controller: ['./src/scripts/controller.js'],
    view: ['./src/scripts/view.tsx'],
  },
  output: {
    filename: '[name].umd-es2015.min.js',
    path: path.join(__dirname, 'public', 'dist', 'js'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
