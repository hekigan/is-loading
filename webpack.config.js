const { resolve } = require('path');
const webpackMerge = require('webpack-merge');

function buildConfig (env) {
    return require('./config/webpack.config.' + env + '.js')({ env: env });
}

var base = function () {
    return {
        entry: [
            'babel-polyfill',
            './example/sample.js'
        ],
        output: {
            filename: './example/sample.bundle.js',
            path: resolve(__dirname, '.'),
            publicPath: '/'
        },
        context: resolve(__dirname, '.'),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        'babel-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css|\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};

module.exports = function (env) {
    return webpackMerge(base(), buildConfig(env));
};