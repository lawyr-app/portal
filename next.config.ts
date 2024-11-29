import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "banner2.cleanpng.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
