import path from 'path'
import glob from 'glob'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJSWebpackPlugin from 'uglifyjs-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import htmlWebpackTemplate from 'html-webpack-template'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import PurifyCSSWebpackPlugin from 'purifycss-webpack'

const pageTitle = 'Pismo React Library'
const libName = 'pismo-react-library'

const isProduction = process.env.NODE_ENV === 'production'
const outputDir = 'dist'
const docsOutputDir = 'docs'

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: isProduction,
  },
}

const commonEntries = [
]

const commonPlugins = [
  new CleanWebpackPlugin([outputDir, docsOutputDir]),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
  new ExtractTextWebpackPlugin('index.min.css'),
  new PurifyCSSWebpackPlugin({
    paths: glob.sync(path.join(__dirname, '/src/**/*.js')),
  }),
]

const config = {
  entry: commonEntries.concat(isProduction ? [
    'babel-polyfill',
    './src/index.js',
  ] : [
    'react-hot-loader/patch',
    './src/dev.js',
  ]),
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, outputDir),
    library: libName,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
          ],
        }),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: commonPlugins.concat(isProduction ? [
    new UglifyJSWebpackPlugin(),
  ] : [
    new HTMLWebpackPlugin({
      title: pageTitle,
      inject: false,
      hash: true,
      cache: true,
      showErrors: true,
      template: htmlWebpackTemplate,
      appMountId: 'root',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no',
        },
        {
          name: 'viewport',
          content: 'initial-scale=1, maximum-scale=1',
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]),
  devServer: {
    hot: true,
    inline: true,
    overlay: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    allowedHosts: [
      '*.pismo.io',
      '*.pismolabs.io',
      '*.pismolabs.com',
      'localhost',
    ],
  },
}

export default config
