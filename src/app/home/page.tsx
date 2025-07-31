import { BookingSection } from "@/components/BookingSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServiceSection } from "@/components/ServiceSection";
import { ShineSection } from "@/components/ShineSection";
import { VendorsSection } from "@/components/VendorsSection";
import Image from "next/image";
import React from "react";

export default function CarServiceApp() {
  return (
    <div className="max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar pb-30 pt-5">
      {/* Main Banner */}
      <div className="mx-4 mb-4 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-4 relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h2 className="text-white text-lg font-bold mb-1">
              Keep Your Car Spotless!
            </h2>
            <p className="text-white text-sm mb-3 leading-relaxed">
              Get basic cleaning at doorstep in flat rate and fast service. Book
              now to get a sparkling clean ride.
            </p>
            <button className="flex justify-center items-center bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              Book Now
              <svg
                className="w-6 h-6 ml-2"
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
            </button>
          </div>
          <div className="ml-4">
            <Image
              src="/assets/illustations/car_home.svg"
              alt="icon"
              width={120}
              height={80}
            />
          </div>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="mx-4 mb-4 bg-[#FFFFFF] rounded-lg p-3 flex items-center justify-between">
        <div className="flex flex-col ">
          <div className=" rounded flex items-center justify-center mr-3">
            <span className="text-[#128C7E] text-sm">
              Your Shinr Cash Balance
            </span>
          </div>
          <span className="text-[#083B35] font-semibold font-weight-600">
            ₹
            <span className="text-[#083B35] font-semibold font-weight-600">
              2000
            </span>
          </span>
        </div>
        <div className="rounded flex items-center justify-center mr-3">
          <Image
            src="/assets/illustations/wallet.svg"
            alt="icon"
            width={34}
            height={34}
          />
        </div>
      </div>

      {/* Service Section */}
      <ServiceSection />

      {/*Booking Section*/}
      <BookingSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Vendors Section */}
      <VendorsSection />

      {/* Why Shine Section */}
      <ShineSection />
    </div>
  );
}
