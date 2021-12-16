module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + 'public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}