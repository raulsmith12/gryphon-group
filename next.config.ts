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
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'carverfinancialservices.com',
      },
      {
        protocol: 'https',
        hostname: 'galacticdigitalstudios.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wynnchurch.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
};

export default nextConfig;
