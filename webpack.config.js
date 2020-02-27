const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    devServer: {
        port: 9000,
        compress: true,
        // host: '0.0.0.1',
        historyApiFallback: true,
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     loader: ["style-loader","css-loader"]
            // },
            {
                test: /\.scss$/,
                loader: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: './index.html',
            template: './index.html'
        }),
    ]
}