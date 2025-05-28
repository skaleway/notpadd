import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTeams } from "./use-team";
import { Member, PaginationState } from "@/types";

interface MembersResponse {
  members: Member[];
  pagination: PaginationState;
}

export const useMembers = (initialPage = 1, initialLimit = 10) => {
  const { teamId } = useTeams();
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const { data, isLoading, error } = useQuery<MembersResponse>({
    queryKey: ["members", teamId, page, limit],
    queryFn: async () => {
      if (!teamId) throw new Error("Team ID is required");

      const response = await fetch(
        `/api/v1/team/${teamId}/members?page=${page}&limit=${limit}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      return response.json();
    },
    enabled: !!teamId,
  });

  return {
    members: data?.members ?? [],
    pagination: data?.pagination,
    isLoading,
    error,
    setPage,
    setLimit,
    page,
    limit,
  };
};
