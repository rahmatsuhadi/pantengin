
import { motion } from "framer-motion";

interface RatingProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

export function Rating({ value = 0, max = 10, size = "md", showValue = true }: RatingProps) {
  const percentage = (value / max) * 100;

  const sizes = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-18 h-18 text-base",
  };

  const strokeSizes = {
    sm: 3,
    md: 4,
    lg: 5,
  };

  const circumference = 2 * Math.PI * (size === "sm" ? 18 : size === "md" ? 26 : 34);
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = (val: number) => {
    if (val >= 8) return "stroke-green-400";
    if (val >= 6) return "stroke-accent-secondary";
    if (val >= 4) return "stroke-accent-primary";
    return "stroke-red-400";
  };

  return (
    <div className="inline-flex items-center gap-2">
      <div className={`relative ${sizes[size]} flex-shrink-0`}>
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${(size === "sm" ? 44 : size === "md" ? 60 : 76)} ${(size === "sm" ? 44 : size === "md" ? 60 : 76)}`}>
          <circle
            cx={size === "sm" ? 22 : size === "md" ? 30 : 38}
            cy={size === "sm" ? 22 : size === "md" ? 30 : 38}
            r={size === "sm" ? 18 : size === "md" ? 26 : 34}
            stroke="currentColor"
            strokeWidth={strokeSizes[size]}
            fill="none"
            className="text-zinc-800"
          />
          <motion.circle
            cx={size === "sm" ? 22 : size === "md" ? 30 : 38}
            cy={size === "sm" ? 22 : size === "md" ? 30 : 38}
            r={size === "sm" ? 18 : size === "md" ? 26 : 34}
            stroke="currentColor"
            strokeWidth={strokeSizes[size]}
            fill="none"
            strokeLinecap="round"
            className={getColor(value)}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-bold font-display text-text-primary">
            {value.toFixed(1)}
          </span>
        </div>
      </div>
      {showValue && (
        <span className="text-sm text-text-secondary">
          / {max}
        </span>
      )}
    </div>
  );
}