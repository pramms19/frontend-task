import MainCourseCard from "@/components/MainCourseCard";
import StatCard from "@/components/StatCard";

export default function Courses() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-10">
      <div className="flex gap-4 items-stretch">
        <MainCourseCard />
        <StatCard
          number="05"
          title="Upcoming Courses"
          description="exciting new courses waiting to boost your skills."
        />
        <StatCard
          number="10"
          title="Ongoing Courses"
          description="currently happening—don't miss out on the action!"
        />
      </div>
    </section>
  );
}