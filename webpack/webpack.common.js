const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPath = require('./paths');

module.exports = {
  entry: commonPath.entryPath,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  serve: {
    content: commonPath.entryPath,
    dev: {
      publicPath: commonPath.outputPath
    },
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPath.templatePath
    })
  ]
};
