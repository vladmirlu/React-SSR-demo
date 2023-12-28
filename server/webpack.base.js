
module.exports = {
    // tells to run babel on each .js file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0', //to handle async stuff
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};