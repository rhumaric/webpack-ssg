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
            name(assetPath) {
	      const assetName = path.basename(assetPath);
              const localeRegexp = /(.*)\.(.*?)\.(.*?)/;
              const nameParts = localeRegexp.exec(assetName);
              if(nameParts) {
                const locale = nameParts[2];
                const basename = nameParts[1];
                return `${locale}/[path]${basename}.html`;
              } else {
                return '[path][name].html'
              }
            }
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