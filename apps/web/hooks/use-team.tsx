import { tryCatch } from "@/lib/try-catch";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Team } from "@workspace/db";
import axios from "axios";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";

interface UpdateTeamData {
  teamId: string;
  data: {
    name: string;
  };
}

export const useTeams = () => {
  const queryClient = useQueryClient();

  async function getTeam() {
    const { data, error } = await tryCatch(axios.get("/api/v1/team"));
    if (error || !data) {
      toast.error("Failed to fetch teams");
      return [];
    }

    const teams = data.data.teams;
    return teams;
  }

  const { data: teams, isLoading } = useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: getTeam,
  });

  const updateTeamMutation = useMutation({
    mutationFn: async ({ teamId, data }: UpdateTeamData) => {
      const response = await axios.put(`/api/v1/team/${teamId}`, {
        name: data.name,
      });

      console.log(response.data);

      return response.data;
    },
    onSuccess: (data, variables) => {
      updateTeamClient(variables.teamId, variables.data);
      toast.success(data.message || "Team updated successfully");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to update team");
    },
  });

  const [teamId, setTeamId] = useLocalStorage("teamId", "");

  if (!teamId && teams?.length) {
    setTeamId(teams[0]!.id);
  }

  const updateTeamClient = (
    teamId: string,
    data: {
      name?: string;
      imageUrl?: string;
      imageBlur?: string;
    },
  ) => {
    queryClient.setQueryData<Team[]>(["teams"], (oldTeams) => {
      if (!oldTeams) return oldTeams;
      return oldTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              name: data.name ?? team.name,
              imageUrl: data.imageUrl ?? team.imageUrl,
              imageBlur: data.imageBlur ?? team.imageBlur,
            }
          : team,
      );
    });
  };

  const team = teams?.find((team) => team.id === teamId);

  return {
    teams,
    isLoading,
    team,
    setTeamId,
    teamId,
    updateTeam: updateTeamMutation.mutate,
    isUpdating: updateTeamMutation.isPending,
    updateTeamClient,
  };
};
