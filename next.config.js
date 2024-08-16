// @ts-nocheck
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    dynamicImport: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
