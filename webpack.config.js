const WebpackBar = require('webpackbar');
const Stylish = require('webpack-stylish');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: WebpackWatchedGlobEntries.getEntries(
    [
      path.resolve(__dirname, 'src/**/*.md'),
    ],
  ),
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