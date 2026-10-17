import {
  SiCss,
  SiGit,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMixpanel,
  SiMobx,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Layers, MonitorSmartphone, Rocket, Webhook } from "lucide-react";
import type { SkillCategory } from "@/types";

/**
 * Brand marks come from Simple Icons; anything without a logo falls back to a
 * Lucide glyph so every row reads as the same visual weight.
 *
 * Colours are the real brand hues, tuned per theme: light backgrounds need a
 * deeper shade for contrast, dark backgrounds need the brighter original.
 */
export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    dot: "bg-mustard",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "text-[#087EA4] dark:text-[#61DAFB]",
      },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-[#3178C6] dark:text-[#5AA7E8]",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#B59A00] dark:text-[#F7DF1E]",
      },
    ],
  },
  {
    title: "Markup & Styling",
    dot: "bg-coral",
    items: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-[#E34F26] dark:text-[#F1662A]",
      },
      { name: "CSS", icon: SiCss, color: "text-[#663399] dark:text-[#A78BFA]" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#0891B2] dark:text-[#22D3EE]",
      },
      {
        name: "Responsive Design",
        icon: MonitorSmartphone,
        color: "text-[#0284C7] dark:text-[#38BDF8]",
      },
    ],
  },
  {
    title: "State & Data",
    dot: "bg-forest-green",
    items: [
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-[#764ABC] dark:text-[#A78BFA]",
      },
      { name: "MobX", icon: SiMobx, color: "text-[#D97706] dark:text-[#FF9955]" },
      {
        name: "Redux Saga",
        icon: SiReduxsaga,
        color: "text-[#9333EA] dark:text-[#C084FC]",
      },
      { name: "Context API", icon: Layers, color: "text-primary" },
      {
        name: "REST APIs",
        icon: Webhook,
        color: "text-[#059669] dark:text-[#34D399]",
      },
    ],
  },
  {
    title: "Tools",
    dot: "bg-plum",
    items: [
      { name: "Git", icon: SiGit, color: "text-[#E24329] dark:text-[#F05032]" },
      {
        name: "Jest",
        icon: SiJest,
        color: "text-[#C21325] dark:text-[#E5484D]",
      },
      {
        name: "Chrome DevTools",
        icon: SiGooglechrome,
        color: "text-[#2563EB] dark:text-[#60A5FA]",
      },
      {
        name: "React Profiler",
        icon: SiReact,
        color: "text-[#087EA4] dark:text-[#61DAFB]",
      },
      {
        name: "Jira",
        icon: SiJira,
        color: "text-[#2563EB] dark:text-[#60A5FA]",
      },
      {
        name: "Mixpanel",
        icon: SiMixpanel,
        color: "text-[#6E56CF] dark:text-[#A78BFA]",
      },
      { name: "AppsFlyer", icon: Rocket, color: "text-coral" },
    ],
  },
];
