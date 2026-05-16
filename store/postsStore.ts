import { create } from "zustand";
import { Post } from "@/types";

interface PostsStore {
  posts: Post[];
  localPosts: Post[];
  setPosts: (posts: Post[]) => void;
  addLocalPost: (post: Omit<Post, "id" | "isLocal">) => void;
  getPostsForUser: (userId: number) => Post[];
}

// Load existing local posts from localStorage 
const loadLocalPosts = (): Post[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("localPosts") || "[]");
  } catch {
    return [];
  }
};

export const usePostsStore = create<PostsStore>((set, get) => ({
  posts: [],
  localPosts: loadLocalPosts(),
  setPosts: (posts) => set({ posts }),

  addLocalPost: (post) => {
    const newPost: Post = {
      ...post,
      id: Date.now(), // unique id using timestamp
      isLocal: true,
    };
    set((state) => {
      const updated = [newPost, ...state.localPosts];
      // save to localStorage
      localStorage.setItem("localPosts", JSON.stringify(updated));
      return { localPosts: updated };
    });
  },

  // merge API posts + local posts for a specific user
  getPostsForUser: (userId) => {
    const { posts, localPosts } = get();
    const apiPosts = posts.filter((p) => p.userId === userId);
    const userLocalPosts = localPosts.filter((p) => p.userId === userId);
    // local posts shown first
    return [...userLocalPosts, ...apiPosts];
  },
}));