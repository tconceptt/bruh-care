"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ImageReveal, ScrollReveal, ParallaxLayers, FloatingParticles } from "@/components/ui";
import { immersiveImages } from "@/data";

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

const ImmersiveSlide = ({ segment, index }: { segment: (typeof immersiveImages)[number]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimize spring physics for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const springConfig = isMobile 
    ? { stiffness: 50, damping: 25, restDelta: 0.01 }
    : { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Advanced zoom with spring physics
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.2, 1, 1, 0.95]), springConfig);

  // Smooth opacity transitions
  const imageOpacity = useSpring(useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3]), springConfig);

  // Content reveal with staggered timing
  const copyOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0, 0, 1, 1, 0]), springConfig);

  const copyY = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [60, 30, 0, -30]), springConfig);

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.6]);

  // Track when slide is in view
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsInView(latest > 0.1 && latest < 0.9);
  });

  return (
    <div ref={containerRef} className="relative h-[120vh] sm:h-[120vh] md:h-[140vh]">
      <motion.article
        className="sticky top-0 flex h-[100vh] sm:h-[100svh] flex-col overflow-hidden rounded-[16px] sm:rounded-[36px] md:rounded-[48px] bg-gradient-to-br from-black/20 to-black/40 shadow-[0_20px_60px_rgba(15,34,28,0.3)] sm:shadow-[0_40px_120px_rgba(15,34,28,0.4)] backdrop-blur-sm border border-white/10"
        style={{ scale }}
      >
        {/* Main Image with Advanced Reveal */}
        <motion.div 
          className="absolute inset-0" 
          style={{ opacity: imageOpacity }}
        >
          <ImageReveal
            src={segment.image}
            alt={segment.alt}
            priority={index === 0}
            sizes="100vw"
            zoomRange={[1.2, 1, 0.95]}
            offset={["start end", "end start"]}
            className="h-full w-full"
          />
        </motion.div>

        {/* Dynamic Background Gradients */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t ${toneGradient[segment.tone ?? "warm"]}`}
          style={{ y: backgroundY, opacity: backgroundOpacity }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Floating Particles Background */}
        <ParallaxLayers speed={0.3} direction="up" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-700" />
        </ParallaxLayers>

        {/* Content with Advanced Animations */}
        <motion.div
          className="relative mt-auto flex flex-col gap-4 p-4 pb-12 text-white sm:gap-6 sm:p-8 sm:pb-20 lg:p-16 lg:gap-8 lg:pb-24"
          style={{ opacity: copyOpacity, y: copyY }}
        >
          {/* Badge with Enhanced Animation */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={`inline-flex rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-[0.28em] sm:tracking-[0.32em] ${toneBadge[segment.tone ?? "warm"]}`}>
              BRUH
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/70 hidden sm:inline">
              Life in motion
            </span>
          </motion.div>

          {/* Title with Staggered Animation */}
          {segment.title && (
            <ScrollReveal direction="up" distance={30} delay={0.3}>
              <h3 className="text-[clamp(1.8rem,6vw,4.2rem)] font-semibold leading-tight tracking-tight">
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

          {/* Description with Smooth Reveal */}
          {segment.description && (
            <ScrollReveal direction="up" distance={20} delay={0.5}>
              <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 font-light">
                {segment.description}
              </p>
            </ScrollReveal>
          )}

          {/* Decorative Line */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>
      </motion.article>
    </div>
  );
};

export const ImmersiveGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="immersive-gallery"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
      aria-label="Gallery of life at BRUH"
    >
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <div className="absolute inset-x-[-40%] top-0 h-[480px] rounded-[60%] bg-[radial-gradient(circle,_rgba(241,91,34,0.15),_transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.2),_transparent_70%)]" />
        <div className="absolute top-1/2 right-[-20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(254,190,41,0.12),_transparent_70%)]" />
      </motion.div>

      {/* Floating Background Particles */}
      <ParallaxLayers speed={0.2} direction="up" className="absolute inset-0 pointer-events-none -z-5">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-[rgba(254,190,41,0.1)] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[rgba(77,190,158,0.15)] rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-[rgba(241,91,34,0.12)] rounded-full animate-pulse delay-1000" />
      </ParallaxLayers>

      {/* Enhanced Header Section */}
      <div className="mx-auto max-w-[80rem] px-6 text-center sm:px-8 lg:px-12">
        <ScrollReveal direction="up" distance={60} delay={0.2}>
          <div className="mx-auto max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
                Life in motion
              </p>
            </motion.div>

            <motion.h2 
              className="text-[clamp(2.5rem,6vw,4rem)] font-semibold text-[var(--color-deep)] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Move through the moments our families never forget
            </motion.h2>

            <motion.p 
              className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Each frame holds for a breath—letting you notice the hand squeezes, the roars of laughter, and the steady confidence building in the room. This is where growth happens, one moment at a time.
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* Seamless Image Gallery */}
      <div className="mt-24 space-y-0">
        {immersiveImages.map((segment, index) => (
          <div key={segment.id}>
            <ImmersiveSlide segment={segment} index={index} />
            {/* Floating particles between images (except for the last one) */}
            {index < immersiveImages.length - 1 && (
              <div className="relative h-[15vh] sm:h-[20vh] bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background)]">
                <FloatingParticles 
                  count={6} 
                  speed={4}
                  className="opacity-50 sm:opacity-60"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(254,190,41,0.02)] to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Transition Element */}
      <motion.div
        className="relative h-32 bg-gradient-to-b from-transparent to-[var(--background)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-50px" }}
      />
    </section>
  );
};
