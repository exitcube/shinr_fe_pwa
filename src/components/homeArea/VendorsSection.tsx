"use client";
import Image from "next/image";
import React from "react";

const vendors = [
  {
    id: 1,
    name: "Kumar",
    service: "Cleaning Service",
    rating: 3.9,
    imageUrl: "/assets/images/user_picture.png",
    altText: "Vendor Kumar",
  },
  {
    id: 2,
    name: "Priya",
    service: "Mechanic",
    rating: 4.5,
    imageUrl: "/assets/images/user_picture.png",
    altText: "Vendor Priya",
  },
  {
    id: 3,
    name: "Ahmed",
    service: "Tyre Service",
    rating: 4.2,
    imageUrl: "/assets/images/user_picture.png",
    altText: "Vendor Ahmed",
  },
  {
    id: 4,
    name: "Sarah",
    service: "Detailing",
    rating: 4.8,
    imageUrl: "/assets/images/user_picture.png",
    altText: "Vendor Sarah",
  },
  {
    id: 5,
    name: "David",
    service: "Assistance",
    rating: 3.5,
    imageUrl: "/assets/images/user_picture.png",
    altText: "Vendor David",
  },
];

export const VendorsSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-4 md:py-4 font-sans">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#101010]">Vendors</h3>
          <a
            href="#"
            className="text-sm text-teal-600 hover:text-teal-800 font-semibold flex items-center group"
          >
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
          </a>
        </div>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-4">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="flex-none w-64 bg-white rounded-xl shadow-sm border border-gray-200
                         flex items-center p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                {/* Vendor Image */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden mr-4 border border-gray-300">
                  <Image
                    src={vendor.imageUrl}
                    alt={vendor.altText}
                    width={34}
                    height={34}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Vendor Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {vendor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{vendor.service}</p>
                  <div className="flex items-center">
                    {/* Star Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.729c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      {vendor.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
