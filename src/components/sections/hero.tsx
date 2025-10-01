import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { stats } from "@/data";

export const Hero = () => {
  return (
    <div id="hero" className="relative overflow-hidden rounded-[28px] bg-transparent">
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-white/95 shadow-[0_18px_56px_rgba(26,67,56,0.08)] backdrop-blur">
        <div className="pointer-events-none absolute inset-x-4 top-[-36%] h-[320px] rounded-[999px] bg-[radial-gradient(circle_at_top,_rgba(254,190,41,0.22),_transparent_70%)] sm:inset-x-8 sm:h-[420px]" />
      </div>
      <div className="relative flex flex-col gap-6 p-6 sm:gap-8 sm:p-8 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-8 lg:p-10 xl:p-12">
        <div className="flex flex-col gap-6 sm:gap-8">
      
          <Reveal className="space-y-4 text-balance sm:space-y-6" delay={60}>
            <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-tight text-[var(--color-deep)] scroll-mt-16 lg:scroll-mt-20">
              A sanctuary for children with intellectual disabilities—and the families who refuse to give up on them.
            </h1>
            <p className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl md:text-2xl">
              BRUH Care and Learning Center provides holistic care, education, and advocacy for children who have been hidden from society. Here, they are seen, supported, and encouraged to grow in confidence, ability, and dignity.
            </p>
          </Reveal>
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:gap-6" delay={110}>
            <Link
              href="mailto:hello@bruhcenter.org"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_42px_rgba(241,91,34,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(241,91,34,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-7"
            >
              Connect
            </Link>
            <Link
              href="#mission"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-white px-6 py-3 text-base font-semibold uppercase tracking-[0.24em] text-[var(--color-deep)] shadow-[0_12px_28px_rgba(26,67,56,0.06)] transition hover:border-[var(--color-primary)]/60 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-7"
            >
              See our approach
            </Link>
          </Reveal>
          <Reveal className="grid gap-6 rounded-[26px] bg-[rgba(77,190,158,0.12)] p-6 shadow-[0_18px_48px_rgba(26,67,56,0.08)] ring-1 ring-[rgba(77,190,158,0.16)] sm:grid-cols-2 sm:gap-8 sm:p-8" delay={160}>
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1 text-center sm:text-left">
                <p className="text-4xl font-semibold text-[var(--color-deep)] sm:text-5xl">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--text-muted)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal
          className="order-last flex flex-col gap-6 rounded-[26px] bg-[rgba(254,190,41,0.14)] p-6 text-[var(--color-deep)] shadow-[0_20px_52px_rgba(254,190,41,0.22)] ring-1 ring-[rgba(254,190,41,0.22)] sm:gap-8 sm:p-8 lg:order-none"
          direction="left"
          delay={200}
        >
          <Image
            src="/bruh-logo.svg"
            alt="BRUH symbol"
            width={120}
            height={120}
            className="h-auto w-24 sm:w-32 lg:w-36"
            priority
          />
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]">Mission</h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              We exist to provide individualized care and education for children with intellectual disabilities—many from low-income, single-parent homes—so they can grow in confidence and dignity. Families experience relief, hope, and practical support as their children make meaningful progress.
            </p>
          </div>
          <div className="rounded-[20px] bg-white/90 p-6 text-sm leading-relaxed text-[var(--color-deep)] shadow-[0_12px_30px_rgba(26,67,56,0.08)] sm:text-base">
            <p>
              &ldquo;Families describe BRUH as safe, trustworthy, and life-changing—a place where their children are accepted without judgment.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
