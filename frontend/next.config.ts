import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3030"],
    },
  }
};

export default nextConfig;
