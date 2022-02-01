const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteApp': './src/App',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
