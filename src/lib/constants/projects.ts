import { TrendingUp, Users, Search, LineChart, LucideIcon } from "lucide-react";

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
    title: "Real-Time Trading & Investment Research",
    company: "Upstox",
    description:
      "Built real-time trading and investment-research experiences with live market prices, charts, financial data, and interactive tables, backed by reusable frontend foundations for data-heavy financial products.",
    impact: "Faster, more reliable data-heavy pages",
    icon: TrendingUp,
    color: "bg-mustard/20 text-mustard",
  },
  {
    title: "Account-Opening & IPO Workflows",
    company: "Upstox",
    description:
      "Developed account-opening and IPO workflows with scalable forms, validation, and API integration, partnered with backend teams on financial API contracts and account aggregation flows.",
    impact: "Smoother customer onboarding journeys",
    icon: Users,
    color: "bg-forest-green/20 text-forest-green",
  },
  {
    title: "Technical SEO & Product Analytics",
    company: "Upstox",
    description:
      "Implemented technical SEO for financial content with metadata, structured data, sitemap, redirects, and search-friendly navigation, plus product analytics for high-intent actions.",
    impact: "Search-friendly, privacy-aware platform",
    icon: Search,
    color: "bg-coral/20 text-coral",
  },
  {
    title: "Real-Time Operational Dashboard",
    company: "MSys Technologies",
    description:
      "Designed snapshot dashboard experiences with React, Redux Saga, and hooks for real-time data visualization, refactoring state management with MobX and Redux patterns.",
    impact: "30% reduction in API latency",
    icon: LineChart,
    color: "bg-warm-brown/20 text-warm-brown",
  },
];

export const OTHER_ACHIEVEMENTS = [
  "30% reduction in API latency through refactored state management",
  "15% reduction in layout shift with lazy loading and request throttling",
  "35% increase in user satisfaction through improved responsive and cross-browser UI",
  "Reusable component libraries aligned with design systems to accelerate delivery",
] as const;
