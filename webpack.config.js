
const path = require("path");
const hwp = require("html-webpack-plugin");

module.exports = {

    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname),
        chunkFilename: "[id].bundle.js",
        publicPath: "/",
        filename: "[name].js"
    },
    resolve: {
        alias: {
            "@components" : path.resolve(__dirname, "src", "components")
        },
        extensions: [ ".vue", ".js", ".json", ".scss", "*" ]
    },
    plugins: [
        new hwp({  // Also generate a test.html
            filename: 'index.html',
            template: 'static/index.html'
          })
    ],
    module: {
    rules: [
        {
            test: /\.vue$/,
            loader: "vue-loader",
        // options: vueConfig
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: "url-loader",
            options: {
                limit: 1000000,
                name: "[name].[ext]?[hash]"
            }
        }]}
}