"use client";

import Image from "next/image";
import HoverRevealCard from "@/components/HoverRevealCard";

const cards = [
  {
    bg: "bg-[#F45B5B]",
    bgColor: "#F45B5B",
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    body: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "/img1.png",
    imageAlt: "Thinking person",
    imageSide: "left" as const,
    showWow: true,
    slides: [
      {
        quote: "Clarity unlocked— stickers, sips, and skills all in one go!",
        personImage: "/hover1.png",
      },
    ],
  },
  {
    bg: "bg-[#5492A0]",
    bgColor: "#5492A0",
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    body: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    image: "/img3.png",
    imageAlt: "Reading person",
    imageSide: "right" as const,
    showWow: false,
    slides: [
      {
        quote: "Focused faces— learning mode: ON!",
        personImage: "/hover2.png",
      },
      {
        quote: "Laptops, lessons, and a whole lot of growth!",
        personImage: "/hover3.png",
      },
    ],
  },
  {
    bg: "bg-[#6C64A8]",
    bgColor: "#6C64A8",
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    body: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    image: "/img2.png",
    imageAlt: "Headphones person",
    imageSide: "left" as const,
    showWow: false,
    slides: [],
  },
  {
    bg: "bg-[#A88964]",
    bgColor: "#A88964",
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    body: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    image: "/img4.png",
    imageAlt: "Laptop person",
    imageSide: "right" as const,
    showWow: false,
    slides: [],
  },
];

interface CardProps {
  bg: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
}

function StepCard({
  bg,
  title,
  subtitle,
  body,
  image,
  imageAlt,
  imageSide,
}: CardProps) {
  return (
    <div className={`${bg} relative rounded-2xl flex items-end`}>
      {imageSide === "left" && (
        <div className="absolute w-70 h-70 -left-20 top-7 shrink-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="280px"
            className="object-contain"
          />
        </div>
      )}

      <div
        className={`flex-1 py-10 px-6 self-center ${
          imageSide === "left" ? "text-right" : "text-left"
        }`}
      >
        <h2 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1">
          {title}
        </h2>
        <p className="text-white/90 font-semibold text-sm md:text-base mb-3">
          {subtitle}
        </p>
        <p
          className={`text-white/80 text-xs leading-relaxed ${
            imageSide === "left" ? "pl-30" : "pr-30"
          }`}
        >
          {body}
        </p>
      </div>

      {imageSide === "right" && (
        <div className="absolute w-70 h-70 -right-16 top-8 shrink-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="280px"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default function StepCards() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-4xl w-full">
        {cards.map((card, i) =>
          card.slides.length > 0 ? (
            <HoverRevealCard
              key={i}
              slides={card.slides}
              bgColor={card.bgColor}
              showWow={card.showWow}
            >
              <StepCard {...card} />
            </HoverRevealCard>
          ) : (
            <StepCard key={i} {...card} />
          ),
        )}
      </div>
    </div>
  );
}
