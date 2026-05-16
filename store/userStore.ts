import { create } from "zustand";
import { User } from "@/types";

interface UsersStore {
  users: User[];
  search: string;
  setUsers: (users: User[]) => void;
  setSearch: (search: string) => void;
  filteredUsers: () => User[];
}

export const useUsersStore = create<UsersStore>((set, get) => ({
  users: [],
  search: "",
  setUsers: (users) => set({ users }),
  setSearch: (search) => set({ search }),
  filteredUsers: () => {
    const { users, search } = get();

    // if no search just return all users
    if (!search.trim()) return users;

    const q = search.toLowerCase();

    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  },
}));