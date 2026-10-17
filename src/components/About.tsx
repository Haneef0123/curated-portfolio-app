"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCountUp } from "@/hooks/use-count-up";
import { SectionBadge } from "@/components/common/SectionBadge";
import { ABOUT_STATS } from "@/lib/constants/personal";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation(0.1);
  const stats = [
    useCountUp(ABOUT_STATS[0].value, 2000, isVisible),
    useCountUp(ABOUT_STATS[1].value, 2000, isVisible),
    useCountUp(ABOUT_STATS[2].value, 2000, isVisible),
  ];

  return (
    <section id="about" className="py-10 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section badge */}
          <SectionBadge variant="secondary">About Me</SectionBadge>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-8">
            Turning ideas into
            <br />
            <span className="text-forest-green">pixel-perfect reality</span>
          </h2>

          <div
            ref={contentRef}
            className={`space-y-3 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "md:opacity-0 md:translate-y-6"
            }`}
          >
            <p>
              I'm a{" "}
              <span className="font-semibold text-foreground">
                Front End Developer
              </span>{" "}
              with over 8 years of experience building scalable,
              high-performance web applications and financial-product
              experiences. My expertise spans{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, TypeScript, real-time data UI, platform
                performance, SEO, analytics, and privacy-aware engineering
              </span>
              .
            </p>

            <p className="hidden md:block">
              I create reusable frontend foundations for data-heavy financial
              products — API integrations, caching, responsive components, and
              clear loading and error states — while improving page speed and
              reliability through server-side rendering, lazy loading, and
              frontend architecture improvements.
            </p>

            <p>
              Currently at{" "}
              <span className="font-semibold text-foreground">Upstox</span>,
              I've built real-time trading and investment-research experiences
              with live market prices, charts, and interactive tables, shipped
              account-opening and IPO workflows, implemented technical SEO for
              financial content, and mentored junior engineers through code
              reviews and knowledge sharing.
            </p>
          </div>

          {/* Stats */}
          <div
            ref={ref}
            className="grid grid-cols-3 gap-3 md:gap-8 mt-6 md:mt-12 pt-6 md:pt-12 border-t border-border"
          >
            {ABOUT_STATS.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-2 ${stat.color}`}
                >
                  {stats[index]}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
