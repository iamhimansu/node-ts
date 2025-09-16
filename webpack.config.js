import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        main: "./server.ts",
    },
    target: "node",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",          // main bundle
        chunkFilename: "[name].js",     // dynamic chunks
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            automaticNameDelimiter: "/",  // keeps folder structure
        },
    },
};
