import Image from "next/image";
import React from "react";

export const Splash2: React.FC = () => {
  return (
    <>
      {/* Illustration Section */}
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/assets/illustations/calender_illustration.svg"
          alt="Car Illustration"
          width={300}
          height={200}
          className="w-72 h-auto"
        />
      </div>

      {/* Main Text Content */}
      <div className="text-center">
        <h1 className="text-[24px] font-bold text-gray-800 mb-3">
          Book in Seconds
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
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
