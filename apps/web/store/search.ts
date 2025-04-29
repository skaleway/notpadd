import { create } from "zustand";

interface SearchStore {
  isOpen: boolean;
  onToggle: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
