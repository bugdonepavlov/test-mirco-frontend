'use strict';

const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  options: {
    buildType: 'spa',
  },

  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    const url = opts.env.dev ? process.env.FEDERATED_URL_DEV : process.env.FEDERATED_URL;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'home',
        filename: 'remoteEntry.js',
        remotes: {
          generic: `generic@${url}remoteEntry.js`,
        },
        exposes: {
          './RemoteApp': './src/App',
        },
        shared: [
          {
            ...deps,
            react: {
              // eager: true,
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              // eager: true,
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
        ],
      }),
    );

    return config;
  },
};
