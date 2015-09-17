module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200
  },
  output: {
    filename: 'client.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};