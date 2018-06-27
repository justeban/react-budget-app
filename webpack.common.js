'use strict';

require('dotenv').config();

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production'; // Boolean

const webpackConfig = module.exports = {};

webpackConfig.entry = ['babel-polyfill', `${__dirname}/src/main.js`];

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: 'React App',
    template: `${__dirname}/src/index.html`
  }),
  new DefinePlugin({
    API_URL: JSON.stringify(process.env.API_URL),
    PRODUCTION: production,
  }),
];

webpackConfig.module = {};

webpackConfig.module.rules = [
  {
    test: /\.(png|gif|svg|jpg)$/,
    use: ['file-loader'],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];