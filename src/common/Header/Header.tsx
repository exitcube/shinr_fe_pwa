// import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-6 w-full shrink-0">
      {" "}
      {/* Placeholder for SHINR Logo - Replace with actual image if available */}
      {/* <Image
        src="https://placehold.co/30x30/00FF00/FFFFFF?text=SR"
        alt="SHINR Logo"
        className="h-8 w-8 mr-2 rounded-full"
        width={32}
        height={32}
      /> */}
      <span className="text-xl font-bold text-gray-800">SHINR</span>
    </div>
  );
};
