const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV == 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,

  entry: './src/js/controller.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  /* add filename to mini-css-extract-plugin below to avoid caching in production mode. 
    If used in dev mode hot module not works! Add this when uploading site to the live server.
    {
      filename: "main.[contenthash].css",
    }
  */

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // Use only if necessary because map increases file size (Don't upload to production)
  // devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
