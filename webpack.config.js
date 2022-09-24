const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// MODE = 'development' or 'production'
const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports = {
  // watch: true,
  mode: MODE,
  entry: {
    style: "./src/assets/style.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js"),
    // path: path.resolve(__dirname, 'www/public/assets/js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../assets/css/[name].css",
      chunkFilename: "../assets/css/[name].css",
    }),
  ],

  module: {
    rules: [
      // setting Sass
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [ require('autoprefixer')]
              }
            }
          },
          "postcss-loader",
          "sass-loader",
          "import-glob-loader",
        ],
      },
    ],
  },
};
