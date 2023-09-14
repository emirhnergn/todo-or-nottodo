/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  runtime: 'edge',
  images: {
    unoptimized: true,
    loader : "akamai",
    path: "/",
  },
}

module.exports = nextConfig
