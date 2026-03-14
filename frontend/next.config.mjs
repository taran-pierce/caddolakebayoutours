/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // TODO replace with directly in code:
//   process.env.CONTENTFUL_ACCESS_TOKEN
// process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
// process.env.CONTENTFUL_ENVIRONMENT
  // publicRuntimeConfig: {
  //   CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  //   CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  //   CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  // },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/utils/loader.js',
  },
  experimental: {
    esmExternals: true
  },
  // swcMinify: true,
};

export default withAnalyzer(nextConfig);
