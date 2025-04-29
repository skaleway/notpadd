import { create } from "zustand";

interface LogoutStore {
  isOpen: boolean;
  onToggle: () => void;
}

export const useLogoutStore = create<LogoutStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
