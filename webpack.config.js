var htmlPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var SRC = path.resolve(__dirname, 'src');
var OUT = path.resolve(__dirname, 'build');

var config = {
    entry: SRC + '/app/index.js',
    output: {
        path: OUT + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new htmlPlugin()
    ]
};

module.exports = config;