var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

var { getIfUtils, removeEmpty } = require('webpack-config-utils')
var { ifProduction, ifNotProduction } = getIfUtils(process.env.NODE_ENV || 'development')

module.exports = {
  entry: {
    main: ['whatwg-fetch', path.resolve('src', 'main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  plugins: removeEmpty([
    ifProduction(new webpack.optimize.UglifyJsPlugin()),
    ifProduction(new ExtractTextPlugin('style.css')),
  ]),
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
        loader: ifProduction(ExtractTextPlugin.extract('css-loader')),
        use: ifNotProduction([
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ])
      }
    ]
  }
}
