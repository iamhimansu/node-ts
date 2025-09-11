// webpack.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './server.ts',
    mode: 'development',
    target: 'node',
    experiments: {
        outputModule: true,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        // Add a resolve alias for .js imports to target .ts files
        alias: {
            './pages/*.js': './pages/*.ts',
            // Or a more general rule for all internal files
            './': path.resolve(__dirname, './'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
