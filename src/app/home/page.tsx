import { BookingSection } from "@/components/BookingSection";
import { EarningsCard } from "@/components/EarningsCard";
import { MainBanner } from "@/components/MainBanner";
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
      <MainBanner />

      {/*Earnings Card*/}
      <EarningsCard />

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
