import { CustomerAddressService } from "@/services/CustomerAddress";
import { useQuery } from "@tanstack/react-query";

const AddressService = new CustomerAddressService();

export const useReverseGeocode = (lat?: number | null, lng?: number | null) => {
  return useQuery({
    queryKey: ["reverseGeocode", lat, lng],
    queryFn: () => AddressService.reverseGeocode(lat!, lng!),
    enabled: !!lat && !!lng,
    staleTime: 30 * 60 * 1000,
  });
};
