"use client";

import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "destructive";
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = "default", size = "md", className = "", ...props }, ref) => {
    const variants = {
      default: "bg-bg-surface-2 text-text-secondary",
      primary: "bg-accent-primary/20 text-accent-primary",
      secondary: "bg-accent-secondary/20 text-accent-secondary",
      success: "bg-green-500/20 text-green-400",
      warning: "bg-amber-500/20 text-amber-400",
      destructive: "bg-red-500/20 text-red-400",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center gap-1 font-medium rounded-badge
          ${variants[variant]} ${sizes[size]} ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";