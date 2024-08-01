const path = require('path');

module.exports = {
    stats: "errors-warnings",
    devtool: "inline-source-map",
    entry: {
        main: "./main.scss"
    },
    output: {
        path: path.resolve(__dirname, './build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: "sass-loader",
                        options: {
                             // api: "legacy",
                        },
                    },
                ]
            }
        ]
    }
};
