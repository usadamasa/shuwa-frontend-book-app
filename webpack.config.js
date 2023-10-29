const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/app.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ]
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 3000,
    historyApiFallback: true,
  },
};
