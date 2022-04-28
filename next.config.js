/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /hammerjs/,
      loader: "bundle-loader",
      options: {
        lazy: true,
      },
    });

    return config;
  },
};

module.exports = nextConfig;
