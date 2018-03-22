var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

var SRC = path.resolve(__dirname, 'src');
var OUT = path.resolve(__dirname, 'build');

var html = new htmlPlugin({
    hash: true,
    template: 'src/index.html',
    favicon: 'src/favicon.ico'
});

var config = {
    entry: SRC + '/index.js',
    output: {
        path: OUT,
        filename: 'app/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js?/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss?/, exclude: /node_modules/, loader: ['style-loader','css-loader','sass-loader'] },
            { test: /\.(png|svg)$/, use: [{ loader: 'file-loader', options: { name: 'assets/[name]-[hash].[ext]'}}] }
        ]
    },
    plugins: [
        html
    ]
};

module.exports = config;