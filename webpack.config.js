const WebpackBar = require('webpackbar');
const Stylish = require('webpack-stylish');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: WebpackWatchedGlobEntries.getEntries(
    [
      path.resolve(__dirname, 'src/index.md'),
    ],
  ),
  output: {
    publicPath: '/',
  },
  stats: 'errors-only',
  module: {
    rules: [{
      test: /.md$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].html'
          }
        },
        'extract-loader',
        {
          loader: 'html-loader',
          options: {
            attrs: ['a:href'],
            root: path.resolve(__dirname,'./src')
          }
        },
        'markdown-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.md']
  },
  plugins: [
    new WebpackWatchedGlobEntries(),
    new WebpackBar(),
    new Stylish(),
    new CleanWebpackPlugin()
  ]
}