import { CustomerAddressService } from "@/services/CustomerAddress";
import { IAddressPayload } from "@/types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

const AddressService = new CustomerAddressService();

export const useReverseGeocode = (lat?: number | null, lng?: number | null) => {
  return useQuery({
    queryKey: ["reverseGeocode", lat, lng],
    queryFn: () => AddressService.reverseGeocode(lat!, lng!),
    enabled: !!lat && !!lng,
    staleTime: 30 * 60 * 1000,
  });
};

export const useAddNewAdrressMutation = () => {
  return useMutation({
    mutationKey: ["addNewAddress"],
    mutationFn: (addressData: IAddressPayload) =>
      AddressService.addNewAddress(addressData),
  });
};
