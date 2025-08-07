import Image from "next/image";
import React from "react";

export const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-2 bg-gray-50 border-b border-gray-200 font-sans">
      <div className="flex items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center">
        {/* Location Display */}
        <div className="flex items-center bg-white rounded-full px-2 py-2 shadow-sm border border-gray-200 max-w-[150px] sm:max-w-xs md:max-w-md overflow-hidden">
          <Image
            src="/assets/icons/location.svg"
            alt="icon"
            width={12}
            height={12}
            className="mr-1"
          />
          <span className="text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
            1/342, BTM 2<sup>nd</sup> Stag...
          </span>
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
