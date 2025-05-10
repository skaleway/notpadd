"use client";

import { useSession } from "@/provider/session";
import { useLogoutStore } from "@/store/logout";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { useClerk } from "@clerk/nextjs";
import { ReactNode } from "react";

const Logout = () => {
  const { isOpen, onToggle } = useLogoutStore();

  const { user } = useSession();

  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut({
      redirectUrl: "/sign-in",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>You are about to logout</DialogTitle>
          <DialogDescription>
            <span className="font-bold">{user?.name}</span> Are you sure you
            want to logout?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onToggle}>
            Cancel
          </Button>
          <Button className="w-fit" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
