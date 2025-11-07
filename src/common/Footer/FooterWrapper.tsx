"use client";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

const HIDDEN_PATHS = ["/service-booking", "/add-address"];

export const FooterWrapper = () => {
  const pathname = usePathname();

  const hideFooter = HIDDEN_PATHS.includes(pathname);

  if (hideFooter) return null;

  return <Footer />;
};
