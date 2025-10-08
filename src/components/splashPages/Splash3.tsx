import Image from "next/image";
import React from "react";

export const Splash3: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-16">
      {/* Illustration Section */}
      <div className="relative w-full flex items-center justify-center my-10 max-h-10/12">
        <div className="absolute -top-8 md:top-0 right-1 -rotate-[60deg] z-10">
          <Image
            src="/assets/illustations/tool-hand-right.png"
            alt="tool-hand-1"
            width={64}
            height={100}
            className="rotate-12 z-10"
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <Image
            src="/assets/illustations/repair-main.png"
            alt="repair Illustration"
            width={178}
            height={178}
            className="z-10"
          />
        </div>
        <div className="absolute -bottom-8 md:bottom-0 left-1 rotate-[60deg] z-10">
          <Image
            src="/assets/illustations/tool-hand-left.png"
            alt="Tool Hand 2"
            width={64}
            height={100}
            className="-rotate-12"
          />
        </div>
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col items-center justify-center px-5 font-poppins w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Drive Clean, Drive Smart
        </h1>
        <p className="text-xs text-[#606060] leading-relaxed mb-4 max-w-xl text-center">
          Every WashBee service—whether it’s eco car cleaning or smart car
          repairs—uses sustainable methods that save water, reduce waste, and
          extend vehicle life. Earn WB Cash with every booking and join
          thousands of conscious drivers making a difference, one service at a
          time.
        </p>
      </div>
    </div>
  );
};
