const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { getAllCriticalFiles } = require("./critical-files-helper");
const pkjson = require('../package.json');

const { allCriticalScripts, allCriticalStylesheets } = getAllCriticalFiles(pkjson?.delivery);

const scriptCopyConfig = allCriticalScripts.map((scriptPath) => {
  const absolutePath = path.resolve(__dirname, "..", scriptPath);
  const fileName = path.basename(scriptPath);
  return {
    from: absolutePath,
    to: fileName
  };
});

const copyPatterns = [...scriptCopyConfig];

const plugins = [
  ...moduleFederationPlugin.server,
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: true,
  }),
];

if (copyPatterns.length > 0) {
  plugins.push(
    new CopyWebpackPlugin({
      patterns: copyPatterns,
    })
  );
}

module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs-module",
  },
  target: false,
  name: "server",
  plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: (module, chunks, cacheGroupKey) => {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight(item => item);
            return `${moduleFileName.replace(/\.[^/.]+$/, '')}`;
          },
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
});
