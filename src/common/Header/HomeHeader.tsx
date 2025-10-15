import Image from "next/image";
import React from "react";

export const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 font-poppins">
      <div className="flex items-center">
        <Image
          src="/assets/icons/shinr-logo-black.png"
          alt="SHINR Logo"
          className="h-8 w-24 rounded-full text-black"
          width={81}
          height={28}
        />
      </div>
      <div className="flex items-center">
        {/* Location Display */}
        <div className="flex items-center bg-white rounded-full px-2 py-2 shadow-sm border border-gray-200 max-w-[150px] sm:max-w-xs md:max-w-md overflow-hidden">
          <Image
            src="/assets/icons/cart.svg"
            alt="icon"
            width={24}
            height={24}
            className="mr-1"
          />
        </div>

        {/* Notification Bell */}
        <div className="w-10 h-10 ml-2 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
          <Image
            src="/assets/icons/Notification.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
