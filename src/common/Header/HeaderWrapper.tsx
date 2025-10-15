"use client";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { useEffect, useState } from "react";

const SHOW_HEADER_PATH = ["/", "/login"];

export const HeaderWrapper = () => {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(true);

  const showHeader = SHOW_HEADER_PATH.includes(pathname);

  useEffect(() => {
    if (pathname === "/") {
      setHideHeader(true);
      const timer = setTimeout(() => setHideHeader(false), 1500); // same as splash screen duration
      return () => clearTimeout(timer);
    } else {
      setHideHeader(false);
    }
  }, [pathname]);

  if (hideHeader) return null;

  return <>{showHeader && <Header />}</>;
};
