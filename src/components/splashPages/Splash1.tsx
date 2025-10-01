import Image from "next/image";
import React from "react";

export const Splash1: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-full flex justify-center items-center max-h-10/12">
        <div className="flex w-full justify-center items-center">
          <Image
            src="/assets/illustations/car.png"
            alt="Car Illustration"
            width={300}
            height={200}
            className="w-full z-10 pl-7"
          />
        </div>
        <div className="absolute left-8 z-10 top-8">
          <Image
            src="/assets/illustations/car-spark.png"
            alt="spark"
            width={133}
            height={93}
            className="rotate-[157deg]"
          />
        </div>
        <div className="absolute right-20 top-1/3 scale-x-[-1]">
          <Image
            src="/assets/illustations/car-wash.png"
            alt="spark"
            width={66}
            height={66}
            className="rotate-12"
          />
        </div>
      </div>

      {/* Main Text Content */}
      <div className="text-center px-5 max-w-xl font-poppins">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Your Car Deserves Better
        </h1>
        <p className="text-xs text-[#606060] leading-relaxed mb-4">
          Skip the long queues and confusing price options. We&apos;ve connected
          you with our trusted book specialists who bring premium car care to
          you. Now you can easily get a quotation wherever in your block.
          Compare and see what&apos;s new. We verify your vehicle&apos;s quotes
          and make it transparent.
        </p>
      </div>
    </>
  );
};
