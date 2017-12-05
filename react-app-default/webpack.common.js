const { resolve } = require('path')

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const shared = {
  exclude: /node_modules\/(?!(pismo-id|token-refresher)\/).*/,
}

const config = {
  entry: [
    './index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '',
  },

  context: resolve(__dirname, 'src'),

  resolve:{
    extensions:["*", ".js", ".jsx"], // https://github.com/webpack/webpack/issues/3043
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        exclude: shared.exclude,
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true,
          failOnWarning: false,
          fix: true,
        },
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: shared.exclude,
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        },
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}

module.exports = {
  config,
  shared,
}
