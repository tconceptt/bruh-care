"use client";

import { useState, useMemo } from "react";
import { RayBurst, Reveal } from "@/components/ui";
import { focusAreas } from "@/data";
import type { FocusArea } from "@/types";

export const Approach = () => {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0].id);

  const currentFocus = useMemo(
    () => focusAreas.find((item) => item.id === activeFocus) ?? focusAreas[0],
    [activeFocus]
  );

  return (
    <section id="approach" className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-8">
      <Reveal className="space-y-4 sm:space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
          Our approach
        </p>
        <h2 className="text-2xl font-semibold text-[var(--color-deep)] sm:text-3xl md:text-[2.5rem]">
          Personalized pathways grounded in trust
        </h2>
        <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          Each focus area blends therapeutic expertise with the warmth of community. Explore how care plans evolve to meet the needs of each child and family.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {focusAreas.map((item) => {
            const isActive = item.id === activeFocus;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFocus(item.id)}
                className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-5 sm:text-sm ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow-[0_18px_38px_rgba(241,91,34,0.28)]"
                    : "bg-white text-[var(--color-deep)] shadow-[0_12px_24px_rgba(26,67,56,0.05)] hover:bg-[rgba(254,190,41,0.12)]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </Reveal>
      <div className="relative overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_24px_64px_rgba(26,67,56,0.08)] ring-1 ring-black/5 sm:p-8">
        <Reveal>
          <RayBurst tone="primary" size="md" className="-top-10 left-4 sm:left-10" />
          <div className="relative space-y-4 sm:space-y-5">
            <h3 className="text-xl font-semibold text-[var(--color-deep)] sm:text-2xl">
              {currentFocus.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">{currentFocus.summary}</p>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-muted)] sm:space-y-3 sm:text-base">
              {currentFocus.details.map((detail) => (
                <li key={detail} className="flex gap-3 sm:gap-4">
                  <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[var(--color-accent)] sm:mt-2 sm:h-2 sm:w-6" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
