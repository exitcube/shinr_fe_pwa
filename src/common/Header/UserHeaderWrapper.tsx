"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { HomeHeader } from "./HomeHeader";

const HIDDEN_PATHS = ["/service-booking"];

const UserHeaderWrapper: React.FC = () => {
  const pathname = usePathname();

  const hideHeader = HIDDEN_PATHS.includes(pathname);

  if (hideHeader) return null;

  return <HomeHeader />;
};

export default UserHeaderWrapper;
