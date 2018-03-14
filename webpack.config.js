var htmlPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var SRC = path.resolve(__dirname, 'src');
var OUT = path.resolve(__dirname, 'build');

var html = new htmlPlugin({
    hash: true,
    filename: '../index.html',
    template: 'src/index.html'
});

var config = {
    entry: SRC + '/app/index.js',
    output: {
        path: OUT + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            { test: /\.js?/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        html
    ],
    devServer: {
        contentBase: './build'
    }
};

module.exports = config;