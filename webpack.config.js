module.exports = {
  module: {
    rules: [{
      test: /.md$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].html'
          }
        },
        'markdown-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.md']
  }
}