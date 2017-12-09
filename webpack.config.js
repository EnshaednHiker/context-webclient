const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const html = require('html-webpack-plugin');
const path = require('path');

module.exports = function (environment){
    environment = environment || 'local';
    return {
        entry: {
            main: path.join(__dirname,"index.js")
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].js"
        },
        node: {
            fs: "empty",
            dns: "empty",
            net: "empty",
            __dirname: true,
            __filename: true
        },
        devServer: {
            contentBase: path.resolve(__dirname),
            port: 3000
        },
        resolve: {
            alias: {
                "~":path.resolve(__dirname)
            }
        },
        module: {
            loaders: [
                { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.css$/, loader: 'style-loader!css-loader'},
                { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader', options: {name: 'assets/images/[name].[ext]'}},
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' , options: {name: 'assets/fonts/[name].[ext]'}},
                { test: /\.(eot|ttf|svg)$/, loader: 'file-loader', options: {name: 'assets/fonts/[name].[ext]'} }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new html({template:path.join(__dirname,"index.html")}),
            new dotenv({path:path.join(__dirname,'configs',`${environment}.env`)}),
        ]
    }
}