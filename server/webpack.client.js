const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {

    entry: './src/client/client.js',
    output: {
        filename: 'bandle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);