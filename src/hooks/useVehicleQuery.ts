import { VehiclesAPI } from "@/services/vehicles";
import { useQuery } from "@tanstack/react-query";

const vehicleService = new VehiclesAPI();

export const useBrandQuery = (page?: number, limit?: number) => {
  return useQuery({
    queryKey: ["vehicleBrands", page, limit],
    queryFn: () => vehicleService.getAllBrands(page, limit),
    staleTime: 60 * 60 * 1000, // 60 minutes
  });
};
