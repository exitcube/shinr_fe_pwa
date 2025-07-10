import Image from "next/image";
import React from "react";
import Car from "../../assets/illustations/car_illustration.svg";

function splashPage1() {
  return (
    <>
      {/* Background Section */}
      {/* <div className="bg-[url('/illustations/illustration_background.svg')] bg-cover bg-center h-[400px] w-full"></div> */}
      {/* Illustration Section */}
      <div className="relative w-full flex justify-center items-center">
        <Image src={Car} alt="Car Illustration" className="w-72 h-auto" />
      </div>

      {/* Main Text Content */}
      <div className="text-center">
        <h1 className="text-[24px] font-semibold text-gray-800 mb-3">
          Your Car Deserves Better
        </h1>
        <p className="text-[14px] font-normal text-gray-600 leading-relaxed mb-4">
          Skip the long queues and confusing price options. We've connected you
          with our trusted book specialists who bring premium car care to you.
          Now you can easily get a quotation wherever in your block. Compare and
          see what's new. We verify your vehicle's quotes and make it
          transparent.
        </p>
      </div>
    </>
  );
}

export default splashPage1;
