"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui";
import { galleryImages } from "@/data";

const toneGradient: Record<string, string> = {
  warm: "from-[rgba(254,190,41,0.15)] via-[rgba(254,190,41,0.05)] to-transparent",
  calm: "from-[rgba(77,190,158,0.15)] via-[rgba(77,190,158,0.05)] to-transparent",
  vibrant: "from-[rgba(241,91,34,0.15)] via-[rgba(241,91,34,0.05)] to-transparent",
};

const toneBadge: Record<string, string> = {
  warm: "bg-[rgba(254,190,41,0.2)] text-[rgba(254,190,41,0.9)] border-[rgba(254,190,41,0.3)]",
  calm: "bg-[rgba(77,190,158,0.2)] text-[rgba(77,190,158,0.9)] border-[rgba(77,190,158,0.3)]",
  vibrant: "bg-[rgba(241,91,34,0.2)] text-[rgba(241,91,34,0.9)] border-[rgba(241,91,34,0.3)]",
};

const GalleryItem = ({ image, index }: { image: typeof galleryImages[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(26,67,56,0.08)] hover:shadow-[0_16px_48px_rgba(26,67,56,0.12)] transition-all duration-500 flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image Container - Flexible height */}
      <div className="relative flex-1 min-h-[200px] overflow-hidden">
        <Image
          src={image.image}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1536px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={index < 6}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${toneGradient[image.tone]}`} />
        
        {/* Tone Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] border ${toneBadge[image.tone]}`}>
            {image.toneLabel}
          </span>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content - Fixed height for consistency */}
      <div className="p-4 flex-shrink-0">
        {image.title && (
          <h3 className="text-base font-semibold text-[var(--color-deep)] mb-2 line-clamp-2">
            {image.title}
          </h3>
        )}
        <p className="text-xs leading-relaxed text-[var(--text-muted)] line-clamp-3">
          {image.description}
        </p>
      </div>
    </motion.div>
  );
};

const MasonryGrid = ({ images }: { images: typeof galleryImages }) => {
  // Create a more sophisticated layout with varied sizes and positioning
  const getItemLayout = (index: number) => {
    const layouts = [
      { size: "col-span-1 row-span-2", className: "h-[420px]" }, // Tall
      { size: "col-span-1 row-span-1", className: "h-[280px]" }, // Standard
      { size: "col-span-1 row-span-1", className: "h-[320px]" }, // Medium
      { size: "col-span-1 row-span-2", className: "h-[400px]" }, // Tall
      { size: "col-span-1 row-span-1", className: "h-[260px]" }, // Short
      { size: "col-span-1 row-span-1", className: "h-[300px]" }, // Medium
      { size: "col-span-1 row-span-1", className: "h-[340px]" }, // Medium-tall
      { size: "col-span-1 row-span-2", className: "h-[380px]" }, // Tall
      { size: "col-span-1 row-span-1", className: "h-[290px]" }, // Standard
      { size: "col-span-1 row-span-1", className: "h-[310px]" }, // Medium
      { size: "col-span-1 row-span-1", className: "h-[270px]" }, // Short
      { size: "col-span-1 row-span-1", className: "h-[330px]" }, // Medium-tall
    ];
    return layouts[index % layouts.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-[280px]">
      {images.map((image, index) => {
        const layout = getItemLayout(index);
        return (
          <div 
            key={image.id} 
            className={`${layout.size} ${layout.className} group`}
          >
            <GalleryItem image={image} index={index} />
          </div>
        );
      })}
    </div>
  );
};

const FilterTabs = ({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: string; 
  onFilterChange: (filter: string) => void;
}) => {
  const filters = [
    { id: "all", label: "All Moments" },
    { id: "warm", label: "Warm Connections" },
    { id: "calm", label: "Calm Focus" },
    { id: "vibrant", label: "Vibrant Energy" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
            activeFilter === filter.id
              ? "bg-[var(--color-primary)] text-white shadow-[0_8px_24px_rgba(241,91,34,0.3)]"
              : "bg-white text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--surface-subtle)] shadow-[0_4px_16px_rgba(26,67,56,0.06)]"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export const BeautifulGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.tone === activeFilter);

  return (
    <section
      id="beautiful-gallery"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-label="Beautiful moments at BRUH"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-[-40%] top-0 h-[300px] rounded-[60%] bg-[radial-gradient(circle,_rgba(254,190,41,0.08),_transparent_70%)]" />
        <div className="absolute bottom-0 right-[-20%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.06),_transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <ScrollReveal direction="up" distance={40}>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
              Moments that matter
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-[var(--color-deep)] leading-tight">
              Every day brings new stories
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              These images capture the essence of BRUH—the joy, growth, and connections that happen when children are supported with love and understanding.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Filter Tabs */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mt-12">
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MasonryGrid images={filteredImages} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
