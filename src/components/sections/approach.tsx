"use client";

import { useState, useRef } from "react";
import { RayBurst, Reveal } from "@/components/ui";
import { focusAreas } from "@/data";

export const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = currentX - startX;
    const threshold = 100;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (diff < 0 && activeIndex < focusAreas.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
    
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = currentX - startX;
    const threshold = 100;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (diff < 0 && activeIndex < focusAreas.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
    
    setTranslateX(0);
  };


  return (
    <div id="approach" className="space-y-6 sm:space-y-8">
      {/* Header */}
      <Reveal className="space-y-4 sm:space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
          Our approach
        </p>
        <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem] scroll-mt-16 lg:scroll-mt-20">
          Personalized pathways grounded in trust
        </h2>
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          Each focus area blends therapeutic expertise with the warmth of community. Explore how care plans evolve to meet the needs of each child and family.
        </p>
      </Reveal>

      {/* Carousel Container */}
      <div className="relative">
        {/* Progress Indicators */}
        <div className="mb-6 flex justify-center gap-2">
          {focusAreas.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[var(--color-primary)]"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${translateX}px))`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {focusAreas.map((focus, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;
              
              return (
                <div
                  key={focus.id}
                  className={`w-full flex-shrink-0 px-4 transition-all duration-500 ${
                    isActive ? "scale-100" : "scale-95"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_24px_64px_rgba(26,67,56,0.08)] ring-1 ring-black/5 sm:p-8 transition-all duration-500 ${
                      isActive
                        ? "opacity-100"
                        : isPrev || isNext
                        ? "opacity-60"
                        : "opacity-40"
                    }`}
                  >
                    <Reveal>
                      <RayBurst tone="primary" size="md" className="-top-10 left-4 sm:left-10" />
                      <div className="relative space-y-4 sm:space-y-6">
                        <h3 className="text-2xl font-semibold text-[var(--color-deep)] sm:text-3xl">
                          {focus.title}
                        </h3>
                        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                          {focus.summary}
                        </p>
                        <ul className="space-y-3 text-base leading-relaxed text-[var(--text-muted)] sm:space-y-4 sm:text-lg">
                          {focus.details.map((detail) => (
                            <li key={detail} className="flex gap-4">
                              <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[var(--color-accent)] sm:mt-2 sm:h-2 sm:w-6" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="h-5 w-5 text-[var(--color-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setActiveIndex(Math.min(focusAreas.length - 1, activeIndex + 1))}
          disabled={activeIndex === focusAreas.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="h-5 w-5 text-[var(--color-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
