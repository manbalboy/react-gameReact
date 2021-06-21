const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval', //hidden-source-map

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
                            targets : {
                                browsers : ['> 1% in KR'], //browserslist
                            },
                            debug : true,
                        }],
                        '@babel/preset-react'],
                    // plugins:['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({debug : true}),
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
}