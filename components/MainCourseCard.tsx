import Link from "next/link";
import Image from "next/image";

const techIcons = [
  { src: "/react.png", alt: "React" },
  { src: "/css.png", alt: "CSS" },
  { src: "/vue.png", alt: "VueJS" },
  { src: "/ps.png", alt: "Photoshop" },
];

export default function MainCourseCard() {
  return (
    <div className="bg-[#C33241] rounded-2xl flex flex-col justify-between p-8 flex-2 min-w-0 min-h-70 h-full">
      {/* Top row */}
      <div className="flex justify-end">
        <Link
          href="/design2"
          className="text-white text-sm font-medium hover:underline flex items-center gap-1"
        >
          View all Courses →
        </Link>
      </div>

      {/* Icons */}
      <div className="flex justify-between gap-4 mt-4">
        {techIcons.map((icon) => (
          <div
            key={icon.alt}
            className="w-14 h-14 rounded-xl overflow-hidden relative"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              sizes="60px"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Big number + label */}
      <div className="mt-6 flex items-end gap-3">
        <div className="flex items-start leading-none">
          <span
            className="text-white font-bold leading-none"
            style={{ fontSize: "clamp(3.5rem,10vw,6rem)" }}
          >
            23
          </span>
          <sup className="text-white font-bold text-3xl align-super mt-2">+</sup>
        </div>
        <div className="mb-4">
          <p className="text-white font-bold text-xl leading-tight">All Courses</p>
          <p className="text-white/70 text-xs leading-snug mt-1">
            courses you&apos;re powering
            <br />
            through right now.
          </p>
        </div>
      </div>
    </div>
  );
}