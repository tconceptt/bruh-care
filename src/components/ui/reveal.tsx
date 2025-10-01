"use client";

import { useEffect, useRef, useState } from "react";

const transformMap: Record<string, string> = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(32px, 0, 0)",
  right: "translate3d(-32px, 0, 0)",
  scale: "scale(0.95)",
};

interface RevealProps<T extends keyof React.JSX.IntrinsicElements = "div"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof transformMap;
}

export const Reveal = <T extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...rest
}: RevealProps<T> & Omit<React.JSX.IntrinsicElements[T], "ref" | "children">) => {
  const Component = (as ?? "div") as React.ElementType;
  const innerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transform = transformMap[direction] ?? transformMap.up;

  return (
    <Component
      ref={innerRef as React.Ref<HTMLElement>}
      className={className}
      style={{
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : transform,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
