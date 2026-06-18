const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");
const pkjson = require('../package.json')

module.exports =  {
    client: new ModuleFederationPlugin({
        name: pkjson.delivery.scope,
        filename: "remoteEntry.js",
        remotes: {},
        exposes: pkjson.delivery.modules,
        shared: {
            ...deps,
            react: {
                singleton: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
            },
            "react-helmet-async": {
                singleton: true,
                requiredVersion: deps["react-helmet-async"],
            },
        },
    }),
    server: [
        new NodeFederationPlugin({
            name: pkjson.delivery.scope,
            filename: "remoteEntry.js",
            library: { type: "commonjs-module" },
            remotes: {},
            exposes: pkjson.delivery.modules,
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                "react-helmet-async": {
                    singleton: true,
                    requiredVersion: deps["react-helmet-async"],
                },
            },
        }),
        new StreamingTargetPlugin({
            name: pkjson.delivery.scope,
            library: { type: "commonjs-module" },
            remotes: {},
        }),
    ]
}
