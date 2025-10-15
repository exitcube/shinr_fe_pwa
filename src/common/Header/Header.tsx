import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
  const path = usePathname();
  const isLoginPath = path.includes("login");
  return (
    <div
      className={`flex items-center ${
        isLoginPath ? "justify-start" : "justify-center"
      } gap-2 mt-5 w-full shrink-0 px-4`}
    >
      <Image
        src="/assets/icons/shinr-logo-black.png"
        alt="SHINR Logo"
        className="h-8 w-24 rounded-full"
        width={81}
        height={28}
      />
    </div>
  );
};
