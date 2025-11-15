import { CustomerAddressService } from "@/services/CustomerAddress";
import { IAddressPayload } from "@/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addNewAddress"],
    mutationFn: (addressData: IAddressPayload) =>
      AddressService.addNewAddress(addressData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedAddresses"] });
    },
  });
};

export const useSavedAddressesQuery = () => {
  return useQuery({
    queryKey: ["savedAddresses"],
    queryFn: () => AddressService.getAllSavedAddresses(),
    staleTime: 60 * 60 * 1000,
  });
};
