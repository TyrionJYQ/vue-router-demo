const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue-blog'
        }),
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin({
            open: false
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@components': path.resolve('./src/components'),
            '@views': path.resolve('./src/views'),
            '@js': path.resolve('./src/js'),
            '@router': path.resolve('./src/router'),
            '@config': path.resolve('./src/config'),
            '@api': path.resolve('./src/api')
        }
    },
    devServer: {
        contentBase: ('./dist'),
        // host:'192.168.1.105',
        port: '3000'
        
    },

}