import StepCards from "@/components/StepCards";

export default function Home() {
  return (
    <div>
      
      <div className="w-full max-w-4xl mx-auto px-6">
        <p className="text-gray-500 text-sm mb-1">Your SkillShikshya Journey</p>
        <h2 className="text-gray-900 font-bold text-2xl mb-6">
          Step <span className="text-[#1DA077]">In</span>. Skill
          <span className="text-[#1DA077]">Up</span>. Stand{" "}
          <span className="text-[#1DA077]">Out</span>.
        </h2>
      </div>
      <StepCards />
    </div>
  );
}
