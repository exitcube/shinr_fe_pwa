"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    category: "Car Products",
    name: "MRF Tyre",
    price: "₹ 2000",
    imageUrl: "/assets/images/tyre_image.svg",
    altText: "Stack of MRF Tyres",
  },
  {
    id: 2,
    category: "Car Products",
    name: "MRF Tyre",
    price: "₹ 2000",
    imageUrl: "/assets/images/tyre_image.svg",
    altText: "Stack of MRF Tyres",
  },
  {
    id: 3,
    category: "Car Products",
    name: "MRF Tyre",
    price: "₹ 2000",
    imageUrl: "/assets/images/tyre_image.svg",
    altText: "Stack of MRF Tyres",
  },
  {
    id: 4,
    category: "Bike Products",
    name: "Apollo Tyre",
    price: "₹ 1500",
    imageUrl: "/assets/images/tyre_image.svg",
    altText: "Apollo Bike Tyre",
  },
  {
    id: 5,
    category: "Car Products",
    name: "Ceat Tyre",
    price: "₹ 1800",
    imageUrl: "/assets/images/tyre_image.svg",
    altText: "Ceat Car Tyre",
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-4 font-sans">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-[#101010]">
            Products
          </h3>
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

        {/* Products Grid */}
        <div className="pb-4  overflow-x-scroll no-scrollbar">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-48 md:w-48  rounded-xl 
                         flex flex-col cursor-pointer "
              >
                {/* Product Image Container */}
                <div className="w-full h-40 md:h-40 bg-white shadow-sm border hover:shadow-md transition-shadow duration-200 border-gray-200 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Image
                    className="max-w-full max-h-full object-contain"
                    src={product.imageUrl}
                    alt={product.altText}
                    width={68}
                    height={105}
                  />
                </div>

                {/* Product Details */}
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-lg md:text-xl font-bold text-teal-600">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
