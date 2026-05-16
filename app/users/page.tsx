import { User } from "@/types";
import UserListClient from "./UserListClient";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // SSR — always fresh
  });

  if (!res.ok) throw new Error("Failed to fetch users");

  return res.json();
}

export default async function UsersPage() {
  let users: User[] = [];
  let error = false;

  try {
    users = await getUsers();
  } catch {
    error = true;
  }

  if (error) {
    return (
      <p className="p-6 text-red-500 text-sm">Something went wrong</p>
    );
  }

  return <UserListClient initialUsers={users} />;
}