import { RayBurst, Reveal } from "@/components/ui";
import { values } from "@/data";

export const Mission = () => {
  return (
    <div id="mission" className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-8">
      <Reveal className="relative overflow-hidden rounded-[30px] bg-white/95 p-6 shadow-[0_20px_56px_rgba(26,67,56,0.08)] ring-1 ring-black/5 sm:p-8">
        <RayBurst tone="accent" size="md" className="-top-8 right-4 sm:right-8" />
        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
            Why it matters
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem] scroll-mt-16 lg:scroll-mt-20">
            Holistic care that honors each child
          </h2>
          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Children at BRUH are not defined by their diagnosis. They are welcomed into a community that recognizes their humanity, centers their emotional safety, and cultivates measurable growth across language, motor skills, social connection, and self-regulation.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="space-y-3 rounded-2xl border border-[rgba(241,91,34,0.22)] bg-white p-4 shadow-[0_14px_32px_rgba(26,67,56,0.05)] sm:space-y-4 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--color-deep)]">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="space-y-4 sm:space-y-6 rounded-[30px] bg-[linear-gradient(145deg,_rgba(254,190,41,0.18),_rgba(77,190,158,0.2))] p-6 shadow-[0_22px_56px_rgba(26,67,56,0.08)] ring-1 ring-[rgba(26,67,56,0.06)] sm:p-8" delay={120} direction="left">
        <h3 className="text-lg font-semibold text-[var(--color-deep)] sm:text-xl">Founded by lived experience</h3>
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          BRUH began in 2008 when Ms. Nardos Assefa refused to leave families without support after a decade of work with children who had been hidden away. Without funding, she opened the center using personal savings and the quiet conviction that every child deserves a place to belong.
        </p>
        <div className="rounded-[22px] bg-white/85 p-6 text-sm leading-relaxed text-[var(--text-muted)] shadow-[0_14px_36px_rgba(26,67,56,0.06)] sm:text-base">
          <p className="font-semibold text-[var(--color-deep)]">&ldquo;I started BRUH so children wouldn&apos;t be forced back into hiding.&rdquo;</p>
          <p className="mt-3 sm:mt-4">
            What began as a handful of children in a small rented space has become a trusted refuge where progress is tracked carefully, caregivers are empowered, and stigma is actively dismantled.
          </p>
        </div>
      </Reveal>
    </div>
  );
};
