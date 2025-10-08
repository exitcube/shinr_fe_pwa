import ServiceProviderCard from "@/components/ServiceBooking/ServiceProviders/ServiceProviderCard";
import { ServiceProvider } from "@/types/wallet";

export default function ServiceProviders() {
  const serviceProviders: ServiceProvider[] = [
    {
      id: 1,
      name: "5k Car Care",
      distance: "2.5 km away",
      yearsInBusiness: "5+ years in business",
      price: "239 / Service",
    },
    {
      id: 2,
      name: "5k Car Care",
      distance: "2.5 km away",
      yearsInBusiness: "5+ years in business",
      price: "239 / Service",
    },
    {
      id: 3,
      name: "5k Car Care",
      distance: "2.5 km away",
      yearsInBusiness: "5+ years in business",
      price: "239 / Service",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">
              Service Providers
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceProviders.map((provider) => (
            <ServiceProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </main>
    </div>
  );
}
