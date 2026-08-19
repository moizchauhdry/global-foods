import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js route indicator in development
  devIndicators: false,
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
