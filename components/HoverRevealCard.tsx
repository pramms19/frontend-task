"use client";

import Image from "next/image";
import { useState } from "react";

interface Slide {
  quote: string;
  personImage: string;
}

interface HoverRevealCardProps {
  slides: Slide[];
  bgColor: string;
  showWow?: boolean;
  children: React.ReactNode;
}

export default function HoverRevealCard({
  slides,
  bgColor,
  showWow = true,
  children,
}: HoverRevealCardProps) {
  const [hovered, setHovered] = useState(false);
  const [current, setCurrent] = useState(0);

  const isMultiple = slides.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCurrent(0);
      }}
    >
      {/* Base card */}
      {children}

      {/* Overlay — slides in from right */}
      <div
        className={`absolute inset-0 rounded-2xl transition-transform duration-500 ease-in-out ${
          hovered ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {showWow ? (
              // Card 1 layout
              <>
                <div className="absolute bottom-0 left-0 w-70 h-full">
                  <Image
                    src={slide.personImage}
                    alt="person"
                    fill
                    sizes="w-70"
                    className="object-cover object-top rounded-l-2xl"
                  />
                </div>
                <div className="absolute right-0 top-1/3 -translate-y-1/2 w-50">
                  <p className="text-white font-bold text-lg">{slide.quote}</p>
                </div>
              </>
            ) : (
              // Card 2 layout
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
                <p className="text-white font-bold text-lg text-center mt-4">
                  {slide.quote}
                </p>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.personImage}
                    alt="person"
                    fill
                    sizes="w-full"
                    className="object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Wow bubbles — only for card 1 */}
        {showWow && (
          <>
            <div className="absolute top-3 left-5 z-20 w-16 h-16 pointer-events-none">
              <Image
                src="/wow1.png"
                alt="wow"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-3 right-5 z-20 w-16 h-16 pointer-events-none">
              <Image
                src="/wow2.png"
                alt="wow"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
          </>
        )}

        {/* Left nav arrow */}
        <button
          onClick={isMultiple ? prev : undefined}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center shadow-md text-gray-600 hover:bg-white transition-colors text-lg"
        >
          ←
        </button>

        {/* Right nav arrow */}
        <button
          onClick={isMultiple ? next : undefined}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center shadow-md text-gray-600 hover:bg-white transition-colors text-lg"
        >
          →
        </button>
      </div>
    </div>
  );
}
