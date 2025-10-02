"use client";

import { useEffect, useRef } from "react";

interface FloatingAnimationProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  speed?: number;
}

export const FloatingAnimation = ({ 
  children, 
  className = "",
  intensity = 0.5,
  speed = 2
}: FloatingAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed / (1000 / speed)) % 1;
      
      const y = Math.sin(progress * Math.PI * 2) * intensity;
      const x = Math.cos(progress * Math.PI * 2 * 0.7) * (intensity * 0.3);
      
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
