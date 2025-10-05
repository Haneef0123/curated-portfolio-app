interface DecorativeUnderlineProps {
  color?: string;
  pathData?: string;
  className?: string;
}

export const DecorativeUnderline = ({
  color = "hsl(var(--mustard))",
  pathData = "M2 10C50 2 100 2 150 6C200 10 250 8 298 4",
  className = "",
}: DecorativeUnderlineProps) => {
  return (
    <svg
      className={`absolute -bottom-2 left-0 w-full ${className}`}
      viewBox="0 0 300 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={pathData} stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// Predefined variants
export const UnderlineVariants = {
  wavy: "M2 10C50 2 100 2 150 6C200 10 250 8 298 4",
  smooth: "M2 6C50 10 100 2 150 6C200 10 250 4 298 8",
  curved: "M2 8C50 4 100 10 150 6C200 2 250 8 298 4",
  straight: "M2 8C40 4 80 10 120 6C160 2 200 8 248 4",
} as const;
