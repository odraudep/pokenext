/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['assets.pokemon.com', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
