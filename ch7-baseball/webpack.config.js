const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client.jsx']
    }, // 입력


    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1% in KR'], //browserslist
                            },
                            debug: true,
                        }],
                        '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel']
                }
            }
        ]
    },

    plugins: [new RefreshWebpackPlugin(),new webpack.LoaderOptionsPlugin({debug : true})],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력


    devServer: {
        publicPath: '/dist/',
        hot: true
    }
}