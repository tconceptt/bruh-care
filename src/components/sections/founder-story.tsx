import { RayBurst, Reveal } from "@/components/ui";

export const FounderStory = () => {
  return (
    <section id="stories" className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8">
      <Reveal className="space-y-4 sm:space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
          Founder&apos;s story
        </p>
        <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem]">
          From humble beginnings to a trusted refuge
        </h2>
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          When a partner organization closed in 2008, families who had finally brought their children out of hiding were left without options. Ms. Nardos Assefa used personal funds to keep doors open, determined that progress wouldn&apos;t disappear overnight. That decision sparked BRUH—built on courage, community, and the belief that every child is worthy of opportunity.
        </p>
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          Today, the center remains rooted in that same conviction: to stand beside families who are navigating intellectual disabilities with limited resources, and to ensure their children are embraced with patience, respect, and love.
        </p>
      </Reveal>
      <Reveal
        className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_rgba(254,190,41,0.32),_rgba(77,190,158,0.32))] p-6 text-[var(--color-deep)] shadow-[0_28px_72px_rgba(26,67,56,0.13)] sm:p-9"
        direction="left"
        delay={120}
      >
        <RayBurst tone="primary" size="md" className="-right-4 top-6" />
        <div className="space-y-3 sm:space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/80">
            Words from Nardos
          </p>
          <p className="text-xl font-semibold leading-relaxed sm:text-2xl md:text-3xl">
            &ldquo;I promised the children and mothers who trusted us that they would never again be turned away. BRUH is that promise in action—steady, compassionate, and determined.&rdquo;
          </p>
          <p className="text-sm text-[var(--color-deep)]/70 sm:text-base">— Ms. Nardos Assefa, Founder & Director</p>
        </div>
      </Reveal>
    </section>
  );
};
