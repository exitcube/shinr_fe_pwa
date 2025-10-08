import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // fallbacks: {
  //   document: "/offline.html", create a custom offline page if needed
  // },
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
