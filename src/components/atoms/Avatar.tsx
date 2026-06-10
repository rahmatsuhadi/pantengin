"use client";

import Image from "next/image";
import { HTMLAttributes, forwardRef } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size = "md", className = "", ...props }, ref) => {
    const sizes = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
    };

    const initials = fallback
      ? fallback
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "?";

    return (
      <div
        ref={ref}
        className={`relative inline-flex shrink-0 overflow-hidden rounded-full bg-surface-2 ${sizes[size]} ${className}`}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || fallback || "Avatar"}
            fill
            className="object-cover"
            sizes={size === "xl" ? "64px" : size === "lg" ? "48px" : size === "md" ? "40px" : "32px"}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-medium text-secondary">
            {initials}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";