const appPackage = require('./package.json');
const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

console.log(`
  ENV: ${process.env.NODE_ENV}
`);

const isProduction = process.env.NODE_ENV === 'production';
const libraryName = 'br_poc';
const config = {
  // Tell webpack to start bundling our app at app/index.js
  entry : {
    main : './app.js'
  },
  // Output our app to the dist/ directory
  output : {
    // the output bundle
    filename : 'main.js',
    library : libraryName,
    libraryTarget : 'umd',
    path : path.resolve(__dirname, 'dist'),
    publicPath : '/',
    umdNamedDefine : true,
    hotUpdateChunkFilename : 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename : 'hot/[hash].hot-update.json'
  },
  devServer : {
    hot : true,
    // enable HMR on the server
    historyApiFallback : true,
    noInfo : false,
    contentBase : path.resolve(__dirname, 'dist'),
    // match the output path
    stats : 'errors-only',
    publicPath : '/'
  },

  context : path.resolve(__dirname, 'app'),
  // Emit source maps so we can debug our code in the browser
  devtool : 'cheap-module-source-map',
  // Tell webpack to run our source code through Babel
  module : {
    rules : [
      {
        test : /\.js$/,
        use : ['babel-loader'],
        exclude : /node_modules/
      },
      {
        test : /\.js$/,
        use : 'eslint-loader',
        exclude : /node_modules/
      },
      {
        test : /\.css|.scss$/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options : {
              modules : true,
              localIdentName : appPackage.config.cssModulePattern
            }
          },
          'sass-loader?sourceMap',
          'postcss-loader'
        ],
      }
    ],
  },
  plugins : [
    new CleanWebpackPlugin(['dist'], {
      root : __dirname,
      verbose : true,
      dry : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      //{ from: 'images', to: 'images' },
      { from : 'index.html' }

    ]),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(isProduction ? 'production' : process.env.NODE_ENV),
    }),
    new WriteFilePlugin({
      // Write only files that have ".css" extension.
      log : false,
      useHashIndex : true
    }),
  ],
};

if (isProduction) {
  config.devtool = 'source-map';
  config.plugins[1] = () => { };
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output : { comments : false }, sourceMap : true
  }));

}
else {
  config.entry.main = ['./app.js'];
  config.entry.main.unshift(
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server'
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
  );
}

module.exports = config;
