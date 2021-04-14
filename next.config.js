const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.export = {
  basepath: '/one-page-app',
  assetPrefix: ghPages ? '/jeffagregado.github.io/' : '', // customize this value
}
