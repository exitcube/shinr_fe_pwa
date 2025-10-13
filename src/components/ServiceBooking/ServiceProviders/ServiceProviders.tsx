"use client";
import { useState } from "react";
import ServiceProviderCard from "@/components/ServiceBooking/ServiceProviders/ServiceProviderCard";
import ServiceProviderDetail from "@/components/ServiceBooking/ServiceProviders/ServiceProviderDetail";
import { ServiceProvider } from "@/types/wallet";
import { Search, SlidersHorizontal } from "lucide-react";
import ServiceProvidersHeader from "./ServiceProvidersHeader";
import Image from "next/image";
import FilterModal from "./FilterModal/FilterModal";

export default function ServiceProviders({ onBack }: { onBack: () => void }) {
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const serviceProviders: ServiceProvider[] = [
    {
      id: 1,
      name: "5k Car Care",
      distance: "2.5 km away",
      yearsInBusiness: "5+ years in business",
      price: "239",
      rating: 4.5,
      imageUrl: "/assets/images/car_image.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      services: [
        {
          id: 1,
          name: "Premium Detailing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore voluptate velit esse cillum dolore eu fugiat nulla pariatur, sit amet mollis.",
          price: "599"
        },
        {
          id: 2,
          name: "Premium Detailing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore voluptate velit esse cillum dolore eu fugiat nulla pariatur, sit amet mollis.",
          price: "599"
        },
        {
          id: 3,
          name: "Premium Detailing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore voluptate velit esse cillum dolore eu fugiat nulla pariatur, sit amet mollis.",
          price: "599"
        }
      ],
      products: [
        {
          id: 1,
          category: "Car Care Products",
          name: "Dashboard cleaner",
          price: "199",
          imageUrl: "/assets/images/cleaner.png"
        },
        {
          id: 2,
          category: "Car Care Products",
          name: "Dashboard cleaner",
          price: "199",
          imageUrl: "/assets/images/cleaner.png"
        },
        {
          id: 3,
          category: "Car Products",
          name: "MRF Tyre",
          price: "2000",
          imageUrl: "/assets/images/tyre_image.svg"
        },
        {
          id: 4,
          category: "Car Products",
          name: "MRF Tyre",
          price: "2000",
          imageUrl: "/assets/images/tyre_image.svg"
        },
        {
          id: 5,
          category: "Car Care Products",
          name: "Dashboard cleaner",
          price: "199",
          imageUrl: "/assets/images/cleaner.png"
        },
        {
          id: 6,
          category: "Car Care Products",
          name: "Dashboard cleaner",
          price: "199",
          imageUrl: "/assets/images/cleaner.png"
        },
        {
          id: 7,
          category: "Car Products",
          name: "MRF Tyre",
          price: "2000",
          imageUrl: "/assets/images/tyre_image.svg"
        },
        {
          id: 8,
          category: "Car Products",
          name: "MRF Tyre",
          price: "2000",
          imageUrl: "/assets/images/tyre_image.svg"
        }
      ],
      reviews: [
        {
          id: 1,
          userName: "Ramesh",
          rating: 4.5,
          serviceName: "Basic Wash",
          comment: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          date: "2 dyas ago"
        },
        {
          id: 2,
          userName: "Ramesh",
          rating: 4.5,
          serviceName: "Basic Wash",
          comment: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          date: "2 dyas ago"
        },
        {
          id: 3,
          userName: "Ramesh",
          rating: 4.5,
          serviceName: "Basic Wash",
          comment: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          date: "2 dyas ago"
        }
      ]
    },
    {
      id: 2,
      name: "Auto Shine Pro",
      distance: "3.2 km away",
      yearsInBusiness: "8+ years in business",
      price: "299",
      rating: 4.7,
      imageUrl: "/assets/images/car_image.png",
      description: "Professional car care services with experienced technicians and quality products.",
      services: [
        {
          id: 1,
          name: "Basic Wash",
          description: "Complete exterior wash with premium cleaning products.",
          price: "299"
        },
        {
          id: 2,
          name: "Interior Cleaning",
          description: "Deep interior cleaning including vacuum and dashboard polish.",
          price: "499"
        }
      ]
    },
    {
      id: 3,
      name: "Elite Car Spa",
      distance: "1.8 km away",
      yearsInBusiness: "10+ years in business",
      price: "349",
      rating: 4.8,
      imageUrl: "/assets/images/car_image.png",
      description: "Premium car spa services with state-of-the-art equipment and certified professionals.",
      services: [
        {
          id: 1,
          name: "Deluxe Wash",
          description: "Premium wash with wax coating and tire shine.",
          price: "349"
        },
        {
          id: 2,
          name: "Full Detailing",
          description: "Complete interior and exterior detailing service.",
          price: "899"
        }
      ]
    },
    {
      id: 4,
      name: "Quick Clean Auto",
      distance: "4.5 km away",
      yearsInBusiness: "3+ years in business",
      price: "199",
      rating: 4.3,
      imageUrl: "/assets/images/car_image.png",
      description: "Fast and affordable car cleaning services for busy professionals.",
      services: [
        {
          id: 1,
          name: "Express Wash",
          description: "Quick exterior wash and dry in 15 minutes.",
          price: "199"
        }
      ]
    },
  ];

  const handleProviderClick = (provider: ServiceProvider) => {
    setSelectedProvider(provider);
  };

  const handleBack = () => {
    setSelectedProvider(null);
  };

  // Show detail view if a provider is selected
  if (selectedProvider) {
    return (
      <div className="flex flex-col h-full">
        {/* Back Button Header */}

        <div className="flex-1 overflow-hidden">
          <ServiceProviderDetail provider={selectedProvider} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">
      <div className="p-4">

        <ServiceProvidersHeader onBack={onBack} title="Service Providers" />
      </div>
      {/* Service Providers List */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24">
        <div className="space-y-4">
          {serviceProviders.map((provider) => (
            <ServiceProviderCard
              key={provider.id}
              provider={provider}
              onClick={() => handleProviderClick(provider)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Search and Filter Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:border-transparent text-sm"
            />
          </div>

          {/* Filter Button */}
          <button 
            onClick={() => setShowFilterModal(true)}
            className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image
              src="/assets/icons/filter.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal 
        isOpen={showFilterModal} 
        onClose={() => setShowFilterModal(false)} 
      />
    </div>
  );
}
