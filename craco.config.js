const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
/*               '@body-background': 'transparent',
              '@primary-color': 'blue',
              '@btn-primary-color': 'red',
              '@component-background': '#98f',
              '@btn-primary-bg': '#23a',
              '@text-color': 'fade(@black, 85%)',
              '@text-color-secondary': 'fade(@black, 45%)',
              '@text-color-inverse': '@white', */
/*               '@layout-header-background': '#112D4E', */
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
