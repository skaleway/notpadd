"use client"

import { useMembers } from "@/hooks/use-members"
import { MemberRole } from "@/types"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Input } from "@workspace/ui/components/input"
import Profile from "@workspace/ui/components/user-profile"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Crown,
  Filter,
  LucideIcon,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  UserCheck,
  Users,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { format, parseISO } from "date-fns"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

interface RoleConfig {
  label: string
  icon: LucideIcon
  color: string
}

const roleConfig: Record<MemberRole, RoleConfig> = {
  [MemberRole.Owner]: {
    label: "Owner",
    icon: Crown,
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  [MemberRole.Member]: {
    label: "Member",
    icon: Users,
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  [MemberRole.Moderator]: {
    label: "Moderator",
    icon: UserCheck,
    color: "bg-orange-100 text-orange-800 border-orange-200",
  },
  [MemberRole.Editor]: {
    label: "Editor",
    icon: Code,
    color: "bg-green-100 text-green-800 border-green-200",
  },
}

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState<string>("all")
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null)

  const { members, pagination, isLoading, error, setPage, page, limit, setLimit } = useMembers()

  const filteredMembers = members.filter(member => {
    const matchesSearch =
      member.user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "all" || member.role === selectedRole
    return matchesSearch && matchesRole
  })

  const handleRoleChange = async (memberId: string, newRole: MemberRole) => {
    // Implementation for role change
  }

  const handleRemoveMember = async (memberId: string) => {
    // Implementation for member removal
  }

  const RoleBadge = ({ role }: { role: MemberRole }) => {
    const config = roleConfig[role]
    const Icon = config.icon
    return (
      <Badge variant="outline" className={`${config.color} gap-1`}>
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    )
  }

  if (isLoading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-red-500">Error loading members</div>
    )
  }

  return (
    <div className="">
      <div className="container mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
              <p className="text-muted-foreground">
                Manage your team members, roles, and permissions
              </p>
            </div>
            <Button onClick={() => setIsInviteOpen(true)} className="gap-2 w-fit">
              <Plus className="h-4 w-4" />
              Invite Member
            </Button>
          </div>
        </motion.div>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedRole === "all"
                    ? "All Roles"
                    : roleConfig[selectedRole as keyof typeof roleConfig]?.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedRole("all")}>
                  All Roles
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {Object.entries(roleConfig).map(([role, config]) => (
                  <DropdownMenuItem key={role} onClick={() => setSelectedRole(role)}>
                    <config.icon className="h-4 w-4 mr-2" />
                    {config.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-2">
            <AnimatePresence>
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between p-4 border rounded-lg transition-all duration-200 bg-background"
                >
                  <div className="flex items-center gap-4">
                    <Profile
                      name={member.user.name as string}
                      url={member.user.imageUrl}
                      size="member"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{member.user.name || "Unnamed User"}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.user.email}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">
                          Joined: {format(parseISO(member.craetedAt.toString()), "MMM d, yyyy")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <RoleBadge role={member.role} />

                    {member.role !== MemberRole.Owner && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setEditingMemberId(member.id)}>
                            <Settings className="h-4 w-4 mr-2" />
                            Edit Permissions
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {Object.entries(roleConfig).map(
                            ([role, config]) =>
                              role !== MemberRole.Owner &&
                              role !== member.role && (
                                <DropdownMenuItem
                                  key={role}
                                  onClick={() => handleRoleChange(member.id, role as MemberRole)}
                                >
                                  <config.icon className="h-4 w-4 mr-2" />
                                  Change to {config.label}
                                </DropdownMenuItem>
                              ),
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleRemoveMember(member.id)}
                          >
                            Remove from team
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {pagination && (
              <div className="flex items-center justify-between border-t pt-4 mt-4">
                <div className="flex items-center gap-2">
                  <Select value={limit.toString()} onValueChange={value => setLimit(Number(value))}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select limit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 per page</SelectItem>
                      <SelectItem value="10">10 per page</SelectItem>
                      <SelectItem value="20">20 per page</SelectItem>
                      <SelectItem value="50">50 per page</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-muted-foreground">
                    Showing {(page - 1) * limit + 1} to{" "}
                    {Math.min(page * limit, pagination.totalCount)} of {pagination.totalCount}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm">
                    Page {page} of {pagination.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page + 1)}
                    disabled={!pagination.hasMore}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
