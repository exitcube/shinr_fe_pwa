"use client";
import React from "react";
import ServiceProviders from "./ServiceProviders/ServiceProviders";

interface ServiceContentProps {
  serviceType: string;
  onBack: () => void;
}

const serviceContentData: Record<
  string,
  {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
  }
> = {
  "Basic Wash": {
    title: "Basic Wash Service",
    description: "Complete exterior wash for your vehicle",
    features: [
      "Exterior body wash",
      "Wheel cleaning",
      "Window cleaning",
      "Drying and polishing",
    ],
    imageUrl: "/assets/images/basic_wash.svg",
  },
  Mechanic: {
    title: "Mechanic Service",
    description: "Professional mechanical repairs and maintenance",
    features: [
      "Engine diagnostics",
      "Oil change",
      "Brake service",
      "General repairs",
    ],
    imageUrl: "/assets/images/mechanic.svg",
  },
  "Interior Sanitization": {
    title: "Interior Sanitization",
    description: "Deep cleaning and sanitization of your car interior",
    features: [
      "Vacuum cleaning",
      "Seat shampooing",
      "Dashboard cleaning",
      "Air freshening",
    ],
    imageUrl: "/assets/images/interior_sanitization.svg",
  },
  "Puncture / Tyre Service": {
    title: "Puncture / Tyre Service",
    description: "Complete tyre care and puncture repair",
    features: [
      "Puncture repair",
      "Tyre replacement",
      "Wheel balancing",
      "Tyre pressure check",
    ],
    imageUrl: "/assets/images/tyre_service.svg",
  },
  "Ceramic Coating": {
    title: "Ceramic Coating",
    description: "Premium paint protection for your vehicle",
    features: [
      "9H hardness coating",
      "UV protection",
      "Hydrophobic layer",
      "Long-lasting shine",
    ],
    imageUrl: "/assets/images/ceramic_coating.svg",
  },
  "24/7 Assistance": {
    title: "24/7 Assistance",
    description: "Round-the-clock roadside assistance",
    features: [
      "Emergency towing",
      "Battery jump-start",
      "Fuel delivery",
      "Lockout service",
    ],
    imageUrl: "/assets/images/assistance.svg",
  },
};

const ServiceContent: React.FC<ServiceContentProps> = ({
  serviceType,
  onBack,
}) => {
  const content = serviceContentData[serviceType];
  console.log("🚀 ~ ServiceContent ~ content:", content);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col font-poppins">
      {/* Header */}
      {/* <div className="p-4">

        <ServiceProvidersHeader onBack={onBack} title="Service Providers" />
      </div> */}

      {/* Content - ServiceProviders */}
      <div className="flex-1 overflow-hidden">
        <ServiceProviders onBack={onBack} />
      </div>
    </div>
  );
};

export default ServiceContent;
