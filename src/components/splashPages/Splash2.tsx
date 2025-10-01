import Image from "next/image";
import React from "react";

export const Splash2: React.FC = () => {
  return (
    <>
      {/* Illustration Section */}
      <div className="relative w-full h-full flex justify-center items-center max-h-3/4 px-8">
        <Image
          src="/assets/illustations/calendar-illustration.png"
          alt="Car Illustration"
          width={299}
          height={186}
          className="w-full"
        />
      </div>

      {/* Main Text Content */}
      <div className="text-center px-5 max-w-xl font-poppins">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Book in Seconds
        </h1>
        <p className="text-xs text-[#606060] leading-relaxed mb-4">
          Select your vehicle, choose your service, and pick your time slot -
          all in under 30 seconds. Our smart booking system learns your
          preferences and suggests optimal wash times based on weather and your
          schedule. Watch your service provider arrive in real-time with GPS
          tracking.
        </p>
      </div>
    </>
  );
};
