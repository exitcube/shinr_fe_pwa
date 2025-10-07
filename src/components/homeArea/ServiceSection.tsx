"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const serviceCategories = [
  {
    title: "Basic Wash",
    imageUrl: "/assets/images/basic_wash.svg",
    altText: "Person washing a car",
  },
  {
    title: "Mechanic",
    imageUrl: "/assets/images/mechanic.svg",
    altText: "Wrench tool",
  },
  {
    title: "Interior Sanitization",
    imageUrl: "/assets/images/interior_sanitization.svg",
    altText: "Clean car interior seats",
  },
  {
    title: "Puncture / Tyre Service",
    imageUrl: "/assets/images/tyre_service.svg",
    altText: "Stack of car tyres",
  },
  {
    title: "Ceramic Coating",
    imageUrl: "/assets/images/ceramic_coating.svg",
    altText: "Spray gun for ceramic coating",
  },
  {
    title: "24/7 Assistance",
    imageUrl: "/assets/images/assistance.svg",
    altText: "Traffic cone for assistance",
  },
];
interface ServiceSectionProps {
  showHeading?: boolean;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  showHeading = true,
}) => {
  return (
    <>
      <div className={` ${showHeading ? "px-4" : "px-0"}  mb-4 font-poppins`}>
        {showHeading && (
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-[#101010] ">Service</h3>
            <span className="text-xs text-[#128C7E] font-medium flex items-center">
              View All
              <ArrowRight size={20} />
            </span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 md:gap-4">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg flex flex-col justify-between border border-[#EDEDED]"
            >
              <h3 className="w-full text-left text-sm font-normal text-gray-800 p-2">
                {service.title}
              </h3>
              <div className="w-full overflow-hidden rounded-lg flex justify-end">
                <Image
                  className="object-contain w-full max-w-24 max-h-[83px]"
                  src={service.imageUrl}
                  alt={service.imageUrl}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
