import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js route indicator in development
  devIndicators: false,
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
