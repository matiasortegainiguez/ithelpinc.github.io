"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

const path = require("path");
const buildConfig = require('@codification/cutwater-build-web').getConfig();
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

const webpackConfiguration = (env, options) => {
    const isProduction = options.mode === 'production';
    return {
        mode: isProduction ? 'production' : 'development',
        entry: {
            'main': path.join(__dirname, buildConfig.libFolder, 'index.js')
        },
        output: {
            publicPath: '/',
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js',
            path: path.join(__dirname, buildConfig.distFolder)
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                'styles': path.resolve(path.join(__dirname, buildConfig.libFolder), 'styles'),
                'images': path.resolve(path.join(__dirname, buildConfig.libFolder), 'images'),
            }
        },
        devServer: {
            https: true,
            port: 8080,
            compress: true,
            open: true,
            contentBase: path.join(__dirname, buildConfig.distFolder),
            historyApiFallback: true,
            proxy: {
                '/api/send': {
                    target: 'https://beta.ithelpinc.com',
                    changeOrigin: true,
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8000,
                            esModule: false,
                            name: "images/[name].[contenthash].[ext]",
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(path.resolve(__dirname, 'src'), 'index.html'),
                filename: 'index.html',
                minify: true
            }),
            new DynamicCdnWebpackPlugin({ env: (isProduction ? 'production' : 'development') }),
            new CopyPlugin([
                {
                    from: 'public',
                    to: path.join(__dirname, buildConfig.distFolder),
                }
            ]),
        ],
    };
};
module.exports = webpackConfiguration;