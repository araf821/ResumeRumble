/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },
  images: {
    domains: ["img.clerk.com"],
  },
};

module.exports = nextConfig;
