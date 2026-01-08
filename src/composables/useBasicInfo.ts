import { useQuery } from "@tanstack/vue-query";
import { portfolioService } from "../services/portfolioService";
import type { UserType } from "../Types";

export function useBasicInfo() {
  const { data: basicInfo, isPending } = useQuery<UserType>({
    queryKey: ["basic-info"],
    queryFn: portfolioService.getUser,
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { basicInfo, isPending };
}
