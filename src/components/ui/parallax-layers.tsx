"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxLayersProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: [string, string];
}

export const ParallaxLayers = ({ 
  children, 
  className = "",
  speed = 0.5,
  direction = "up",
  offset = ["start end", "end start"]
}: ParallaxLayersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  // Reduce parallax intensity on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedSpeed = isMobile ? speed * 0.3 : speed;

  const directionMap = {
    up: [0, -adjustedSpeed * 100],
    down: [0, adjustedSpeed * 100],
    left: [-adjustedSpeed * 100, 0],
    right: [adjustedSpeed * 100, 0],
  };

  const [x, y] = directionMap[direction];

  const translateX = useTransform(scrollYProgress, [0, 1], [x, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{
          x: direction === "left" || direction === "right" ? translateX : 0,
          y: direction === "up" || direction === "down" ? translateY : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
