import { PersonalInfo, SocialLink, Education } from "@/types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Haneef Basha",
  fullName: "Shaik Haneef Basha",
  title: "Front End Developer",
  description:
    "With over 8 years of experience, I build scalable, high-performance web applications and financial-product experiences — specialising in React, Next.js, TypeScript, real-time data UI, and privacy-aware engineering.",
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
    url: "https://github.com/Haneef0123",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:bashahaneef103@gmail.com",
    icon: "mail",
  },
];

export const EDUCATION: Education = {
  degree: "B.Tech – Computer Science and Technology",
  institution: "G Pulla Reddy Engineering College, India",
  period: "2014 – 2018",
};

export const ABOUT_STATS = [
  { value: 8, label: "Years Experience" },
  { value: 3, label: "Major Companies" },
  { value: 15, label: "Projects Delivered" },
] as const;

export const CORE_EXPERTISE = [
  "Real-time Data UI",
  "Platform Performance",
  "Technical SEO",
  "Product Analytics",
  "Privacy-aware Engineering",
  "REST API Integration",
  "Performance Tuning",
  "Responsive Design",
] as const;
