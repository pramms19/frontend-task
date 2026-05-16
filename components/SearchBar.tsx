"use client";

import { useUsersStore } from "@/store/userStore";

export default function SearchBar() {
  const { search, setSearch } = useUsersStore();

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name or email..."
      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DA077]"
    />
  );
}