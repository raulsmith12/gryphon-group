import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures proper asset paths in static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lp-cms-production.imgix.net',
      },
    ],
  },
};

export default nextConfig;
