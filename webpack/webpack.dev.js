var path = require('path');
var webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-source-map',
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        }
    },
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        './src/index.js'
        ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(path.normalize(__dirname + '/..'), 'public'),
        publicPath: '/'
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: path.resolve(path.normalize(__dirname + '/..'), 'public'),
        port: 9000,
        disableHostCheck: true
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(path.normalize(__dirname + '/..'), 'public/index.html'),
            inject: true
        }),
        new webpackBundleAnalyzer()
  ],
};