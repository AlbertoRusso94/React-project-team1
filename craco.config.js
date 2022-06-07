const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': 'red',
              // '@btn-primary-color': 'red',
              // '@component-background': '#98f',
              // '@btn-primary-bg': '#23a',
              // '@layout-header-background': '#f3766d',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
