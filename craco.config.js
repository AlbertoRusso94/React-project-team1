const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              /* '@primary-color': '#00ADB5', */
              '@btn-primary-color': '#0F143D',
              // '@component-background': '#98f',
              /* '@btn-primary-bg': '#CC00FF',
              '@btn-secondary-bg': '#CC00FF', */
              '@tabs-card-active-color': '#CC00FF',
              '@tabs-ink-bar-color': '#CC00FF',
              '@tabs-highlight-color': '#CC00FF',
              '@tabs-hover-color': '#0F143D',
              '@tabs-active-color': '#CC00FF'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
