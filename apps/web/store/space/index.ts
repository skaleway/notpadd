import { create } from "zustand";

type SpaceModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSpaceModal = create<SpaceModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
