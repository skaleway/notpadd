import { create } from "zustand";

interface teamStore {
  isOpen: boolean;
  onToggle: () => void;
}

export const useTeamStore = create<teamStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
