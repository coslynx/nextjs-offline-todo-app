/ @type {import('next').NextConfig} /
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new (require('workbox-webpack-plugin'))({
        clientsClaim: true,
        skipWaiting: true,
      })
    );

    return config;
  },
};

module.exports = nextConfig;