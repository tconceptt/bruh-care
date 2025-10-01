"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const RayBurst = ({
  tone = "secondary",
  size = "md",
  className = "",
}: {
  tone?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const colorMap: Record<typeof tone, string> = {
    primary: "rgba(241, 91, 34, 0.85)",
    secondary: "rgba(254, 190, 41, 0.85)",
    accent: "rgba(77, 190, 158, 0.85)",
  };

  const lengthMap: Record<typeof size, number> = {
    sm: 52,
    md: 74,
    lg: 96,
  };

  const baseLength = lengthMap[size];
  const shades = [0.8, 1, 0.65];
  const angles = [-35, 0, 35];

  return (
    <div
      className={`ray-burst pointer-events-none relative flex items-end justify-center ${
        size === "lg" ? "h-28 w-28" : size === "md" ? "h-20 w-20" : "h-14 w-14"
      } ${className}`}
    >
      {angles.map((angle, index) => (
        <span
          key={angle}
          className="absolute bottom-0 left-1/2 block w-[6px] -translate-x-1/2"
          style={{
            height: `${baseLength - index * 10}px`,
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transformOrigin: "center bottom",
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.08))",
          }}
        >
          <span
            className="ray-beam block h-full w-full rounded-full"
            style={{
              background: `linear-gradient(180deg, ${colorMap[tone]} 0%, rgba(255,255,255,0) 100%)`,
              opacity: shades[index],
              animationDelay: `${index * 120}ms`,
            }}
          />
        </span>
      ))}
    </div>
  );
};

const transformMap: Record<string, string> = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(32px, 0, 0)",
  right: "translate3d(-32px, 0, 0)",
  scale: "scale(0.95)",
};

const Reveal = <T extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...rest
}: {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof transformMap;
} & Omit<React.JSX.IntrinsicElements[T], "ref" | "children">) => {
  const Component = (as ?? "div") as React.ElementType;
  const innerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = innerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transform = transformMap[direction] ?? transformMap.up;

  return (
    <Component
      ref={innerRef as React.Ref<HTMLElement>}
      className={className}
      style={{
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : transform,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

const focusAreas = [
  {
    id: "care",
    title: "Holistic Care Plans",
    summary:
      "Every child receives an individualized learning and care pathway that centers their strengths and needs.",
    details: [
      "Speech, motor, and sensory integration woven into daily routines",
      "Small-group moments that preserve dignity and foster belonging",
      "Gentle assessments that celebrate incremental breakthroughs",
    ],
  },
  {
    id: "family",
    title: "Family Partnership",
    summary:
      "Mothers and caregivers are welcomed as co-laborers, not bystanders, in their child’s growth.",
    details: [
      "Coaching circles that build confidence and reduce isolation",
      "Flexible schedules and respite support for single-parent homes",
      "Employment opportunities that create stability for families",
    ],
  },
  {
    id: "therapy",
    title: "Specialized Therapies",
    summary:
      "Targeted therapies are delivered in a setting that feels safe, warm, and personal.",
    details: [
      "Language enrichment through play, storytelling, and song",
      "Occupational therapy that supports fine and gross motor skills",
      "Emotional regulation practices anchored in trust and routine",
    ],
  },
  {
    id: "advocacy",
    title: "Inclusion & Advocacy",
    summary:
      "We walk with families to challenge stigma and open doors beyond our walls.",
    details: [
      "Home visits that help children transition confidently into community spaces",
      "Workshops for local schools and churches to embrace neurodiversity",
      "Storytelling that reframes children with intellectual disabilities as fully human",
    ],
  },
];

const dailyRhythms = [
  {
    time: "Morning Arrival",
    title: "A Warm Start",
    description:
      "Children are greeted by name, with familiar songs and sensory-friendly transitions that steady the day.",
    highlights: [
      "Soft lighting and tactile stations for grounding",
      "Nutrition check-ins and shared breakfast",
      "Circle moments where every voice is heard",
    ],
  },
  {
    time: "Midday Learning",
    title: "Purposeful Play",
    description:
      "Focused skill-building happens through art, movement, and guided social interactions.",
    highlights: [
      "Speech practice through imaginative play",
      "Adaptive movement sessions in small cohorts",
      "Quiet corners for self-regulation and reflection",
    ],
  },
  {
    time: "Afternoon Community",
    title: "Together Forward",
    description:
      "Families arrive for updates, shared victories, and planning for home routines.",
    highlights: [
      "Progress journals exchanged with caregivers",
      "Parent support huddles led by our team",
      "Preparation for safe transport back home",
    ],
  },
];

const impactStories = [
  {
    child: "Selam, age 9",
    headline: "Finding Her Voice",
    story:
      "Selam arrived quiet and guarded. With consistent speech practice and patient listening, she now initiates greetings, sings along during morning arrival, and comforts friends who are anxious.",
    progress: [
      "Spontaneous verbal communication in Amharic and English",
      "Improved fine motor control through daily art studio time",
      "Mother employed part-time at BRUH, creating stability at home",
    ],
  },
  {
    child: "Nahom, age 6",
    headline: "Confident Steps",
    story:
      "Nahom lives with cerebral palsy and was once kept indoors for safety. Through adaptive movement sessions and peer play, he now navigates the campus with pride and leads the goodbye song each afternoon.",
    progress: [
      "Expanded mobility with tailored physiotherapy",
      "Social initiation with two peer buddies",
      "Family-to-family mentorship supporting his mother",
    ],
  },
  {
    child: "Hanna, age 11",
    headline: "Belonging and Joy",
    story:
      "Hanna struggled with emotional regulation after past rejection. Through consistent routines, sensory supports, and caregiver coaching, she now participates in community outings and sleeps through the night for the first time in years.",
    progress: [
      "Self-regulation toolkit practiced daily",
      "Inclusive outings to local parks twice a month",
      "Mother facilitating weekend playdates with confidence",
    ],
  },
];

const values = [
  {
    title: "Seen & Known",
    description:
      "Every child is greeted with eye contact, their name, and a predictable rhythm that signals safety.",
  },
  {
    title: "Respect in Action",
    description:
      "We honor family stories, cultural practices, and the pace each child sets for their own growth.",
  },
  {
    title: "Hope With Backbone",
    description:
      "Progress is documented carefully so families can witness tangible change and celebrate each milestone.",
  },
];

const stats = [
  {
    label: "Years of trusted care",
    value: "17",
  },
  {
    label: "Children served since 2008",
    value: "250+",
  },
  {
    label: "Mothers employed or trained",
    value: "40",
  },
  {
    label: "Average caregiver relief hours / week",
    value: "25",
  },
];

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Our Approach" },
  { href: "#day", label: "Daily Life" },
  { href: "#stories", label: "Stories" },
  { href: "#support", label: "Support" },
];

export default function Home() {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0].id);
  const [storyIndex, setStoryIndex] = useState(0);

  const currentFocus = useMemo(
    () => focusAreas.find((item) => item.id === activeFocus) ?? focusAreas[0],
    [activeFocus]
  );

  const currentStory = impactStories[storyIndex];

  return (
    <div className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-40%] top-[-480px] h-[840px] rounded-[60%] bg-[radial-gradient(circle_at_center,_rgba(254,190,41,0.2),_transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-[380px] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.15),_transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 top-[1200px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(241,91,34,0.12),_transparent_70%)]"
      />
      <header className="sticky top-0 z-50 bg-[rgba(253,251,246,0.9)] backdrop-blur-md transition-shadow">
        <nav className="mx-auto flex max-w-[min(1280px,94vw)] items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
          <Link href="#hero" className="flex items-center gap-3">
            <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)]">
              BRUH Care
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[var(--color-primary)]">
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:hello@bruhcenter.org"
            className="hidden rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_12px_28px_rgba(241,91,34,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(241,91,34,0.28)] lg:inline-flex"
          >
            Connect
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[rgba(26,67,56,0.12)] bg-white shadow-[0_10px_24px_rgba(26,67,56,0.08)]">
              <span className="sr-only">Toggle navigation</span>
              <div className="space-y-[6px]">
                <span className="block h-[2px] w-5 rounded-full bg-[var(--color-deep)]" />
                <span className="block h-[2px] w-5 rounded-full bg-[var(--color-deep)]" />
                <span className="block h-[2px] w-5 rounded-full bg-[var(--color-deep)]" />
              </div>
            </summary>
            <div className="absolute right-0 mt-3 flex w-56 flex-col gap-3 rounded-2xl border border-[rgba(26,67,56,0.12)] bg-white/95 p-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-deep)] shadow-[0_18px_42px_rgba(26,67,56,0.12)]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="py-1 transition hover:text-[var(--color-primary)]">
                  {link.label}
                </Link>
              ))}
              <Link href="mailto:hello@bruhcenter.org" className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-white">
                Connect
              </Link>
            </div>
          </details>
        </nav>
      </header>
      <main className="relative mx-auto flex max-w-[min(1280px,94vw)] flex-col gap-24 px-4 pb-24 pt-16 sm:px-8 lg:px-12">
        <section id="hero" className="relative grid gap-10 overflow-hidden rounded-[28px] bg-transparent px-0 pb-10 pt-6 sm:grid-cols-[minmax(0,1fr)_360px]">
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-white/92 shadow-[0_24px_68px_rgba(26,67,56,0.07)] backdrop-blur" />
          <RayBurst tone="secondary" size="lg" className="-top-6 left-8" />
          <RayBurst tone="accent" size="md" className="-right-2 top-2 opacity-80" />
          <div className="space-y-10 px-6 sm:px-10 lg:px-14">
            <Reveal className="inline-flex items-center gap-3 rounded-full bg-[rgba(254,190,41,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              <Image src="/Biruhpng.png" alt="BRUH Care and Learning Center logo" width={120} height={120} priority />
              <span className="tracking-[0.18em] text-[var(--color-deep)]/70">
                Safe, loving, and developmentally nurturing since 2008
              </span>
            </Reveal>
            <Reveal className="space-y-6 text-balance" delay={80}>
              <h1 className="text-4xl font-semibold leading-tight text-[var(--color-deep)] sm:text-5xl lg:text-[3.65rem]">
                A sanctuary for children with intellectual disabilities—and the families who refuse to give up on them.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                BRUH Care and Learning Center provides holistic care, education, and advocacy for children who have been hidden from society. Here, they are seen, supported, and encouraged to grow in confidence, ability, and dignity.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-4" delay={120}>
              <Link
                href="mailto:hello@bruhcenter.org"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_42px_rgba(241,91,34,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(241,91,34,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                Start a conversation
              </Link>
              <Link
                href="#mission"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-deep)] shadow-[0_12px_28px_rgba(26,67,56,0.06)] transition hover:border-[var(--color-primary)]/60 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                See our approach
              </Link>
            </Reveal>
            <Reveal className="grid gap-6 rounded-[26px] bg-[rgba(77,190,158,0.12)] p-8 shadow-[0_18px_48px_rgba(26,67,56,0.08)] ring-1 ring-[rgba(77,190,158,0.16)] sm:grid-cols-2" delay={160}>
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-4xl font-semibold text-[var(--color-deep)]">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal
            className="relative isolate flex flex-col items-center justify-between gap-6 rounded-[26px] bg-[rgba(254,190,41,0.14)] px-6 py-8 text-[var(--color-deep)] shadow-[0_22px_56px_rgba(254,190,41,0.24)] ring-1 ring-[rgba(254,190,41,0.22)]"
            direction="left"
            delay={220}
          >
            <RayBurst tone="primary" size="sm" className="-right-2 top-4" />
        <Image
              src="/bruh-logo.svg"
              alt="BRUH symbol"
          width={180}
              height={180}
              className="h-auto w-40"
          priority
        />
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]">Mission</h2>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                We exist to provide individualized care and education for children with intellectual disabilities—many from low-income, single-parent homes—so they can grow in confidence and dignity. Families experience relief, hope, and practical support as their children make meaningful progress.
              </p>
            </div>
            <div className="rounded-[20px] bg-white/85 p-5 text-sm leading-relaxed text-[var(--color-deep)] shadow-[0_12px_30px_rgba(26,67,56,0.08)]">
              <p>
                “Families describe BRUH as safe, trustworthy, and life-changing—a place where their children are accepted without judgment.”
              </p>
            </div>
          </Reveal>
        </section>

        <section id="mission" className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal className="relative overflow-hidden rounded-[30px] bg-white/95 p-8 shadow-[0_20px_56px_rgba(26,67,56,0.08)] ring-1 ring-black/5">
            <RayBurst tone="accent" size="md" className="-top-8 right-8" />
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
                Why it matters
              </p>
              <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-[2.5rem]">
                Holistic care that honors each child
              </h2>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">
                Children at BRUH are not defined by their diagnosis. They are welcomed into a community that recognizes their humanity, centers their emotional safety, and cultivates measurable growth across language, motor skills, social connection, and self-regulation.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="space-y-3 rounded-2xl border border-[rgba(241,91,34,0.22)] bg-white px-5 py-6 shadow-[0_14px_32px_rgba(26,67,56,0.05)]">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-deep)]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="space-y-4 rounded-[30px] bg-[linear-gradient(145deg,_rgba(254,190,41,0.18),_rgba(77,190,158,0.2))] p-8 shadow-[0_22px_56px_rgba(26,67,56,0.08)] ring-1 ring-[rgba(26,67,56,0.06)]" delay={120} direction="left">
            <h3 className="text-lg font-semibold text-[var(--color-deep)]">Founded by lived experience</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              BRUH began in 2008 when Ms. Nardos Assefa refused to leave families without support after a decade of work with children who had been hidden away. Without funding, she opened the center using personal savings and the quiet conviction that every child deserves a place to belong.
            </p>
            <div className="rounded-[22px] bg-white/85 p-6 text-sm leading-relaxed text-[var(--text-muted)] shadow-[0_14px_36px_rgba(26,67,56,0.06)]">
              <p className="font-semibold text-[var(--color-deep)]">“I started BRUH so children wouldn’t be forced back into hiding.”</p>
              <p className="mt-3">
                What began as a handful of children in a small rented space has become a trusted refuge where progress is tracked carefully, caregivers are empowered, and stigma is actively dismantled.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="approach" className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
              Our approach
            </p>
            <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-[2.5rem]">
              Personalized pathways grounded in trust
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Each focus area blends therapeutic expertise with the warmth of community. Explore how care plans evolve to meet the needs of each child and family.
            </p>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((item) => {
                const isActive = item.id === activeFocus;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFocus(item.id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
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
          <div className="relative overflow-hidden rounded-[30px] bg-white p-8 shadow-[0_24px_64px_rgba(26,67,56,0.08)] ring-1 ring-black/5">
            <Reveal>
            <RayBurst tone="primary" size="md" className="-top-10 left-10" />
            <div className="relative space-y-5">
              <h3 className="text-2xl font-semibold text-[var(--color-deep)]">
                {currentFocus.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{currentFocus.summary}</p>
              <ul className="space-y-3 text-base leading-relaxed text-[var(--text-muted)]">
                {currentFocus.details.map((detail) => (
                  <li key={detail} className="flex gap-4">
                    <span className="mt-2 h-2 w-6 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{detail}</span>
          </li>
                ))}
              </ul>
            </div>
            </Reveal>
          </div>
        </section>

        <Reveal
          id="day"
          as="section"
          direction="up"
          className="relative overflow-hidden rounded-[32px] bg-white px-8 py-12 shadow-[0_26px_68px_rgba(26,67,56,0.08)] ring-1 ring-black/5"
        >
          <RayBurst tone="secondary" size="md" className="-left-6 top-10" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
                A day at BRUH
              </p>
              <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-[2.4rem]">
                Rhythms that build safety and growth
              </h2>
            </div>
            <Link
              href="mailto:visit@bruhcenter.org"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)]/70 bg-[rgba(77,190,158,0.15)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] shadow-[0_12px_28px_rgba(77,190,158,0.22)] transition hover:bg-[rgba(77,190,158,0.25)]"
            >
              Schedule a visit
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {dailyRhythms.map((moment) => (
              <div
                key={moment.title}
                className="space-y-4 rounded-[24px] border border-[rgba(26,67,56,0.08)] bg-white px-6 py-7 shadow-[0_16px_36px_rgba(26,67,56,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-secondary)]">
                  {moment.time}
                </p>
                <h3 className="text-lg font-semibold text-[var(--color-deep)]">
                  {moment.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{moment.description}</p>
                <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {moment.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-7 flex-shrink-0 rounded-full bg-[var(--color-primary)]/70" />
                      <span>{highlight}</span>
          </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <section id="stories" className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
              Founder’s story
            </p>
            <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-[2.5rem]">
              From humble beginnings to a trusted refuge
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              When a partner organization closed in 2008, families who had finally brought their children out of hiding were left without options. Ms. Nardos Assefa used personal funds to keep doors open, determined that progress wouldn’t disappear overnight. That decision sparked BRUH—built on courage, community, and the belief that every child is worthy of opportunity.
            </p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Today, the center remains rooted in that same conviction: to stand beside families who are navigating intellectual disabilities with limited resources, and to ensure their children are embraced with patience, respect, and love.
            </p>
          </Reveal>
          <Reveal
            className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_rgba(254,190,41,0.32),_rgba(77,190,158,0.32))] p-9 text-[var(--color-deep)] shadow-[0_28px_72px_rgba(26,67,56,0.13)]"
            direction="left"
            delay={120}
          >
            <RayBurst tone="primary" size="md" className="-right-4 top-6" />
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/80">
                Words from Nardos
              </p>
              <p className="text-2xl font-semibold leading-relaxed">
                “I promised the children and mothers who trusted us that they would never again be turned away. BRUH is that promise in action—steady, compassionate, and determined.”
              </p>
              <p className="text-sm text-[var(--color-deep)]/70">— Ms. Nardos Assefa, Founder & Director</p>
        </div>
          </Reveal>
        </section>

        <Reveal
          id="support"
          as="section"
          direction="up"
          className="relative overflow-hidden rounded-[32px] bg-white/95 px-8 py-12 shadow-[0_26px_68px_rgba(26,67,56,0.08)] ring-1 ring-black/5"
        >
          <RayBurst tone="accent" size="md" className="-top-8 left-12" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
                Families speak
              </p>
              <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-[2.4rem]">
                Real progress, real relief
              </h2>
            </div>
            <div className="flex gap-3">
              {impactStories.map((story, index) => {
                const isActive = index === storyIndex;
                return (
                  <button
                    key={story.child}
                    type="button"
                    onClick={() => setStoryIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      isActive
                        ? "bg-[var(--color-primary)]"
                        : "bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/60"
                    }`}
                    aria-label={`Show story for ${story.child}`}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-[rgba(77,190,158,0.18)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-deep)]">
                {currentStory.child}
              </span>
              <h3 className="text-2xl font-semibold text-[var(--color-deep)]">
                {currentStory.headline}
              </h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{currentStory.story}</p>
            </div>
            <div className="space-y-4 rounded-[26px] border border-[rgba(77,190,158,0.24)] bg-white p-6 text-sm leading-relaxed text-[var(--text-muted)] shadow-[0_16px_36px_rgba(26,67,56,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)]">
                What progress looks like
              </p>
              <ul className="space-y-3">
                {currentStory.progress.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-deep)]" />
                    <span>{item}</span>
          </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal
          id="support"
          as="section"
          direction="up"
          className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_rgba(254,190,41,0.25),_rgba(77,190,158,0.3))] px-10 py-12 text-[var(--color-deep)] shadow-[0_28px_72px_rgba(26,67,56,0.12)]"
        >
          <RayBurst tone="secondary" size="lg" className="-left-10 top-6" />
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/80">
                Be part of the story
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Help keep BRUH a sanctuary for children and families in Ethiopia.
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-deep)]/80">
                Partner with us through sponsorship, resource sharing, or professional collaboration. Your support extends specialized care to children who might otherwise go unseen.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:partner@bruhcenter.org"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] shadow-[0_18px_42px_rgba(26,67,56,0.15)] transition hover:-translate-y-0.5"
              >
                Explore partnerships
              </Link>
              <Link
                href="tel:+251911000000"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-deep)]/30 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] transition hover:border-[var(--color-deep)]/60"
              >
                Speak with our team
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="footer"
          className="flex flex-col gap-4 border-t border-[rgba(26,67,56,0.08)] pt-8 text-sm text-[var(--text-muted)]"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm space-y-3">
              <div className="flex items-center gap-3">
                <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={36} height={36} className="h-9 w-9" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-deep)]">
                  BRUH Care
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                BRUH Care and Learning Center provides holistic education, therapy, and advocacy so children with intellectual disabilities—and their families—can flourish with dignity.
              </p>
            </div>
            <div className="grid gap-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)] sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-[var(--color-primary)]">Explore</p>
                {navLinks.map((link) => (
                  <Link key={`footer-${link.href}`} href={link.href} className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-[var(--color-primary)]">Connect</p>
                <Link href="mailto:hello@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                  hello@bruhcenter.org
                </Link>
                <Link href="tel:+251911000000" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                  +251 911 000 000
                </Link>
                <p className="text-[var(--text-muted)]">Addis Ababa, Ethiopia</p>
              </div>
              <div className="space-y-3">
                <p className="text-[var(--color-primary)]">Support</p>
                <Link href="mailto:partner@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                  Partnerships
                </Link>
                <Link href="mailto:visit@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                  Schedule a visit
                </Link>
              </div>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
            © {new Date().getFullYear()} BRUH Care and Learning Center. All rights reserved.
          </p>
        </Reveal>
      </main>
    </div>
  );
}
