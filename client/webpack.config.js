const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      // const: path.resolve(__dirname, "src/constants/"),
      modules: path.resolve(__dirname, "src/modules/"),
      schema: path.resolve(__dirname, "src/schema/"),
      selectors: path.resolve(__dirname, "src/selectors/"),
      router: path.resolve(__dirname, "src/router/"),
      pages: path.resolve(__dirname, "src/pages/"),
      Redux: path.resolve(__dirname, "src/Redux"),
      types: path.resolve(__dirname, "src/types/"),
      hooks: path.resolve(__dirname, "src/hooks"),
      saga: path.resolve(__dirname, "src/saga"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              sourceMap: true,
              modules: {
                localIdentName: "[local]--[hash:base64:4]",
              },
            },
          },
          { loader: "stylus-loader" },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    liveReload: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  plugins: [htmlPlugin],
};
