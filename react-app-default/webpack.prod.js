const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSWebpackPlugin = require('purifycss-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: true,
  },
}

const config = merge(common.config, {
  devtool: 'cheap-module-source-map', //https://webpack.github.io/docs/configuration.html#devtool


  module:{
    rules: [
      {
        test: /\.scss$/,
        exclude: common.shared.exclude,
        use: ExtractTextPlugin.extract({
          use: [
            cssLoader,
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            cssLoader,
          ],
        }),
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([{from:'../public', to:'../build'}], {ignore:['index.html']}),
    new HtmlWebpackPlugin({template: './index.html', hash: true}), // Nao pode ser o arquivo da pasta public - usa o src/index.html
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // Ignore all locale files of moment.js
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new PurifyCSSWebpackPlugin({
      paths: glob.sync(path.join(__dirname, '/src/**/*'), { nodir: true }),
      styleExtensions: ['.css'],
      moduleExtensions: ['.js'],
      verbose: true,
      purifyOptions: {
        minify: true,
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      extractComments: true,
    }),
    // new BundleAnalyzerPlugin()
  ],
})

module.exports = (env) => {
  let processEnv = {
    'NODE_ENV': JSON.stringify('production')
  }

  if (env){
    Object.keys(env).forEach((key) => {
      processEnv[key] = JSON.stringify(`${env[key]}`)
    })
  }
  
  console.log("build process.env:\n", processEnv);
  
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': processEnv
    })
  )
  return config
}
