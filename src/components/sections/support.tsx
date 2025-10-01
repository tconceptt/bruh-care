import Link from "next/link";
import { RayBurst, Reveal } from "@/components/ui";

export const Support = () => {
  return (
    <Reveal
      id="support"
      as="section"
      direction="up"
      className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_rgba(254,190,41,0.25),_rgba(77,190,158,0.3))] px-6 py-8 text-[var(--color-deep)] shadow-[0_28px_72px_rgba(26,67,56,0.12)] sm:px-10 sm:py-12"
    >
      <RayBurst tone="secondary" size="lg" className="-left-6 top-4 sm:-left-10 sm:top-6" />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center lg:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/80">
            Be part of the story
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Help keep BRUH a sanctuary for children and families in Ethiopia.
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-deep)]/80 sm:text-base">
            Partner with us through sponsorship, resource sharing, or professional collaboration. Your support extends specialized care to children who might otherwise go unseen.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <Link
            href="mailto:partner@bruhcenter.org"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] shadow-[0_18px_42px_rgba(26,67,56,0.15)] transition hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
          >
            Explore partnerships
          </Link>
          <Link
            href="tel:+251911000000"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-deep)]/30 bg-white/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] transition hover:border-[var(--color-deep)]/60 sm:px-6 sm:py-3 sm:text-sm"
          >
            Speak with our team
          </Link>
        </div>
      </div>
    </Reveal>
  );
};
