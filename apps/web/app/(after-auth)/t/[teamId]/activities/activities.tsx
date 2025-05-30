"use client"

import { useActivities } from "@/hooks/use-activities"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import Profile from "@workspace/ui/components/user-profile"
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  Download,
  Globe,
  Mail,
  Search,
  Settings,
  Shield,
  UserMinus,
  UserPlus,
} from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { formatDistanceToNow } from "date-fns"

const activityTypes = {
  member_added: {
    icon: UserPlus,
    color: "bg-green-100 text-green-800",
    label: "Member Added",
  },
  member_removed: {
    icon: UserMinus,
    color: "bg-red-100 text-red-800",
    label: "Member Removed",
  },
  role_changed: {
    icon: Shield,
    color: "bg-blue-100 text-blue-800",
    label: "Role Changed",
  },
  space_created: {
    icon: Globe,
    color: "bg-purple-100 text-purple-800",
    label: "Space Created",
  },
  space_updated: {
    icon: Settings,
    color: "bg-orange-100 text-orange-800",
    label: "Space Updated",
  },
  space_deleted: {
    icon: Settings,
    color: "bg-red-100 text-red-800",
    label: "Space Deleted",
  },
  article_created: {
    icon: Code,
    color: "bg-green-100 text-green-800",
    label: "Article Created",
  },
  article_updated: {
    icon: Code,
    color: "bg-blue-100 text-blue-800",
    label: "Article Updated",
  },
  article_deleted: {
    icon: Code,
    color: "bg-red-100 text-red-800",
    label: "Article Deleted",
  },
  article_published: {
    icon: Globe,
    color: "bg-green-100 text-green-800",
    label: "Article Published",
  },
  article_unpublished: {
    icon: Globe,
    color: "bg-orange-100 text-orange-800",
    label: "Article Unpublished",
  },
  article_archived: {
    icon: Clock,
    color: "bg-gray-100 text-gray-800",
    label: "Article Archived",
  },
  invite_created: {
    icon: Mail,
    color: "bg-blue-100 text-blue-800",
    label: "Invite Created",
  },
  invite_used: {
    icon: Mail,
    color: "bg-green-100 text-green-800",
    label: "Invite Used",
  },
  team_updated: {
    icon: Settings,
    color: "bg-orange-100 text-orange-800",
    label: "Team Updated",
  },
}

type ActivityHeaderProps = {
  disabled: boolean
} & (ActivityHeaderPropsLoading | ActivityHeaderNotLoading)

type ActivityHeaderPropsLoading = {
  disabled: true
}

type ActivityHeaderNotLoading = {
  disabled: false
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedType: string
  setSelectedType: (type: string) => void
  timeRange: string
  setTimeRange: (range: string) => void
}

const ActivityHeader = (props: ActivityHeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Team Activity Log</h1>
      <p className="text-muted-foreground">
        Track all team member actions, role changes, and security events
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search activity..."
            value={props.disabled ? "" : props.searchQuery}
            onChange={e => !props.disabled && props.setSearchQuery?.(e.target.value)}
            className="pl-10"
            disabled={props.disabled}
          />
        </div>
        <div className="flex gap-2">
          <Select
            value={!props.disabled ? props.selectedType : ""}
            onValueChange={value => !props.disabled && props.setSelectedType?.(value)}
            disabled={props.disabled}
          >
            <SelectTrigger className="whitespace-pre w-fit">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activities</SelectItem>
              {Object.entries(activityTypes).map(([type, config]) => (
                <SelectItem key={type} value={type}>
                  <div className="flex items-center gap-2">
                    <config.icon className="h-4 w-4" />
                    {config.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={!props.disabled ? props.timeRange : ""}
            onValueChange={value => !props.disabled && props.setTimeRange?.(value)}
            disabled={props.disabled}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" className="gap-2" disabled={props.disabled}>
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ActivityPage({ params }: { params: { teamId: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [timeRange, setTimeRange] = useState<string>("7d")

  const { activities, pagination, isLoading, error, setPage } = useActivities(params.teamId)

  const filteredActivities = activities.filter(activity => {
    const matchesSearch =
      (activity.user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      activity.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (activity.space?.name.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (activity.article?.title.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
    const matchesType = selectedType === "all" || activity.type === selectedType
    return matchesSearch && matchesType
  })

  const formatTimestamp = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <ActivityHeader disabled={true} />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 p-4 border rounded-lg bg-white dark:bg-background"
            >
              <Skeleton className="size-8 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-5 w-24 rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-48" />
                  <Skeleton className="h-3 w-64" />
                </div>
              </div>
              <Skeleton className="h-4 w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-red-500">Error loading activities. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="container mx-auto p-6 space-y-6">
        <ActivityHeader
          disabled={false}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
        <div className="space-y-4">
          <div className="space-y-3">
            {filteredActivities.map((activity, index) => {
              const config = activityTypes[activity.type as keyof typeof activityTypes]
              const Icon = config?.icon || Activity

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-4 border rounded-lg bg-white dark:bg-background hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className={`p-2 rounded-full ${config?.color || "bg-gray-100 text-gray-800"}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Profile
                        name={activity.user.name || activity.user.email}
                        url={activity.user.imageUrl}
                        size="sm"
                      />
                      <span className="font-medium text-sm">
                        {activity.user.name || activity.user.email}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {config?.label || activity.type}
                      </Badge>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1">
                      {activity.space && <p>Space: {activity.space.name}</p>}
                      {activity.article && <p>Article: {activity.article.title}</p>}
                      {activity.description && <p>{activity.description}</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {formatTimestamp(activity.createdAt)}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredActivities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-muted-foreground"
            >
              <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No activity found matching your filters.</p>
            </motion.div>
          )}

          {pagination && (
            <div className="flex items-center justify-between border-t pt-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Showing {(pagination.current - 1) * pagination.limit + 1} to{" "}
                  {Math.min(pagination.current * pagination.limit, pagination.total)} of{" "}
                  {pagination.total}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(pagination.current - 1)}
                  disabled={pagination.current === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm">
                  Page {pagination.current} of {Math.ceil(pagination.total / pagination.limit)}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(pagination.current + 1)}
                  disabled={pagination.current === Math.ceil(pagination.total / pagination.limit)}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
