import Image from "next/image";
import React from "react";
import Repair from "../../assets/illustations/repair_illustration.svg";

function SplshPage2() {
  return (
    <>
      {/* Illustration Section */}
      <div className="relative w-full flex justify-center items-center">
        <Image src={Repair} alt="Car Illustration" className="w-full h-64" />
      </div>

      {/* Main Text Content */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Drive Clean, Drive Smart
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Every WashBee service—whether it’s eco car cleaning or smart car
          repairs—uses sustainable methods that save water, reduce waste, and
          extend vehicle life. Earn WB Cash with every booking and join
          thousands of conscious drivers making a difference, one service at a
          time.
        </p>
      </div>
    </>
  );
}

export default SplshPage2;
