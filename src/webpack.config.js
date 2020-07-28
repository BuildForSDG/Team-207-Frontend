const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/maint.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts.loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use:  [
                    'to-string-loader', 'css-loader',
                ],
            }
        ]
    },
    devServer: { writeToDisk: true },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        webpackConfig.plugins = [ HtmlWebpackPlugin, ]
    ]
}