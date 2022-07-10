/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co/"],
    loader: "akamai",
    path: "",
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = nextConfig;
