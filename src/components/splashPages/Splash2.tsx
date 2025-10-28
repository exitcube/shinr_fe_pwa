import Image from "next/image";
import React from "react";
export const Splash2: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-16 md:min-h-[700px]">
      {/* Illustration Section */}
      <div className="relative w-full h-full flex justify-center items-center my-10 max-h-10/12">
        <Image
          src="/assets/illustations/calendar-illustration.png"
          alt="Car Illustration"
          width={299}
          height={186}
          className="sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto w-auto z-10"
        />
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col items-center justify-center px-5 font-poppins w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Book in Seconds
        </h1>
        <p className="text-xs text-[#606060] leading-relaxed mb-4  max-w-xl text-center">
          Select your vehicle, choose your service, and pick your time slot -
          all in under 30 seconds. Our smart booking system learns your
          preferences and suggests optimal wash times based on weather and your
          schedule. Watch your service provider arrive in real-time with GPS
          tracking.
        </p>
      </div>
    </div>
  );
};
