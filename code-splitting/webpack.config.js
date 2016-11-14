module.exports = function(env) {
  var config = {
    entry: './src/main.js',
    output: {
      path: './dist',
      filename: 'main.js',
      publicPath: '/dist/'
    },
    devtool: env.build === 'dev' ? 'eval' : 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: './src',
          loader: 'babel-loader',
          options: {
            presets: ["es2015"]
          }
        }
      ]
    }
  }

  return config
}
