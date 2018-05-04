const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            //    Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer,
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: [
                        "css-loader",
                        {
                            loader: "stylus-loader",
                            options: {
                                use: [
                                    require("nib"),
                                    require("rupture")
                                ],
                                import: [
                                    "~nib/lib/nib/index.styl",
                                    "~rupture/rupture/index.styl"
                                ]
                            }
                        }]
                })
            }
        ]
    },
    plugins: [
        //Aqui van los plugins
        new ExtractTextPlugin("css/[name].css")
    ]
}