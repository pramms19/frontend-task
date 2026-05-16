import Link from "next/link";
import { User } from "@/types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow bg-white">
      <div>
        <p className="font-semibold text-gray-900">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-xs text-gray-400 mt-0.5">{user.company.name}</p>
      </div>
      <Link
        href={`/users/${user.id}`}
        className="bg-[#1DA077] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#178a67] transition-colors whitespace-nowrap"
      >
        View Posts
      </Link>
    </div>
  );
}
