// import Image from "next/image";
import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-1 w-full shrink-0 p-4 z-1 h-[8%]">
      {" "}
      {/* Placeholder for SHINR Logo - Replace with actual image if available */}
      <Image
        src="/assets/logo/sr_logo_black.png"
        alt="icon"
        width={86}
        height={86}
        className="mr-1"
      />
      {/* <span className="text-xl font-bold text-gray-800">SHINR</span> */}
    </div>
  );
};
