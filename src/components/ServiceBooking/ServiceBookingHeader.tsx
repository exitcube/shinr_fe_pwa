import Image from "next/image";
import React from "react";

const ServiceBookingHeader: React.FC = () => {
  return (
    <div className="bg-gray-100 font-poppins flex items-center relative h-10">
      <Image
        className="absolute left-0"
        src="/assets/icons/backButton.svg"
        alt="icon"
        width={40}
        height={40}
      />
      <h1 className="text-[16px] font-normal text-[#101010] mx-auto">
        Service Booking
      </h1>
    </div>
  );
};

export default ServiceBookingHeader;
