import { Github, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types";

interface SocialLinksProps {
  links: Array<{
    name: string;
    url: string;
    icon: "linkedin" | "github" | "mail";
  }>;
  className?: string;
}

/**
 * Brand marks for the networks, a glyph for email. All render in
 * `currentColor` so the row stays visually consistent.
 */
const iconMap: Record<string, IconComponent> = {
  linkedin: FaLinkedinIn,
  github: Github,
  mail: Mail,
};

export const SocialLinks = ({ links, className }: SocialLinksProps) => {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon: IconComponent = iconMap[link.icon] ?? Mail;
        const isExternal = link.icon !== "mail";

        return (
          <li key={link.name}>
            <a
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.name}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              <span aria-hidden="true" className="inline-flex">
                <Icon className="h-[18px] w-[18px]" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
