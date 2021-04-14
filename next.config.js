const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.export = {
  assetPrefix: ghPages ? 'https://jeffagregado.github.io/one-page-app/' : '', // customize this value
}
