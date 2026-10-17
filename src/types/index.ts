import type { ComponentType } from "react";

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "mail";
}

/**
 * Both Lucide and react-icons components accept `className`, so registries can
 * mix the two sets without casting.
 */
export type IconComponent = ComponentType<{ className?: string }>;

export interface SkillItem {
  name: string;
  icon: IconComponent;
  /** Brand-tuned colour, adjusted per theme for legibility on light/dark. */
  color: string;
}

export interface SkillCategory {
  title: string;
  /** Accent shared by the category marker. */
  dot: string;
  items: SkillItem[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  color: string;
  achievements: string[];
}

export interface Project {
  title: string;
  company: string;
  description: string;
  impact: string;
  color: string;
}

export interface Stat {
  value: number;
  label: string;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}
