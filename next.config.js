/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
};

module.exports = nextConfig;
