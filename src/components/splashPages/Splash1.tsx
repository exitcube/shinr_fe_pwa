import Image from "next/image";
import React from "react";

export const Splash1: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-16 md:min-h-[800px]">
      <div className="relative w-full h-full flex justify-center items-center max-h-10/12">
        <div className="flex w-full justify-center items-center ">
          <Image
            src="/assets/illustations/car.png"
            alt="Car Illustration"
            width={300}
            height={200}
            className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 z-10"
          />
        </div>
        <div className="absolute left-8 md:left-48 z-10 -top-4 md:top-44">
          <Image
            src="/assets/illustations/car-spark.png"
            alt="spark"
            width={133}
            height={93}
            className="rotate-[157deg] w-32 md:w-3/2"
          />
        </div>
        <div className="absolute right-24 md:right-64 top-12 md:top-64 scale-x-[-1]">
          <Image
            src="/assets/illustations/car-wash.png"
            alt="spark"
            width={66}
            height={66}
            className="rotate-[42deg] w-16 md:w-3/4"
          />
        </div>
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col items-center justify-center px-5 font-poppins w-full ">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Your Car Deserves Better
        </h1>
        <p className="text-xs text-[#606060] leading-relaxed mb-4 max-w-xl text-center">
          Skip the long queues and confusing price options. We&apos;ve connected
          you with our trusted book specialists who bring premium car care to
          you. Now you can easily get a quotation wherever in your block.
          Compare and see what&apos;s new. We verify your vehicle&apos;s quotes
          and make it transparent.
        </p>
      </div>
    </div>
  );
};
