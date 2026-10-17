import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "muted";
}

const dotStyles = {
  primary: "bg-primary",
  secondary: "bg-forest-green",
  accent: "bg-coral",
  muted: "bg-mustard",
} as const;

/**
 * Small uppercase eyebrow that opens a section, with a restrained accent dot.
 * Section identity comes from the label; colour is decoration only.
 */
export const SectionBadge = ({
  children,
  className,
  variant = "primary",
}: SectionBadgeProps) => {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn("h-1.5 w-1.5 rounded-full", dotStyles[variant])}
        aria-hidden="true"
      />
      <span className="eyebrow text-muted-foreground">{children}</span>
    </div>
  );
};
