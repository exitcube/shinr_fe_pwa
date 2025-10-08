"use client";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { HomeHeader } from "./HomeHeader";

export const HeaderWrapper = () => {
  const pathname = usePathname();

  const isLoginOrRoot = pathname === "/login" || pathname === "/";
  const isService = pathname === "/service-booking";

  return isLoginOrRoot ? <Header /> : isService ? <></> : <HomeHeader />;
};
