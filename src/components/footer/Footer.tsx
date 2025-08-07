import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {/* Bottom Navigation */}
      <div className="h-[10%] absolute bottom-0 bg-white rounded-t-lg flex justify-around items-center w-full z-9 shadow-2xs">
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full shadow-md rotate-170 z-8">
          <Image
            src="/assets/icons/footerPart.png"
            alt="icon"
            width={100}
            height={100}
          />
        </div>

        <button
          className="flex flex-col items-center text-gray-800 z-10 pt-2"
          onClick={() => router.push("/home")}
        >
          <Image
            src="/assets/icons/Home.svg"
            alt="icon"
            width={80}
            height={80}
          />
        </button>

        {/* Wallet Button */}
        <button
          className="flex flex-col items-center text-gray-400 z-10 pt-2"
          onClick={() => router.push("/wallet")}
        >
          <Image
            src="/assets/icons/Wallet.svg"
            alt="icon"
            width={80}
            height={80}
          />
        </button>

        {/* Bookings Button */}
        <button className="flex flex-col items- center -translate-y-5 z-10"
        onClick={() => router.push("/serviceBooking")}>
          <div className="bg-teal-500 p-4 rounded-full shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
            </svg>
          </div>
        </button>

        {/* Vehicle Button */}
        <button className="flex flex-col items-center text-gray-400 z-10 pt-2">
          <Image
            src="/assets/icons/Wheel.svg"
            alt="icon"
            width={80}
            height={80}
          />
        </button>

        {/* Profile Button */}
        <button className="flex flex-col items-center text-gray-400 z-10 pt-2">
          <Image
            src="/assets/icons/Profile.svg"
            alt="icon"
            width={80}
            height={80}
          />
        </button>
      </div>
    </>
  );
};
