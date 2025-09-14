import type { NextConfig } from "next";
import createNextPWA from "next-pwa";

const withPWA = createNextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_ENABLE_PWA !== "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
