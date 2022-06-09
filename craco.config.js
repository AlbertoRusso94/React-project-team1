const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#00ADB5',
              '@btn-primary-color': '#393E46',
              // '@component-background': '#98f',
              '@btn-primary-bg': '#00ADB5',
              '@tabs-card-active-color': '#00ADB5',
              '@tabs-ink-bar-color': '#00ADB5',
              '@tabs-highlight-color': '#00ADB5',
              '@tabs-hover-color': '#00ADB5',
              '@tabs-active-color': '#00ADB5',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
