// next.config.mjs
/** @type {import('next').NextConfig} */
const nextconfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'static.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }
    ]
  }
};
export default nextConfig;
rewrites, redirects, basePath, i18n

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive provisoirement tout rewrite ou redirect
  // pour éliminer les causes de 404/500
  async rewrites() {
    return [];
  },
  async redirects() {
    return [];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
