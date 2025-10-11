"use client";
import React, { useState } from "react";
import { ServiceSection } from "../homeArea/ServiceSection";
import ServiceContent from "./ServiceContent";

const BookingServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleBack = () => {
    setSelectedService("");
  };

  return (
    <div className="pt-4">
      <ServiceSection 
        showHeading={false} 
        onServiceClick={handleServiceClick}
      />
      {selectedService && (
        <ServiceContent 
          serviceType={selectedService} 
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default BookingServices;
