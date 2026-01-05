import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.upbit.com",
      }
    ]
  }
};

export default nextConfig;
