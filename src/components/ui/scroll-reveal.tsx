"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  duration?: number;
  delay?: number;
  offset?: ["start end", "end start"];
}

export const ScrollReveal = ({ 
  children, 
  className = "",
  direction = "up",
  distance = 100,
  duration = 0.8,
  delay = 0,
  offset = ["start end", "end start"]
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const directionMap = {
    up: [0, -distance],
    down: [0, distance],
    left: [-distance, 0],
    right: [distance, 0],
    fade: [0, 0],
  };

  const [x, y] = directionMap[direction];

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], [x, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{
          opacity,
          x: direction === "left" || direction === "right" ? translateX : 0,
          y: direction === "up" || direction === "down" || direction === "fade" ? translateY : 0,
        }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
