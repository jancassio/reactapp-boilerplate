const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// target will be defined by npm script action: start or build.
const TARGET = process.env.npm_lifecycle_event;

// Common app paths
const PATHS = {
  app: path.join( __dirname, 'app' ),
  assets: {
    // dir for assets here
  },

  build: path.join( __dirname, 'build' )
};

// Common configuration for development or production
var common = {
  entry: PATHS.app,

  output: {
    path: PATHS.build,
    // this bracket stuff is a webpack feature, webpack will replace [name]
    // with the respective name of the file at source side.
    filename: '[name].js'
  },

  resolve: {
    root: PATHS.app,
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        include: PATHS.app
      }

      // I'll put more loaders here later
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.template.html'
    })
  ]
};

if ( !TARGET || TARGET == 'start' ) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
