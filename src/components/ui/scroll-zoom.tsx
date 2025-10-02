"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollZoomProps {
  children: React.ReactNode;
  className?: string;
  zoomRange?: [number, number];
  offset?: [string, string];
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

  const scale = externalScale || useTransform(scrollYProgress, [0, 1], zoomRange);

  return (
    <div ref={containerRef} className={className}>
      <div style={{ scale }}>
        {children}
      </div>
    </div>
  );
};
