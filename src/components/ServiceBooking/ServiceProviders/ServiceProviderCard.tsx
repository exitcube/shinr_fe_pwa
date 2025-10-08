import { ServiceProvider } from "@/types/wallet";

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

export default function ServiceProviderCard({
  provider,
}: ServiceProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        {/* Service Provider Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {provider.name}
        </h3>

        {/* Distance */}
        <div className="flex items-center text-gray-600 mb-1">
          <svg
            className="h-4 w-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">{provider.distance}</span>
        </div>

        {/* Years in Business */}
        <div className="flex items-center text-gray-600 mb-4">
          <svg
            className="h-4 w-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">{provider.yearsInBusiness}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {provider.price}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
