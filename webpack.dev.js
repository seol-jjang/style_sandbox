const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    publicPath: "/",
    index: "index.html",
    historyApiFallback: true,
    port: 9000
  }
});
