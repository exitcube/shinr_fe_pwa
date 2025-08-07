import { BookingSection } from "@/components/homeArea/BookingSection";
import { EarningsCard } from "@/components/homeArea/EarningsCard";
import { MainBanner } from "@/components/homeArea/MainBanner";
import { ProductsSection } from "@/components/homeArea/ProductsSection";
import { ServiceSection } from "@/components/homeArea/ServiceSection";
import { ShineSection } from "@/components/homeArea/ShineSection";
import { VendorsSection } from "@/components/homeArea/VendorsSection";
import { FadeInSection } from "@/utils/FadeInSection";
import React from "react";

export default function ShinrApp() {
  return (
    <div className="max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar pb-30 pt-5">
      {/* Main Banner */}
      <FadeInSection>
        <MainBanner />
      </FadeInSection>

      {/*Earnings Card*/}
      <FadeInSection>
        <EarningsCard />
      </FadeInSection>

      {/* Service Section */}
      <FadeInSection>
        <ServiceSection />
      </FadeInSection>

      {/*Booking Section*/}
      <FadeInSection>
        <BookingSection />
      </FadeInSection>

      {/* Products Section */}
      <FadeInSection>
        <ProductsSection />
      </FadeInSection>

      {/* Vendors Section */}
      <FadeInSection>
        <VendorsSection />
      </FadeInSection>

      {/* Why Shine Section */}
      <FadeInSection>
        <ShineSection />
      </FadeInSection>
    </div>
  );
}
