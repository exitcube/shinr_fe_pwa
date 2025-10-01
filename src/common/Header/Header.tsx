import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 w-full shrink-0">
      <Image
        src="/assets/icons/shinr-logo-black.png"
        alt="SHINR Logo"
        className="h-7 w-20 rounded-full"
        width={81}
        height={28}
      />
    </div>
  );
};
