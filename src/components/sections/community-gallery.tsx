"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ImageReveal, ScrollReveal, FloatingParticles } from "@/components/ui";
import { immersiveImages } from "@/data";

// Community-focused images
const communityImages = immersiveImages.filter(img => 
  ['hugging', 'highfive'].includes(img.id)
);

const StigmaNarrative = () => {
  return (
    <div className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-[-30%] top-0 h-[240px] rounded-[60%] bg-[radial-gradient(circle,_rgba(77,190,158,0.18),_transparent_70%)]" />
        <div className="absolute bottom-[-20%] right-[-15%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(254,190,41,0.14),_transparent_70%)]" />
      </div>

      <ScrollReveal direction="up" distance={50}>
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
            Breaking the silence
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              <h3 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-[var(--color-deep)] leading-tight">
                Bringing children into the light
              </h3>
              <p>
                Across Ethiopia, many children with intellectual disabilities still face challenges in being fully seen and supported. Families often struggle to find guidance and opportunities that nurture their children’s growth.
              </p>
              <p>
                Bruh Care offers a different path. We provide a welcoming space where children can practice communication, self-care, and social skills alongside patient coaches who understand their unique journey.
              </p>
              <p>
                Here, families connect with others walking a similar path, learning practical tools, sharing progress, and discovering a community where both children and parents belong with confidence and dignity.
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-3xl bg-[var(--surface-elevated)] p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,34,28,0.18)] border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(77,190,158,0.15),_transparent_65%)]" aria-hidden />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-primary)] font-semibold">
                  A mother shares
                </p>
                <blockquote className="text-lg sm:text-xl font-medium text-[var(--color-deep)] leading-relaxed">
                  “I never thought my son could find a school where he is accepted, but I found one here.”
                </blockquote>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <span>Parent at Bruh Care</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const toneGradient: Record<string, string> = {
  warm: "from-[rgba(254,190,41,0.4)] via-[rgba(254,190,41,0.1)] to-transparent",
  calm: "from-[rgba(77,190,158,0.4)] via-[rgba(77,190,158,0.1)] to-transparent",
  vibrant: "from-[rgba(241,91,34,0.4)] via-[rgba(241,91,34,0.1)] to-transparent",
};

const toneBadge: Record<string, string> = {
  warm: "bg-[rgba(254,190,41,0.25)] text-[rgba(254,190,41,0.9)]",
  calm: "bg-[rgba(77,190,158,0.25)] text-[rgba(77,190,158,0.9)]",
  vibrant: "bg-[rgba(241,91,34,0.25)] text-[rgba(241,91,34,0.9)]",
};

const CommunitySlide = ({ segment, index }: { segment: (typeof communityImages)[number]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimize spring physics for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const springConfig = isMobile 
    ? { stiffness: 50, damping: 25, restDelta: 0.01 }
    : { stiffness: 100, damping: 30, restDelta: 0.001 };

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.15, 1, 1, 0.95]), springConfig);

  const imageOpacity = useSpring(useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3]), springConfig);

  const copyOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0, 0, 1, 1, 0]), springConfig);

  const copyY = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [40, 20, 0, -20]), springConfig);

  const hasContent = Boolean(segment.title || segment.subtitle || segment.description);

  return (
    <div ref={containerRef} className="relative h-[110vh] sm:h-[110vh] md:h-[120vh]">
      <motion.article
        className="sticky top-0 flex h-[100vh] sm:h-[90vh] md:h-[100svh] flex-col overflow-hidden rounded-[16px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-black/20 to-black/40 shadow-[0_20px_60px_rgba(15,34,28,0.3)] sm:shadow-[0_30px_80px_rgba(15,34,28,0.4)] backdrop-blur-sm border border-white/10"
        style={{ scale }}
      >
        {/* Main Image */}
        <motion.div 
          className="absolute inset-0" 
          style={{ opacity: imageOpacity }}
        >
          <ImageReveal
            src={segment.image}
            alt={segment.alt}
            priority={index === 0}
            zoomRange={[1.1, 1, 0.95]}
            offset={["start end", "end start"]}
            className="h-full w-full"
          />
        </motion.div>

        {/* Background Gradients */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t ${toneGradient[segment.tone ?? "warm"]}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Content */}
        {hasContent && (
          <motion.div
            className="relative mt-auto flex flex-col gap-3 p-4 pb-10 text-white sm:gap-4 sm:p-6 sm:pb-12 md:p-8 md:pb-16 md:gap-6"
            style={{ opacity: copyOpacity, y: copyY }}
          >
            {/* Badge */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] ${toneBadge[segment.tone ?? "warm"]}`}>
                BRUH
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/70 hidden sm:inline">
                Community
              </span>
            </motion.div>

            {/* Title */}
            {segment.title && (
              <ScrollReveal direction="up" distance={25} delay={0.3}>
                <h3 className="text-[clamp(1.5rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight">
                  {segment.title}
                </h3>
              </ScrollReveal>
            )}

            {/* Subtitle */}
            {segment.subtitle && (
              <ScrollReveal direction="up" distance={20} delay={0.4}>
                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] sm:tracking-[0.32em] text-white/70 font-medium">
                  {segment.subtitle}
                </p>
              </ScrollReveal>
            )}

            {/* Description */}
            {segment.description && (
              <ScrollReveal direction="up" distance={15} delay={0.5}>
                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/90 font-light">
                  {segment.description}
                </p>
              </ScrollReveal>
            )}
          </motion.div>
        )}
      </motion.article>
    </div>
  );
};

export const CommunityGallery = () => {
  return (
    <section
      id="community-gallery"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-label="Community moments at BRUH"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-[-40%] top-0 h-[300px] rounded-[60%] bg-[radial-gradient(circle,_rgba(254,190,41,0.15),_transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-[70rem] px-6 text-center sm:px-8">
        <ScrollReveal direction="up" distance={40}>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
              Building community
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-[var(--color-deep)] leading-tight">
              Where belonging begins
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              These moments capture the heart of BRUH—children finding their place, building friendships, and discovering they belong.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Gallery */}
      <div className="mt-16 space-y-0">
        {communityImages.map((segment, index) => (
          <div key={segment.id}>
            <CommunitySlide segment={segment} index={index} />
            {index === 0 && <StigmaNarrative />}
            {index < communityImages.length - 1 && (
              <div className="relative h-[12vh] sm:h-[15vh] bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background)]">
                <FloatingParticles 
                  count={4} 
                  speed={3}
                  className="opacity-40 sm:opacity-50"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
