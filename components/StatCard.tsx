interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

export default function StatCard({
  number,
  title,
  description,
}: StatCardProps) {
  const verticalStyle = {
    writingMode: "vertical-rl" as const,
    textOrientation: "mixed" as const,
    transform: "rotate(180deg)",
  };

  return (
    <div className="bg-[#FAE8E8] rounded-2xl flex flex-col justify-between p-5 flex-1 min-w-0 min-h-70 h-full place-content-center place-items-center">
      <div className="flex flex-row gap-2 items-end h-full flex-1">
        <p
          className="text-[#C33241] font-bold text-xl leading-tight shrink-0 max-h-30"
          style={verticalStyle}
        >
          {title}
        </p>

        <p
          className="text-[#C33241] text-xs leading-relaxed shrink-0 max-h-50"
          style={verticalStyle}
        >
          {description}
        </p>
      </div>

      <div className="mt-4 flex items-end">
        <span
          className="text-[#C33241] font-bold leading-none"
          style={{ fontSize: "clamp(3rem,8vw,5rem)" }}
        >
          {number}
        </span>
        <sup className="text-[#C33241] font-bold text-3xl leading-none mb-11">
          +
        </sup>
      </div>
    </div>
  );
}
