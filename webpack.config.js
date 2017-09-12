const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),
        library: 'foo',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('index.css')
    ],

    // externals: {
    //     react: 'React'
    // }
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom'
        }
    }
}
