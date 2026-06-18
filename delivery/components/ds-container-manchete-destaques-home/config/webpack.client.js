const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    publicPath: "auto",
  },
  plugins: [
    moduleFederationPlugin.client,
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
