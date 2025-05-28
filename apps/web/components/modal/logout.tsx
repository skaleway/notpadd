"use client"

import { useSession } from "@/provider/session"
import { useLogoutStore } from "@/store/logout"
import { useClerk } from "@clerk/nextjs"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"

const Logout = () => {
  const { isOpen, onOpen, onClose } = useLogoutStore()

  const { user } = useSession()

  const { signOut } = useClerk()

  const handleLogout = () => {
    signOut({
      redirectUrl: "/sign-in",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>You are about to logout</DialogTitle>
          <DialogDescription>
            <span className="font-bold capitalize text-base">{user?.name}</span> Are you sure you
            want to logout?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="w-fit" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Logout
