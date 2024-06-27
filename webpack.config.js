const path = require("path");
const liveserver = require("live-server");

const dev = process.env.NODE_ENV == "development";
if (dev) {
  liveserver.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  entry: "./src/index.tsx",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist-webpack"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
