/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co/"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
