import { BookingSection } from "@/components/homeArea/BookingSection";
import { EarningsCard } from "@/components/homeArea/EarningsCard";
import { MainBanner } from "@/components/homeArea/MainBanner";
import { ProductsSection } from "@/components/homeArea/ProductsSection";
import { ServiceSection } from "@/components/homeArea/ServiceSection";
import { ShineSection } from "@/components/homeArea/ShineSection";
import { VendorsSection } from "@/components/homeArea/VendorsSection";
import React from "react";

export default function ShinrApp() {
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
