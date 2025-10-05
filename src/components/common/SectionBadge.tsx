"use client";

import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "muted";
}

const variantStyles = {
  primary: "bg-warm-brown/10 border-warm-brown/30 text-warm-brown",
  secondary: "bg-forest-green/10 border-forest-green/30 text-forest-green",
  accent: "bg-coral/10 border-coral/30 text-coral",
  muted: "bg-mustard/10 border-mustard/30 text-mustard",
};

export const SectionBadge = ({
  children,
  className,
  variant = "primary",
}: SectionBadgeProps) => {
  return (
    <div className={cn("inline-block mb-6", className)}>
      <div
        className={cn("px-4 py-2 border rounded-full", variantStyles[variant])}
      >
        <span className="text-sm font-semibold">{children}</span>
      </div>
    </div>
  );
};
