"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ImageReveal, ScrollReveal, FloatingParticles } from "@/components/ui";
import { immersiveImages } from "@/data";

// Learning-focused images
const learningImages = immersiveImages.filter(img => 
  ['highfive', 'literacy', 'classroom', 'sensory', 'animal-cards'].includes(img.id)
);

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

const LearningSlide = ({ segment, index }: { segment: (typeof learningImages)[number]; index: number }) => {
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
              Learning
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
      </motion.article>
    </div>
  );
};

export const LearningGallery = () => {
  return (
    <section
      id="learning-gallery"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-label="Learning moments at BRUH"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.15),_transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-[70rem] px-6 text-center sm:px-8">
        <ScrollReveal direction="up" distance={40}>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
              Growth in action
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-[var(--color-deep)] leading-tight">
              Every breakthrough matters
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              From sensory exploration to academic milestones, these moments show how personalized learning creates lasting progress.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Gallery */}
      <div className="mt-16 space-y-0">
        {learningImages.map((segment, index) => (
          <div key={segment.id}>
            <LearningSlide segment={segment} index={index} />
            {index < learningImages.length - 1 && (
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
