const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/app.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.(j|t)sx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
};
