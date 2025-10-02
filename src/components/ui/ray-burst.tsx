interface RayBurstProps {
  tone?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const colorMap: Record<NonNullable<RayBurstProps["tone"]>, string> = {
  primary: "rgba(241, 91, 34, 0.85)",
  secondary: "rgba(254, 190, 41, 0.85)",
  accent: "rgba(77, 190, 158, 0.85)",
};

const lengthMap: Record<NonNullable<RayBurstProps["size"]>, number> = {
  sm: 52,
  md: 74,
  lg: 96,
  xl: 128,
};

export const RayBurst = ({
  tone = "secondary",
  size = "md",
  className = "",
}: RayBurstProps) => {
  const baseLength = lengthMap[size];
  const shades = [0.8, 1, 0.65];
  const angles = [-35, 0, 35];

  return (
    <div
      className={`ray-burst pointer-events-none relative flex items-end justify-center ${
        size === "xl" ? "h-40 w-40" : size === "lg" ? "h-28 w-28" : size === "md" ? "h-20 w-20" : "h-14 w-14"
      } ${className}`}
    >
      {angles.map((angle, index) => (
        <span
          key={angle}
          className="absolute bottom-0 left-1/2 block w-[6px] -translate-x-1/2"
          style={{
            height: `${baseLength - index * 10}px`,
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transformOrigin: "center bottom",
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.08))",
          }}
        >
          <span
            className="ray-beam block h-full w-full rounded-full"
            style={{
              background: `linear-gradient(180deg, ${colorMap[tone]} 0%, rgba(255,255,255,0) 100%)`,
              opacity: shades[index],
              animationDelay: `${index * 120}ms`,
            }}
          />
        </span>
      ))}
    </div>
  );
};
