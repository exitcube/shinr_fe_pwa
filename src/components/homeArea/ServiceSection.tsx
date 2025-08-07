"use client";
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

export const ServiceSection: React.FC = () => {
  return (
    <>
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-[#101010] ">Service</h3>
          <span className="text-sm text-teal-600 hover:text-teal-800 font-semibold flex items-center group">
            View All
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </div>

        <div className="container bg-gray-50 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white h-[134px] w-[108px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                       flex flex-col justify-between items-center text-center overflow-hidden border border-gray-200"
              >
                <h3 className="w-full text-left text-lg md:text-[14px] font-normal text-gray-800 mb-4 px-1">
                  {service.title}
                </h3>
                <div className="w-full h-48 md:h-56 overflow-hidden rounded-lg mb-2">
                  <Image
                    className="w-full h-full rounded-lg"
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
      </div>
    </>
  );
};
