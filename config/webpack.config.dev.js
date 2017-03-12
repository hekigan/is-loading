const { resolve } = require('path');
const webpack = require('webpack');

module.exports = function (env) {
    return {
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server'
        ],

        devtool: 'cheap-module-eval-source-map', //inline-source-map

        devServer: {
            port: 3000,
            host: 'localhost',
            hot: true,
            contentBase: resolve(__dirname, '..'),
            publicPath: '/',
            stats: 'minimal'
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // enable HMR globally

            new webpack.NamedModulesPlugin()
            // prints more readable module names in the browser console on HMR updates
        ]
    };
};