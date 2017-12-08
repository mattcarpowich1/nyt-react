const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/app/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/public/images/[name].[ext]"
      }
    ]
  }
}

module.exports = config;