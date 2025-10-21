"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxLayersProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: ["start end", "end start"];
}

export const ParallaxLayers = ({ 
  children, 
  className = "",
  speed = 0.5,
  direction = "up",
  offset = ["start end", "end start"]
}: ParallaxLayersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ensure we're on the client side before using scroll hooks
  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  // Reduce parallax intensity on mobile for better performance
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

  // Don't render motion until client-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <div ref={containerRef} className={className}>
        <div>
          {children}
        </div>
      </div>
    );
  }

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
