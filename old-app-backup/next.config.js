/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about/': { page: '/about' },
      '/contact/': { page: '/contact' },
      '/directions/': { page: '/directions' },
      '/things-to-do/': { page: '/things-to-do' },
      '/photo-gallery/': { page: '/photo-gallery' },
    }
  },
  images: {
    // unoptimized: true,
    loader: 'cloudinary',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [ 'res.cloudinary.com'],
    path: `res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`,
  },
};

module.exports = nextConfig;
