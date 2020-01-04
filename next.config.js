const withSass = require('@zeit/next-sass')

const jsConfig = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about/': { page: '/about' },
      '/contact/': { page: '/contact' },
      '/directions/': { page: '/directions' },
      '/things-to-do/': { page: '/things-to-do' },
      '/photo-gallery/': { page: '/photo-gallery' },
    }
  }
}

module.exports = withSass(jsConfig);