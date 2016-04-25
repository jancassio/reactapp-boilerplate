const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const pkg = require('./package.json');

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

if ( TARGET === "build" || TARGET === "stats" ){
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies).filter(function (dependency){
        // if needed to filter some dependency.
        return dependency
      })
    },

    output: {
      path: PATHS.build,
      filename: '[name].[hash].js',
      chuckFilename: '[chuckhash].js'
    },

    plugins: [
      new Clean([PATHS.build]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ]
  })
}
