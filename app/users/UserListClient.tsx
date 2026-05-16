"use client";

import { useEffect } from "react";
import { User } from "@/types";
import UserCard from "@/components/UserCard";
import { useUsersStore } from "@/store/userStore";

export default function UserListClient({
  initialUsers,
}: {
  initialUsers: User[];
}) {
  const { users, setUsers } = useUsersStore();

  // Hydrate Zustand store with SSR data on mount
  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const apiIsLoading = users.length === 0;

  if (apiIsLoading) {
    return <p className="p-6 text-gray-500 text-sm">Loading users...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Users</h1>
      <p className="text-gray-500 text-sm mb-6">
        Click &quot;View Posts&quot; to see a user&apos;s posts.
      </p>

      <div className="flex flex-col gap-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}