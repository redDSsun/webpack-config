const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        //no need to create dist folder and no need webpack compiled, this application can also run.
        //otherwise create dist folder and create two file under it, one is bundle.js , the other is index.html.
        //index.html should declear src of the bundel.js and also need a root element.
        new HtmlWebpackPlugin({
            title: 'App',
            template: 'src/index.html'
        })
    ]
}