const jsConfig = {
  sassLoaderOptions: {
    includePaths: [
      '/node_modules/normalize-scss/sass/normalize'
    ]
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about/': { page: '/about' },
      '/contact/': { page: '/contact' },
      '/directions/': { page: '/directions' },
      '/things-to-do/': { page: '/things-to-do' },
      '/photo-gallery/': { page: '/photo-gallery' },
    }
  },
}

module.exports = jsConfig;
