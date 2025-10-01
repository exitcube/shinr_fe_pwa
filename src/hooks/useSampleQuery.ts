import { SampleAPIs } from "@/services/sampleServices";
import { useQuery } from "@tanstack/react-query";

const sampleApis = new SampleAPIs();

export const useSampleQuery = () => {
  const { data: sampleDataResponse, isLoading } = useQuery<
    { id: number; name: string }[] // Adjust type as per your API response
  >({
    queryKey: ["sampleData"],
    queryFn: () => sampleApis.getSampleData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  return { sampleDataResponse, isLoading };
};

// const {data: sampleDataResponse, isLoading} = useSampleQuery();    usage only in client components
