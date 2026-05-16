import { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
      <p className="font-semibold text-gray-900 capitalize">{post.title}</p>
      <p className="text-sm text-gray-500 mt-1">{post.body}</p>
    </div>
  );
}
