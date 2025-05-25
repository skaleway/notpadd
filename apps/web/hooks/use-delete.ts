import { create } from "zustand";

export type TDelete = "user" | "removeUser" | "team" | "space" | "article";

interface DeleteHeaders {
  title: string;
  description: string;
  buttonText: string;
  api: string;
}

export const deleteHeaders: Record<TDelete, DeleteHeaders> = {
  user: {
    title: "Delete User",
    description: "Are you sure you want to delete this user?",
    buttonText: "Delete User",
    api: "/api/v1/user",
  },
  removeUser: {
    title: "Remove User",
    description: "Are you sure you want to remove this user?",
    buttonText: "Remove User",
    api: "/api/v1/user",
  },
  team: {
    title: "Delete Team",
    description: "Are you sure you want to delete this team?",
    buttonText: "Delete Team",
    api: "/api/v1/team",
  },
  space: {
    title: "Delete Space",
    description: "Are you sure you want to delete this space?",
    buttonText: "Delete Space",
    api: "/api/v1/space",
  },
  article: {
    title: "Delete Article",
    description: "Are you sure you want to delete this article?",
    buttonText: "Delete Article",
    api: "/api/v1/article",
  },
};

interface DeleteStore<T> {
  isOpen: boolean;
  tDelete: TDelete | null;
  data: T | null;
  isLoading: boolean;
  setIsOpen: (isOpen: boolean, tDelete?: TDelete, data?: T) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useDelete = create<DeleteStore<any>>((set, get) => ({
  isOpen: false,
  tDelete: null,
  data: null,
  isLoading: false,
  setIsOpen: (isOpen, tDelete, data) => set({ isOpen, tDelete, data }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
