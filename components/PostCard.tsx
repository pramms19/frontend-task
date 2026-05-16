import { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div
      className={`border rounded-xl p-4 bg-white hover:shadow-md transition-shadow ${
        post.isLocal ? "border-[#1DA077]" : "border-gray-200"
      }`}
    >
      {/* Badge for locally added posts */}
      {post.isLocal && (
        <span className="text-xs font-semibold text-[#1DA077] mb-1 block">
          Added by you
        </span>
      )}
      <p className="font-semibold text-gray-900 capitalize">{post.title}</p>
      <p className="text-sm text-gray-500 mt-1">{post.body}</p>
    </div>
  );
}
