import path from 'path'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJSWebpackPlugin from 'uglifyjs-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const pageTitle = 'React Library'
const libName = 'pismo-react-library'

const isProduction = process.env.NODE_ENV === 'production'
const outputDir = 'dist'
const docsOutputDir = 'docs'

const commonEntries = [
  'babel-polyfill',
  'react-hot-loader/patch',
]

const commonPlugins = [
  new CleanWebpackPlugin([outputDir, docsOutputDir]),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
]

const config = {
  entry: commonEntries.concat(isProduction ? [
    './src/index.js',
  ] : [
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: commonPlugins.concat(isProduction ? [
    new webpack.optimize.DedupePlugin(),
    new UglifyJSWebpackPlugin(),
  ] : [
    new HTMLWebpackPlugin({
      title: pageTitle,
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]),
  devServer: {
    hot: true,
    inline: true,
    noInfo: true,
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
