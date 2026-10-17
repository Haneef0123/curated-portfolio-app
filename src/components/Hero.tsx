import { ArrowRight } from "lucide-react";import profileImg from "@/assets/profile.jpg";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants/personal";
import { SocialLinks } from "@/components/common/SocialLinks";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-14">
      {/* Soft wash so the translucent header has something to sit on */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-secondary to-background"
      />

      <div className="shell shell-wide relative grid items-center gap-14 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20 lg:py-28">
        <div>
          <span className="eyebrow text-primary">{PERSONAL_INFO.title}</span>

          <h1 className="type-display mt-5 text-foreground [text-wrap:normal]">
            Building digital
            <br />
            experiences that matter.
          </h1>

          <p className="type-lead mt-7 max-w-[38rem] text-muted-foreground">
            Hi, I'm{" "}
            <span className="font-medium text-foreground">
              {PERSONAL_INFO.fullName}
            </span>
            . {PERSONAL_INFO.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn btn-lg btn-primary">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#experience" className="btn btn-lg btn-secondary">
              View work
            </a>
          </div>

          <SocialLinks links={SOCIAL_LINKS} className="mt-10" />
        </div>

        <div>
          <div className="relative mx-auto w-full max-w-[420px]">
            {/* Depth behind the portrait: a soft, coloured bloom */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-mustard/30 via-coral/20 to-forest-green/25 blur-2xl"
            />
            <figure className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-soft-lg">
              <img
                src={profileImg.src}
                alt={`Portrait of ${PERSONAL_INFO.fullName}`}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
