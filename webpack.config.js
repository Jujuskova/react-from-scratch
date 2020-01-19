const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
  },
  devServer: {
    contentBase: './',
    hot: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //exclude: /node_modules/,
        include: [path.resolve(__dirname, './src')],
        use: {
          loader: "babel-loader",
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },

}