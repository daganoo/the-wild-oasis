import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => null,
    enabled: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    isLoading: false,
    user: user || null,
    isAuthenticated: !!user,
  };
}
