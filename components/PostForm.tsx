"use client";

import { useState } from "react";
import { usePostsStore } from "@/store/postsStore";
import { postSchema, PostFormData } from "@/lib/schemas";

export default function PostForm({ userId }: { userId: number }) {
  const { addLocalPost } = usePostsStore();

  const [form, setForm] = useState<PostFormData>({ title: "", body: "" });
  const [errors, setErrors] = useState<Partial<PostFormData>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    // Run Zod validation
    const result = postSchema.safeParse(form);

    if (!result.success) {
      // Map errors to each field
      const fieldErrors: Partial<PostFormData> = {};
      result.error.issues.forEach((e) => {
        const field = e.path[0] as keyof PostFormData;
        fieldErrors[field] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Valid — save to localStorage via store
    addLocalPost({ ...form, userId });

    // Reset form
    setForm({ title: "", body: "" });
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 mt-6 bg-white">
      <h3 className="font-bold text-gray-900 mb-4">Add New Post</h3>

      {/* Title field */}
      <div className="mb-3">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Title
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          placeholder="Post title..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DA077]"
        />
        {/* Zod error for title */}
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title}</p>
        )}
      </div>

      {/* Body field */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Body
        </label>
        <textarea
          value={form.body}
          onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
          placeholder="Post body..."
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DA077] resize-none"
        />
        {/* Zod error for body */}
        {errors.body && (
          <p className="text-red-500 text-xs mt-1">{errors.body}</p>
        )}
      </div>

      {/* Success message */}
      {success && (
        <p className="text-[#1DA077] text-sm mb-3 font-medium">
          ✓ Post added successfully!
        </p>
      )}

      <button
        onClick={handleSubmit}
        className="bg-[#1DA077] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#178a67] transition-colors"
      >
        Submit Post
      </button>
    </div>
  );
}