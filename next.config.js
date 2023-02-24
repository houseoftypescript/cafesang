/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/cafesang' : undefined,
  assetPrefix: isProd ? '/cafesang/' : undefined,
  images: { unoptimized: true, domains: ['i-vnexpress.vnecdn.net'] },
};

module.exports = nextConfig;
