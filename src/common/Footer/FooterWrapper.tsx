"use client";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export const FooterWrapper = () => {
  const pathname = usePathname();

  const isLoginOrRoot = pathname === "/" || pathname === "/login";

  const isSplash = pathname.startsWith("/splash");
  if (isSplash) return null;

  return isLoginOrRoot ? <></> : <Footer />;
};
