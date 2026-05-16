import { create } from "zustand";
import { User } from "@/types";

interface UsersStore {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));