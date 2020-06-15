const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
