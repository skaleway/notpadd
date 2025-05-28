"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@workspace/ui/components/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { Settings, Shield, Code, Globe, Users, CreditCard, Eye, UserCheck, Crown } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  avatar?: string
  role: "owner" | "member" | "developer" | "contributor" | "billing" | "viewer"
  status: "active" | "pending" | "inactive"
  joinedAt: string
  lastActive: string
  projects: number
}

interface EditPermissionsDialogProps {
  member: TeamMember | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (member: TeamMember) => void
}

interface ProjectPermission {
  id: string
  name: string
  role: "admin" | "developer" | "viewer"
}

const roleOptions = [
  { value: "member", label: "Member", icon: Users, color: "bg-blue-100 text-blue-800" },
  { value: "developer", label: "Developer", icon: Code, color: "bg-green-100 text-green-800" },
  { value: "contributor", label: "Contributor", icon: UserCheck, color: "bg-orange-100 text-orange-800" },
  { value: "viewer", label: "Viewer", icon: Eye, color: "bg-gray-100 text-gray-800" },
  { value: "billing", label: "Billing", icon: CreditCard, color: "bg-yellow-100 text-yellow-800" },
]

const mockProjects = [
  { id: "1", name: "Marketing Website", role: "admin" as const },
  { id: "2", name: "E-commerce Platform", role: "developer" as const },
  { id: "3", name: "Mobile App API", role: "viewer" as const },
  { id: "4", name: "Analytics Dashboard", role: "developer" as const },
]

export function EditPermissionsDialog({ member, open, onOpenChange, onSave }: EditPermissionsDialogProps) {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [projectPermissions, setProjectPermissions] = useState<ProjectPermission[]>([])
  const [teamPermissions, setTeamPermissions] = useState({
    canInviteMembers: false,
    canManageProjects: false,
    canViewBilling: false,
    canManageIntegrations: false,
    canAccessAnalytics: true,
  })

  useEffect(() => {
    if (member) {
      setSelectedRole(member.role)
      setProjectPermissions(mockProjects)
      // Set default permissions based on role
      const defaultPermissions = {
        member: {
          canInviteMembers: true,
          canManageProjects: true,
          canViewBilling: false,
          canManageIntegrations: true,
          canAccessAnalytics: true,
        },
        developer: {
          canInviteMembers: false,
          canManageProjects: true,
          canViewBilling: false,
          canManageIntegrations: false,
          canAccessAnalytics: true,
        },
        contributor: {
          canInviteMembers: false,
          canManageProjects: false,
          canViewBilling: false,
          canManageIntegrations: false,
          canAccessAnalytics: false,
        },
        viewer: {
          canInviteMembers: false,
          canManageProjects: false,
          canViewBilling: false,
          canManageIntegrations: false,
          canAccessAnalytics: false,
        },
        billing: {
          canInviteMembers: false,
          canManageProjects: false,
          canViewBilling: true,
          canManageIntegrations: false,
          canAccessAnalytics: false,
        },
      }
      setTeamPermissions(
        defaultPermissions[member.role as keyof typeof defaultPermissions] || defaultPermissions.viewer,
      )
    }
  }, [member])

  const handleSave = () => {
    if (member) {
      onSave({
        ...member,
        role: selectedRole as TeamMember["role"],
      })
    }
  }

  const handleProjectRoleChange = (projectId: string, newRole: "admin" | "developer" | "viewer") => {
    setProjectPermissions((prev) =>
      prev.map((project) => (project.id === projectId ? { ...project, role: newRole } : project)),
    )
  }

  if (!member) return null

  const selectedRoleConfig = roleOptions.find((role) => role.value === selectedRole)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Edit Permissions - {member.name}
          </DialogTitle>
          <DialogDescription>Manage team role and project-specific permissions for this member.</DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Team Role Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5" />
                Team Role
              </CardTitle>
              <CardDescription>The primary role determines base permissions across the team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        <div className="flex items-center gap-2">
                          <role.icon className="h-4 w-4" />
                          {role.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedRoleConfig && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Badge className={selectedRoleConfig.color}>
                    <selectedRoleConfig.icon className="h-3 w-3 mr-1" />
                    {selectedRoleConfig.label}
                  </Badge>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Team Permissions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5" />
                Team Permissions
              </CardTitle>
              <CardDescription>Specific permissions for team-level actions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Invite Members</Label>
                    <p className="text-sm text-muted-foreground">Can send invitations to new team members</p>
                  </div>
                  <Switch
                    checked={teamPermissions.canInviteMembers}
                    onCheckedChange={(checked) =>
                      setTeamPermissions((prev) => ({ ...prev, canInviteMembers: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Manage Projects</Label>
                    <p className="text-sm text-muted-foreground">Can create, delete, and configure projects</p>
                  </div>
                  <Switch
                    checked={teamPermissions.canManageProjects}
                    onCheckedChange={(checked) =>
                      setTeamPermissions((prev) => ({ ...prev, canManageProjects: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>View Billing</Label>
                    <p className="text-sm text-muted-foreground">Can access billing information and usage</p>
                  </div>
                  <Switch
                    checked={teamPermissions.canViewBilling}
                    onCheckedChange={(checked) => setTeamPermissions((prev) => ({ ...prev, canViewBilling: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Manage Integrations</Label>
                    <p className="text-sm text-muted-foreground">Can add and configure team integrations</p>
                  </div>
                  <Switch
                    checked={teamPermissions.canManageIntegrations}
                    onCheckedChange={(checked) =>
                      setTeamPermissions((prev) => ({ ...prev, canManageIntegrations: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Access Analytics</Label>
                    <p className="text-sm text-muted-foreground">Can view team and project analytics</p>
                  </div>
                  <Switch
                    checked={teamPermissions.canAccessAnalytics}
                    onCheckedChange={(checked) =>
                      setTeamPermissions((prev) => ({ ...prev, canAccessAnalytics: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Permissions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="h-5 w-5" />
                Project Permissions
              </CardTitle>
              <CardDescription>Role-based access control for individual projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projectPermissions.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{project.name}</span>
                    </div>
                    <Select
                      value={project.role}
                      onValueChange={(value) =>
                        handleProjectRoleChange(project.id, value as "admin" | "developer" | "viewer")
                      }
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">
                          <div className="flex items-center gap-2">
                            <Crown className="h-3 w-3" />
                            Admin
                          </div>
                        </SelectItem>
                        <SelectItem value="developer">
                          <div className="flex items-center gap-2">
                            <Code className="h-3 w-3" />
                            Developer
                          </div>
                        </SelectItem>
                        <SelectItem value="viewer">
                          <div className="flex items-center gap-2">
                            <Eye className="h-3 w-3" />
                            Viewer
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="gap-2">
              <Settings className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
