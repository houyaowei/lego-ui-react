const path = require("path");
const webpack = require("webpack");

// 路径别名
const alias = {};

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "postcss-loader",
            options: { javascriptEnabled: true, sourceMap: false },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
      {
        test: /\.(txt|md)$/,
        use: "raw-loader",
      },
    ],
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/),
  ],

  // 解析模块
  resolve: {
    alias,
    // 自动解析确定的扩展
    extensions: [".js", ".jsx"],
  },
};
