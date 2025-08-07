"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header/Header";
import { HomeHeader } from "@/components/header/HomeHeader";

export const HeaderWrapper = () => {
  const pathname = usePathname();

  const isLoginOrRoot = pathname === "/" || pathname === "/login";

  return isLoginOrRoot ? <Header /> : <HomeHeader />;
};
