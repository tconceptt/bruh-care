import Link from "next/link";
import { RayBurst, Reveal } from "@/components/ui";
import { dailyRhythms } from "@/data";

export const DailyLife = () => {
  return (
    <div id="day" className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_26px_68px_rgba(26,67,56,0.08)] ring-1 ring-black/5 sm:p-8">
      <Reveal direction="up">
      <RayBurst tone="secondary" size="md" className="-left-4 top-6 sm:-left-6 sm:top-10" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 sm:space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
            A day at BRUH
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem]">
            Rhythms that build safety and growth
          </h2>
        </div>
        <Link
          href="mailto:visit@bruhcenter.org"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)]/70 bg-[rgba(77,190,158,0.15)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] shadow-[0_12px_28px_rgba(77,190,158,0.22)] transition hover:bg-[rgba(77,190,158,0.25)] sm:px-6 sm:text-base"
        >
          Schedule a visit
        </Link>
      </div>
        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-3">
        {dailyRhythms.map((moment) => (
          <div
            key={moment.title}
            className="space-y-4 rounded-[24px] border border-[rgba(26,67,56,0.08)] bg-white p-6 shadow-[0_16px_36px_rgba(26,67,56,0.06)] sm:space-y-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--color-secondary)]">
              {moment.time}
            </p>
            <h3 className="text-lg font-semibold text-[var(--color-deep)] sm:text-xl">
              {moment.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">{moment.description}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)] sm:space-y-4 sm:text-base">
              {moment.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-4">
                  <span className="mt-1 h-1 w-5 flex-shrink-0 rounded-full bg-[var(--color-primary)]/70 sm:mt-1.5 sm:h-1.5 sm:w-7" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </Reveal>
    </div>
  );
};
