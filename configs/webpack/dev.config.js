const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "../../src/app.js"),
  output: {
    path: path.resolve(__dirname, "../../static"),
    filename: "app.js",
    publicPath: "/static/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, "src")]
      }
    ]
  }
}