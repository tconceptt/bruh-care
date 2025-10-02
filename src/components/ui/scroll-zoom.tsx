"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue, motion } from "framer-motion";

interface ScrollZoomProps {
  children: React.ReactNode;
  className?: string;
  zoomRange?: [number, number];
  offset?: ["start end", "end start"];
  scale?: MotionValue<number>;
}

export const ScrollZoom = ({ 
  children, 
  className = "",
  zoomRange = [1, 1.2],
  offset = ["start end", "end start"],
  scale: externalScale
}: ScrollZoomProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  // Always call useTransform hook, then conditionally use external scale
  const internalScale = useTransform(scrollYProgress, [0, 1], zoomRange);
  const scale = externalScale || internalScale;

  return (
    <div ref={containerRef} className={className}>
      <motion.div style={{ scale }}>
        {children}
      </motion.div>
    </div>
  );
};
