const webpack =　require("webpack");
module.exports = {
  entry: __dirname + '/../../src/js/init/index.js',
  output: {
      path: __dirname + '/../../src/js/app',
      filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '../../node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
