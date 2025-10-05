"use client";

import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

interface SocialLinksProps {
  links: Array<{
    name: string;
    url: string;
    icon: "linkedin" | "github" | "mail";
  }>;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
};

export const SocialLinks = ({ links, className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex gap-3 md:gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.icon !== "mail" ? "_blank" : undefined}
            rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
            className="p-2.5 md:p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label={link.name}
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        );
      })}
    </div>
  );
};
