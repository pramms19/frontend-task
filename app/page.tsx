import NavTab from "@/components/NavTab";
import StepCards from "@/components/StepCards";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <NavTab />
      <div className="place-content-center place-items-center">
        <p className="text-xs">Your SkillShikshya Journey</p>
        <div className="text-xl font-bold">
          Step <span className="text-[#1DA077]">In</span>. Skill
          <span className="text-[#1DA077]">Up</span>. Stand{" "}
          <span className="text-[#1DA077]">Out</span>.
        </div>
      </div>
      <StepCards />
    </div>
  );
}
