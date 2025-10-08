declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    fallbacks?: Record<string, string>;
    // You can add more options if needed
  }

  function withPWA(nextConfig: NextConfig, pwaOptions?: PWAOptions): NextConfig;
  export default function withPWA(
    options: PWAOptions
  ): (nextConfig: NextConfig) => NextConfig;
}
