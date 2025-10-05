import { PersonalInfo, SocialLink, Education } from "@/types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Haneef Basha",
  fullName: "Shaik Haneef Basha",
  title: "Front End Developer",
  description:
    "With over 6 years of expertise in React, Next.js, and TypeScript, I craft scalable, user-focused web applications that drive real business results.",
  email: "bashahaneef103@gmail.com",
  phone: "+91 7386353383",
  location: "India",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/haneef-basha",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:bashahaneef103@gmail.com",
    icon: "mail",
  },
];

export const EDUCATION: Education = {
  degree: "B.Tech – Computer Science and Engineering",
  institution: "G. PullaReddy Engineering College, Kurnool",
  period: "Sept 2014 – May 2018",
};

export const ABOUT_STATS = [
  { value: 6, label: "Years Experience", color: "text-warm-brown" },
  { value: 3, label: "Major Companies", color: "text-forest-green" },
  { value: 15, label: "Projects Delivered", color: "text-coral" },
] as const;

export const CORE_EXPERTISE = [
  "RESTful APIs",
  "UI/UX Optimization",
  "Performance Tuning",
  "Agile Development",
  "Responsive Design",
  "Cross-browser Compatibility",
  "Version Control (Git)",
  "Team Collaboration",
] as const;
