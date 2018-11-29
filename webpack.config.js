// const webpack = require("webpack");
// module.exports = {
//   entry: "./src/index.js",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ["*", ".js", ".jsx"]
//   },
//   output: {
//     path: __dirname + "/dist",
//     publicPath: "/",
//     filename: "bundle.js"
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()],
//   devServer: {
//     contentBase: "./dist",
//     hot: true
//   }
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use:[
          "file-loader",
          {
            loader:"image-webpack-loader",
            options:{
              gifsicle:{
                interlanced:false
              },
              optipng:{
                optimizationLevel:7
              },
              pngquant:{
                quality:"65-90",
                speed:4
              },
              mozjpeg:{
                progressive:true,
                quality:65
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: __dirname + "/src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
