module.export = {
  basepath: '/one-page-app',
  assetPrefix: '/one-page-app',
}

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
})
