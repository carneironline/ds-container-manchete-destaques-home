module.exports = {
    devtool: 'source-map',
    optimization: {
        moduleIds: 'named',
        chunkIds: 'named',
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx|mjs)$/,
                exclude: /node_modules[\/\\](?!react-helmet-async)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: false,
                            presets: [
                                ["@babel/preset-react", { runtime: "automatic" }],
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            chrome: "68",
                                            safari: "12"
                                        }
                                    }
                                ],
                                "@babel/preset-typescript",
                            ],
                            plugins: [
                                "@babel/plugin-transform-class-properties"
                            ]
                        },
                    },
                ],
            },
        ],
    }
}
