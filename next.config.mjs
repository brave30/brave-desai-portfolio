/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for problematic pages
  experimental: {
    esmExternals: false,
  },
  // Add rewrites to serve static HTML for LinkedIn
  async rewrites() {
    return [
      {
        source: '/linkedin-preview',
        destination: '/index.html',
      },
    ];
  },
};

export default nextConfig;
