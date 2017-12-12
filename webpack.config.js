const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

module.exports = {
  entry: path.join(paths.JS, "index.js"),
  output: {
    path: paths.DIST,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: paths.SRC
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
