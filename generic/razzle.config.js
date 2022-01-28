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
        name: 'generic',
        filename: 'remoteEntry.js',
        remotes: {
          home: `home@${url}remoteEntry.js`,
        },
        exposes: {
          './commonTypes': './src/types/common.ts',
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
