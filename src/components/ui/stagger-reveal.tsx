"use client";

import { useEffect, useRef, useState } from "react";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export const StaggerReveal = ({ 
  children, 
  className = "", 
  staggerDelay = 100,
  direction = "up",
  threshold = 0.1
}: StaggerRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const transformMap = {
    up: "translate3d(0, 40px, 0)",
    down: "translate3d(0, -40px, 0)",
    left: "translate3d(40px, 0, 0)",
    right: "translate3d(-40px, 0, 0)",
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={containerRef} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            style={{
              transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)`,
              transitionDelay: visible ? `${index * staggerDelay}ms` : "0ms",
              opacity: visible ? 1 : 0,
              transform: visible ? "translate3d(0,0,0)" : transformMap[direction],
              willChange: "opacity, transform",
            }}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          style={{
            transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : transformMap[direction],
            willChange: "opacity, transform",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
