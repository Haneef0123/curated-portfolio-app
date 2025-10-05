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
    title: "Frontend Development",
    color: "bg-mustard/20 text-mustard border-mustard/30",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    icon: Palette,
    title: "Styling & Design",
    color: "bg-coral/20 text-coral border-coral/30",
    items: ["Tailwind CSS", "CSS3", "SCSS", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "State Management",
    color: "bg-forest-green/20 text-forest-green border-forest-green/30",
    items: ["Redux", "Mobx", "Redux Saga", "Context API"],
  },
  {
    icon: Layout,
    title: "Tools & Testing",
    color: "bg-warm-brown/20 text-warm-brown border-warm-brown/30",
    items: ["Git", "Jest", "Chrome DevTools", "Jira"],
  },
];
