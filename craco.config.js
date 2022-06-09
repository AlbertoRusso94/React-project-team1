const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              /* '@body-background': '#112D4E', */
              '@primary-color': '#27496D',
              '@btn-primary-color': 'black',
              '@component-background': '#F9F7F7',
              '@btn-primary-bg': '#ff4d4f',
              '@text-color': 'fade(@black, 85%)',
              '@text-color-secondary': 'fade(@black, 45%)',
              '@text-color-inverse': '@white',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
