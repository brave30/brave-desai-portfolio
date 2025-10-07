/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation to avoid SSR issues
  output: 'standalone',
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;
