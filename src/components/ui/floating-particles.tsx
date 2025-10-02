"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
  className?: string;
  count?: number;
  speed?: number;
}

const particleVariants = {
  animate: {
    y: [-20, -100, -20],
    x: [-10, 10, -10],
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const FloatingParticles = ({ 
  className = "",
  count = 12,
  speed = 4
}: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);
  }, [count]);

  const colors = [
    "rgba(254,190,41,0.4)",
    "rgba(77,190,158,0.4)", 
    "rgba(241,91,34,0.4)",
    "rgba(255,255,255,0.3)"
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            backgroundColor: colors[particle.id % colors.length],
            filter: "blur(0.5px)",
          }}
          variants={particleVariants}
          animate="animate"
          transition={{
            duration: speed,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Additional floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-2 h-2 bg-[rgba(254,190,41,0.3)] rounded-full"
        animate={{
          y: [-30, -80, -30],
          x: [-15, 15, -15],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[rgba(77,190,158,0.4)] rounded-full"
        animate={{
          y: [-25, -70, -25],
          x: [10, -10, 10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-[rgba(241,91,34,0.3)] rounded-full"
        animate={{
          y: [-35, -90, -35],
          x: [-20, 20, -20],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
};
