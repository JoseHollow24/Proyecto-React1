var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "/assets"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        loader: "sass-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-export-extensions']
        },
        loader: "babel-loader"
      }
    ]
  }
};
