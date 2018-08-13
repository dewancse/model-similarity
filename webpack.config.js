module.exports = {
    entry: "./src/js/index.js",
    // entry: "./src/example/client.js",
    // entry: "./src/example2/server.js",
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }
};