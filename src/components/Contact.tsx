"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SectionBadge } from "@/components/common/SectionBadge";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants/personal";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types";

const linkedinUrl = SOCIAL_LINKS.find((link) => link.icon === "linkedin")?.url;
const linkedinLabel = (linkedinUrl ?? "https://linkedin.com/in/haneef-basha")
  .replace(/^https?:\/\//, "")
  .replace(/\/+$/, "");

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
  tone: string;
  external: boolean;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    tone: "border-primary/20 bg-primary/10 text-primary",
    external: false,
  },
  {
    label: "Phone",
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    tone: "border-forest-green/20 bg-forest-green/10 text-forest-green",
    external: false,
  },
  {
    label: "LinkedIn",
    value: linkedinLabel,
    href: linkedinUrl ?? "https://linkedin.com/in/haneef-basha",
    icon: FaLinkedinIn,
    tone: "border-coral/20 bg-coral/10 text-coral",
    external: true,
  },
];

export const Contact = () => {
  const methods = useReveal();
  const cta = useReveal();

  return (
    <section id="contact" className="section bg-secondary">
      <div className="shell">
        <SectionBadge>Let's Connect</SectionBadge>

        <h2 className="type-title mt-6 max-w-[18ch] text-foreground">
          Ready to start a conversation?
        </h2>

        <p className="type-lead mt-6 max-w-[44rem] text-muted-foreground">
          I'm always open to discussing new opportunities, interesting projects,
          or potential collaborations.
        </p>

        <div
          ref={methods.ref}
          className={cn(
            "reveal mt-14 grid gap-4 sm:grid-cols-3",
            methods.isVisible && "is-visible"
          )}
        >
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="surface flex flex-col p-6 transition-shadow duration-300 hover:shadow-soft-md"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border",
                  method.tone
                )}
              >
                <method.icon className="h-[18px] w-[18px]" />
              </span>

              <span className="type-caption mt-5 text-muted-foreground">
                {method.label}
              </span>
              <span className="type-body mt-1.5 break-words font-medium text-foreground">
                {method.value}
              </span>
            </a>
          ))}
        </div>

        <div
          ref={cta.ref}
          className={cn(
            "reveal mt-5 rounded-3xl bg-foreground px-6 py-12 text-center md:px-12 md:py-16",
            cta.isVisible && "is-visible"
          )}
        >
          <h3 className="type-title-sm text-background">
            Let's build something great together.
          </h3>

          <p className="type-body mx-auto mt-4 max-w-[34rem] text-background/75">
            Whether you need a skilled developer for your team or want to
            discuss a project, I'd love to hear from you.
          </p>

          <a
            className="btn btn-lg btn-primary mt-8"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Send me an email
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
