"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryImages } from "@/data";
import { ScrollReveal, ParallaxLayers, Lightbox } from "@/components/ui";
import { Header, Footer } from "@/components";

const GalleryIntro = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <ParallaxLayers speed={0.25} direction="up" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[-40%] top-[-10%] h-[360px] rounded-[60%] bg-[radial-gradient(circle,_rgba(254,190,41,0.18),_transparent_70%)]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.18),_transparent_70%)]" />
        <div className="absolute left-[-15%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(241,91,34,0.12),_transparent_70%)]" />
      </ParallaxLayers>

      <ScrollReveal direction="up" distance={60}>
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/70 sm:text-sm">
            BRUH care in focus
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-tight text-[var(--color-deep)]">
            Gallery of belonging
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Every image is a moment we hold onto—proof that when children with intellectual disabilities are seen, celebrated, and supported, their confidence reaches every corner of the room.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

const GalleryGrid = () => {
  const images = useMemo(() => galleryImages, []);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-[-30%] top-0 h-[420px] rounded-[60%] bg-[radial-gradient(circle,_rgba(254,190,41,0.12),_transparent_70%)]" />
        <div className="absolute bottom-0 right-[-20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.15),_transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Desktop/Tablet Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((item, index) => {
            const isLarge = index === 0 || index === 3 || index === 6;
            const isWide = index === 1 || index === 4;
            const colSpan = isLarge ? 'md:col-span-2 lg:col-span-1' : isWide ? 'md:col-span-2 lg:col-span-2' : '';
            
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                distance={40}
                delay={0.1 + (index % 3) * 0.1}
              >
                <div 
                  className={`group relative overflow-hidden rounded-[24px] lg:rounded-[32px] bg-white shadow-[0_12px_40px_rgba(26,67,56,0.08)] lg:shadow-[0_20px_60px_rgba(26,67,56,0.12)] border border-[rgba(26,67,56,0.06)] lg:border-[rgba(26,67,56,0.08)] transition-all duration-500 hover:shadow-[0_24px_80px_rgba(26,67,56,0.15)] hover:-translate-y-1 cursor-pointer ${colSpan} ${
                    isLarge ? 'aspect-[4/3]' : 
                    isWide ? 'aspect-[3/2]' : 
                    'aspect-[4/5]'
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes={isLarge ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" : 
                             isWide ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" :
                             "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                      className="object-cover transition duration-700 group-hover:scale-105"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[var(--color-primary)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Click to view indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="inline-flex rounded-full bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-deep)] shadow-[0_8px_24px_rgba(26,67,56,0.15)] backdrop-blur-sm">
                        {item.toneLabel}
                      </div>
                      {item.title && (
                        <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:hidden">
          {images.map((item, index) => {
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                distance={40}
                delay={0.1 + index * 0.05}
              >
                <div 
                  className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_8px_32px_rgba(26,67,56,0.08)] border border-[rgba(26,67,56,0.06)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(26,67,56,0.12)] cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[var(--color-primary)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Click to view indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                        {item.toneLabel}
                      </div>
                      {item.title && (
                        <h3 className="text-lg font-semibold leading-tight text-[var(--color-deep)] sm:text-xl">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      
      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </section>
  );
};

const GalleryCTA = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(circle,_rgba(77,190,158,0.14),_transparent_70%)]" />
      <ScrollReveal direction="up" distance={40}>
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-center sm:px-8">
          <h2 className="text-[clamp(1.8rem,5vw,3.2rem)] font-semibold text-[var(--color-deep)]">
            Want to visit BRUH Care?
          </h2>
          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            We&apos;d love to show you around. Reach out to plan a visit, volunteer with us, or document the moments that move you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] sm:gap-4 sm:text-sm">
            <Link
              href="mailto:hello@bruhcenter.org"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-white transition hover:-translate-y-0.5 sm:px-6 sm:py-3"
            >
              Contact the team
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-deep)]/30 bg-white/70 px-5 py-2.5 text-[var(--color-deep)] transition hover:border-[var(--color-deep)]/60 sm:px-6 sm:py-3"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      
      {/* Header spacer to prevent content from sitting under fixed header */}
      <div className="h-16 lg:h-20" />
      
      <main className="relative">
        <GalleryIntro />
        <GalleryGrid />
        <GalleryCTA />
        
        <Footer />
      </main>
    </div>
  );
}

