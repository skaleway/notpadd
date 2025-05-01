"use client";

import { useTeamStore } from "@/store/team";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import NewTeam from "../forms/new-team";

const CreateTeam = () => {
  const { isOpen, onToggle } = useTeamStore();
  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold hidden">
            Create Team
          </DialogTitle>
        </DialogHeader>
        <NewTeam />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeam;
