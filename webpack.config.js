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
    filename: "[name].[chunkhash].js", // Usar [name].[chunkhash].js para nombres únicos
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /src/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          "style-loader",
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000, // Ejemplo: tamaño mínimo de un chunk separado
      // Puedes ajustar más configuraciones según sea necesario
    },
  },
};
