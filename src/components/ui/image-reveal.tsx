"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageRevealProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  zoomRange?: [number, number, number];
  offset?: ["start end", "end start"];
}

export const ImageReveal = ({ 
  src,
  alt,
  className = "",
  priority = false,
  zoomRange = [1.1, 1, 0.9],
  offset = ["start end", "end start"]
}: ImageRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], zoomRange);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="relative h-full w-full"
        style={{
          scale,
          opacity,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </motion.div>
    </div>
  );
};
