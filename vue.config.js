module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/colors.scss";',
      },
    },
  },
  pwa: {
    name: 'Flash Kards',
    themeColor: '#1e88e5',
    msTileColor: '#1e88e5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestOptions: {
      background_color: '#fff',
    },
  },
};
