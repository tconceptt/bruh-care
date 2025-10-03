"use client";

import { useState } from "react";
import { RayBurst, Reveal, StaggerReveal } from "@/components/ui";
import { impactStories } from "@/data";

export const ImpactStories = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const currentStory = impactStories[storyIndex];

  return (
    <div id="impact" className="relative overflow-hidden rounded-[32px] bg-white/95 shadow-[0_26px_68px_rgba(26,67,56,0.08)] ring-1 ring-black/5">
      {/* RayBurst positioned in background with proper z-index */}
      <RayBurst tone="accent" size="xl" className="absolute -top-16 left-0 z-0 opacity-90 sm:-top-20 sm:left-2" />
      {/* Content with padding to reserve space for RayBurst */}
      <div className="relative z-10 p-6 pt-4 pl-8 sm:p-8 sm:pt-6 sm:pl-12">
        <Reveal direction="up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 sm:space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
            Families speak
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem]">
            Real progress, real relief
          </h2>
        </div>
          <StaggerReveal className="flex items-center gap-4 sm:gap-6" staggerDelay={80} direction="left">
            <div>
              <button
                type="button"
                onClick={() => setStoryIndex(storyIndex === 0 ? impactStories.length - 1 : storyIndex - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-white shadow-[0_4px_12px_rgba(26,67,56,0.08)] transition hover:border-[var(--color-primary)]/60 hover:shadow-[0_6px_16px_rgba(26,67,56,0.12)] hover:scale-110 sm:h-8 sm:w-8"
                aria-label="Previous story"
              >
                <svg className="h-3 w-3 text-[var(--color-primary)] sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 sm:gap-3">
              {impactStories.map((story, index) => {
                const isActive = index === storyIndex;
                return (
                  <button
                    key={story.child}
                    type="button"
                    onClick={() => setStoryIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition hover:scale-125 sm:h-3 sm:w-3 ${
                      isActive
                        ? "bg-[var(--color-primary)]"
                        : "bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/60"
                    }`}
                    aria-label={`Show story for ${story.child}`}
                  />
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => setStoryIndex(storyIndex === impactStories.length - 1 ? 0 : storyIndex + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-white shadow-[0_4px_12px_rgba(26,67,56,0.08)] transition hover:border-[var(--color-primary)]/60 hover:shadow-[0_6px_16px_rgba(26,67,56,0.12)] hover:scale-110 sm:h-8 sm:w-8"
                aria-label="Next story"
              >
                <svg className="h-3 w-3 text-[var(--color-primary)] sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </StaggerReveal>
      </div>
        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4 sm:space-y-6">
          <span className="inline-flex items-center rounded-full bg-[rgba(77,190,158,0.18)] px-3 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-deep)] sm:px-4">
            {currentStory.child}
          </span>
          <h3 className="text-2xl font-semibold text-[var(--color-deep)] sm:text-3xl">
            {currentStory.headline}
          </h3>
          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">{currentStory.story}</p>
        </div>
          <div className="space-y-4 rounded-[26px] border border-[rgba(77,190,158,0.24)] bg-white p-6 text-sm leading-relaxed text-[var(--text-muted)] shadow-[0_16px_36px_rgba(26,67,56,0.06)] sm:space-y-6 sm:text-base">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)]">
            What progress looks like
          </p>
            <ul className="space-y-3 sm:space-y-4">
            {currentStory.progress.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-deep)] sm:mt-1.5 sm:h-2 sm:w-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
};
