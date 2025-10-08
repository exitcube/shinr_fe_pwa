"use client";
import BookingServices from "@/components/ServiceBooking/BookingServices";
import ServiceBookingDetails from "@/components/ServiceBooking/ServiceBookingDetails";
import ServiceBookingHeader from "@/components/ServiceBooking/ServiceBookingHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServiceBookingPageContent = () => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar p-4"
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/*Heading section  */}
      <ServiceBookingHeader />
      {/*Service details section  */}
      <ServiceBookingDetails />
      {/*Service Section*/}
      <BookingServices />
      {/*Service booking banner section */}
      <div className="pt-4">
        {/* <Image src="/assets/images/happy_customer_container.png" alt="image" width={500} height={40} /> */}
        <div className="bg-gradient-to-r from-[#136D35] to-[#25D366] p-2 rounded-full shadow-sm  flex items-center">
          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white mr-3 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                                clipRule="evenodd"
                            />
                        </svg> */}
          <Image
            className="flex"
            src="/assets/icons/Happy 1.svg"
            alt="icon"
            width={18}
            height={18}
          />
          <p className="text-white text-[12px] font-semibold mx-[4px]">
            200 + <span className="font-normal">happy customers this week</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceBookingPageContent;
