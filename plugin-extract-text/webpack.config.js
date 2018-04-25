const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'build.js'
    },
    module: {
        rules: [
            //    Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer,
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        //Aqui van los plugins
        new ExtractTextPlugin("css/[name].css")
    ]
}