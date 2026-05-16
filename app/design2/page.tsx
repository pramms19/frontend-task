import Courses from "@/components/Courses";

export default function Design2() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto px-6">
        <p className="text-gray-500 text-sm mb-1">
          Explore our classes and master trending skills!
        </p>
        <h2 className="text-gray-900 font-bold text-2xl mb-6">
          Dive Into{" "}
          <span className="text-[#1DA077]">What&apos;s Hot Right Now!</span>
        </h2>
      </div>
      <Courses />
    </div>
  );
}
