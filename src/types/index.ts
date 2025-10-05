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

export interface Skill {
  title: string;
  color: string;
  items: string[];
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
