"use client";

import { useEffect, useRef, useState } from "react";

interface HeroRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  duration?: number;
  threshold?: number;
}

export const HeroReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 1.2,
  threshold = 0.1
}: HeroRevealProps) => {
  const innerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const transformMap = {
    up: "translate3d(0, 80px, 0) scale(0.95)",
    down: "translate3d(0, -80px, 0) scale(0.95)",
    left: "translate3d(80px, 0, 0) scale(0.95)",
    right: "translate3d(-80px, 0, 0) scale(0.95)",
    scale: "scale(0.8) translate3d(0, 40px, 0)",
    rotate: "rotate(-5deg) translate3d(0, 60px, 0) scale(0.9)",
  };

  useEffect(() => {
    const node = innerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const transform = transformMap[direction] ?? transformMap.up;

  return (
    <div
      ref={innerRef as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0) scale(1) rotate(0deg)" : transform,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
