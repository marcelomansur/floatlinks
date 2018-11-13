const webpack = require('webpack');
const commonPath = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPath.outputPath,
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: commonPath.outputPath,
    compress: true
  }
};
