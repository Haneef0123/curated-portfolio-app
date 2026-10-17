import { Code2, Layout, Palette, Zap, LucideIcon } from "lucide-react";

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  color: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend",
    color: "bg-mustard/20 text-mustard border-mustard/30",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    icon: Palette,
    title: "Markup & Styling",
    color: "bg-coral/20 text-coral border-coral/30",
    items: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "State & Data",
    color: "bg-forest-green/20 text-forest-green border-forest-green/30",
    items: ["Redux", "MobX", "Redux Saga", "Context API", "REST APIs"],
  },
  {
    icon: Layout,
    title: "Tools",
    color: "bg-warm-brown/20 text-warm-brown border-warm-brown/30",
    items: [
      "Git",
      "Jest",
      "Chrome DevTools",
      "React Profiler",
      "Jira",
      "Mixpanel",
      "AppsFlyer",
    ],
  },
];
