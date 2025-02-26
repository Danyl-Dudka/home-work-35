import HtmlWebpackPlugin from "html-webpack-plugin";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production",
    entry: "./src/app.js",
    output : {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.[contenthash].html',
            template: "./src/index.html",
            inject: "body",
            scriptLoading: "defer",
        })
    ]
}