var path = require('path')

module.exports = {
  entry: {
    main: ['whatwg-fetch', path.resolve('src', 'main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.css$/,
        include: path.resolve('src'),
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }]
      }
    ]
  }
}
