import Image from "next/image";
import React from "react";

const ServiceBookingDetails: React.FC = () => {
  return (
    <>
      <div className="pt-[24px]  font-poppins flex justify-between">
        <h1 className="text-[16px] font-semibold text-[#101010]">
          Service Details
        </h1>
        <div className=" flex items-center gap-1 ">
          <h1 className="text-[12px] font-medium">Edit</h1>
          <Image
            className="flex"
            src="/assets/icons/edit.svg"
            alt="icon"
            width={14}
            height={14}
          />
        </div>
      </div>
      <div className="pt-[6px] font-poppins flex gap-3">
        <div className="bg-white rounded-lg flex-col p-4 w-[20%] flex items-center justify-center">
          <div>
            <h6 className="text-[14px] font-normal text-[#878787]">Sat</h6>
          </div>
          <div className="mt-2">
            <h1 className="text-[14px] font-medium text-[#101010]">19</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg flex-col p-4 w-[500%] flex justify-center">
          <div>
            <h1 className="text-[16px] font-medium text-[#101010]">Sharuk</h1>
          </div>
          <div className="gap-0.5">
            <h1 className="text-[14px] font-normal text-[#878787]">
              +91 999 888 777
            </h1>
          </div>
          <div className="flex mt-[12px]">
            <Image
              src="/assets/icons/location_black.svg"
              alt="icon"
              width={18}
              height={18}
            />
            <h6 className="text-[14px] font-normal text-[#101010]">
              1/342,HSR Layout, Bangalore
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBookingDetails;
