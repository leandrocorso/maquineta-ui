import path from "path";
import { fileURLToPath } from "url";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
    library: {
      name: "maquineta-ui", // Nome da biblioteca
      type: "umd", // Tipo de módulo (Universal Module Definition)
    },
    globalObject: "this", // Necessário para que funcione em ambientes como Node.js e browsers
  },
  // plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserWebpackPlugin()], // Garantindo que o Terser otimiza o bundle
    usedExports: false,
  },
  mode: "production",
};
