import { create } from "zustand";

interface CoursesStore {
  cardOrder: number[];
  swapCards: (indexA: number, indexB: number) => void;
}

export const useCoursesStore = create<CoursesStore>((set) => ({
  cardOrder: [0, 1, 2],
  swapCards: (indexA, indexB) =>
    set((state) => {
      const newOrder = [...state.cardOrder];
      [newOrder[indexA], newOrder[indexB]] = [newOrder[indexB], newOrder[indexA]];
      return { cardOrder: newOrder };
    }),
}));