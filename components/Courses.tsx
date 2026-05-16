"use client";

import { motion } from "framer-motion";
import { useCoursesStore } from "@/store/coursesStore";
import MainCourseCard from "@/components/MainCourseCard";
import StatCard from "@/components/StatCard";

const allCards = [
  {
    id: "main",
    component: <MainCourseCard />,
  },
  {
    id: "upcoming",
    component: (
      <StatCard
        number="05"
        title="Upcoming Courses"
        description="exciting new courses waiting to boost your skills."
      />
    ),
  },
  {
    id: "ongoing",
    component: (
      <StatCard
        number="10"
        title="Ongoing Courses"
        description="currently happening—don't miss out on the action!"
      />
    ),
  },
];

export default function Courses() {
  const { cardOrder, swapCards } = useCoursesStore();

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-10">
      <div className="flex gap-4 items-stretch">
        {cardOrder.map((cardIndex, position) => (
          <motion.div
            key={allCards[cardIndex].id}
            layout
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            // position 0 = main wide slot, others = narrow
            className={`${position === 0 ? "flex-2" : "flex-1"} cursor-pointer flex flex-col`}
            onClick={() => {
              if (position !== 0) swapCards(0, position);
            }}
          >
            {allCards[cardIndex].component}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
