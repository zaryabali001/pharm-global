import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pharm-global',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
