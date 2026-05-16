"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Post, User } from "@/types";
import PostCard from "@/components/PostCard";

export default function UserPostsPage() {
  const { id } = useParams();
  const router = useRouter();
  const userId = Number(id);

  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiIsLoading(true);

        // Fetch user and posts in parallel
        const [userRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        ]);

        if (!userRes.ok || !postsRes.ok) throw new Error();

        const [userData, postsData] = await Promise.all([
          userRes.json(),
          postsRes.json(),
        ]);

        setUser(userData);
        setPosts(postsData);
      } catch {
        setError(true);
      } finally {
        setApiIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (apiIsLoading) {
    return <p className="p-6 text-gray-500 text-sm">Loading users...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500 text-sm">Something went wrong</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-500 hover:text-gray-800 mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to Users
      </button>

      {/* User info */}
      {user && (
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-lg">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-400 mt-0.5">{user.company.name}</p>
        </div>
      )}

      {/* Posts */}
      <h2 className="font-semibold text-gray-700 mb-3">
        Posts ({posts.length})
      </h2>

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
