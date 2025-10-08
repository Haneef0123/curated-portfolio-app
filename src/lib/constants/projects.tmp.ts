import { TrendingUp, Users, Zap, LucideIcon } from "lucide-react";

export interface ProjectData {
  title: string;
  company: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  color: string;
}

export const PROJECTS: ProjectData[] = [
  {
    title: "Real-Time Gold Rate Tracker",
    company: "Upstox",
    description:
      "Engineered a real-time gold rate tracking platform with React, Redux, and Server-Side Rendering. Optimized data fetching and UI rendering for seamless user experience.",
    impact: "40% increase in user engagement",
    icon: TrendingUp,
    color: "bg-mustard/20 text-mustard",
  },
  {
    title: "IPO Application Platform",
    company: "Upstox",
    description:
      "Revamped the IPO application platform using Next.js and TypeScript with conditional form logic and user-centric validation workflows.",
    impact: "70% increase in successful applications",
    icon: Users,
    color: "bg-forest-green/20 text-forest-green",
  },
  {
    title: "Educational Platforms (UpLearn, Webinars)",
    company: "Upstox",
    description:
      "Developed interactive educational platforms with Tailwind CSS, leveraging Mixpanel event tracking and user segmentation for better engagement.",
    impact: "30% improvement in retention",
    icon: Zap,
    color: "bg-coral/20 text-coral",
  },
  {
    title: "Real-Time Operational Dashboard",
    company: "MSys Technologies",
    description:
      "Built a comprehensive dashboard using Redux Saga and React Hooks, optimizing data polling and UI state updates for instant data visibility.",
    impact: "Enabled instant decision-making",
    icon: TrendingUp,
    color: "bg-warm-brown/20 text-warm-brown",
  },
];

export const OTHER_ACHIEVEMENTS = [
  "50% reduction in drop-off rates through optimized onboarding flows",
  "30% reduction in API latency through smart caching strategies",
  "15% improvement in page load performance across all applications",
  "25% increase in mobile engagement through responsive design",
] as const;
