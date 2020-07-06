const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './main/static/main/bundles'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/js/react'),
      '~': path.resolve(__dirname, './client/js/react'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'client/assets', to: 'assets' }
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.scss/,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: './postcss.config.js', }, },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
