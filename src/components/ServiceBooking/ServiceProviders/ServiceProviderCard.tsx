import { ServiceProvider } from "@/types/wallet";
import { MapPin, Briefcase, Star } from "lucide-react";
import Image from "next/image";

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  onClick?: () => void;
}

export default function ServiceProviderCard({
  provider,
  onClick,
}: ServiceProviderCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
      <div className="flex gap-3 p-3">
        {/* Car Image */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={provider.imageUrl}
              alt={provider.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Rating */}
          <div className="flex items-start justify-between mb-1.5">
            <h3 className="text-base font-semibold text-[#101010]">
              {provider.name}
            </h3>
            <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-[#101010]">{provider.rating}</span>
            </div>
          </div>

          {/* Distance */}
          <div className="flex items-center text-[#128C7E] mb-1">
            <MapPin size={14} className="mr-1.5 flex-shrink-0" />
            <span className="text-xs">{provider.distance}</span>
          </div>

          {/* Years in Business */}
          <div className="flex items-center text-[#128C7E] mb-2">
            <Briefcase size={14} className="mr-1.5 flex-shrink-0" />
            <span className="text-xs">{provider.yearsInBusiness}</span>
          </div>

          {/* Price */}
          <div className="flex items-center">
            <span className="text-[#128C7E] font-bold text-base">
              ₹ {provider.price}
            </span>
            <span className="text-gray-400 text-xs ml-1">/Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
