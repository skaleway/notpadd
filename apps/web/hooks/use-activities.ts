import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ActivityType } from "@workspace/db"

interface Activity {
  id: string
  type: ActivityType
  userId: string
  teamId: string
  spaceId: string
  articleId: string
  createdAt: string
  updatedAt: string
  user: {
    id: string
    name: string | null
    email: string
    imageUrl: string | null
  }
  space: {
    id: string
    name: string
  }
  article?: {
    id: string
    title: string
  }
}

interface PaginatedResponse {
  activities: Activity[]
  pagination: {
    total: number
    pages: number
    current: number
    limit: number
  }
}

export function useActivities(teamId: string) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const { data, isLoading, error } = useQuery<PaginatedResponse>({
    queryKey: ["team-activities", teamId, page, limit],
    queryFn: async () => {
      const response = await axios.get(
        `/api/v1/team/${teamId}/activities?page=${page}&limit=${limit}`,
      )
      return response.data
    },
  })

  const createActivity = async (type: ActivityType, spaceId: string, articleId?: string) => {
    try {
      const response = await axios.post(`/api/v1/team/${teamId}/activities`, {
        type,
        spaceId,
        articleId,
      })
      return response.data
    } catch (error) {
      console.error("Error creating activity:", error)
      throw error
    }
  }

  return {
    activities: data?.activities || [],
    pagination: data?.pagination,
    isLoading,
    error,
    setPage,
    setLimit,
    createActivity,
  }
}
