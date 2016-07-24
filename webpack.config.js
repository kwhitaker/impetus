var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [path.join(__dirname, './src')],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.js$/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: ['style', 'css']
    },
    {
      test: /\.(s?[ac]ss)$/,
      loaders: [
        'style?sourceMap',
        'css?sourceMap',
        'postcss?sourceMap',
        'sass?sourceMap&outputStyle=expanded'
      ]
    }]
  }
}
