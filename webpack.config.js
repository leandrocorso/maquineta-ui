import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"), // Ajusta o caminho de saída
    filename: "index.js", // Nome do arquivo de saída
    clean: true, // Limpa a pasta dist antes do build
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/, // Processa arquivos SVG
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]", // Salva SVGs na pasta assets
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Extensões reconhecidas
  },
  mode: "production", // Define o modo de build
};
