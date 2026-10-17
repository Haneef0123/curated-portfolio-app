import { SectionBadge } from "@/components/common/SectionBadge";
import { ABOUT_STATS } from "@/lib/constants/personal";

export const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="shell">
        <SectionBadge variant="secondary">About</SectionBadge>

        <h2 className="type-title mt-6 max-w-[20ch] text-foreground">
          Turning ideas into pixel-perfect reality.
        </h2>

        <div className="mt-8 max-w-[48rem] space-y-5">
          <p className="type-body text-muted-foreground">
            I'm a{" "}
            <span className="font-medium text-foreground">
              Front End Developer
            </span>{" "}
            with over 8 years of experience building scalable, high-performance
            web applications and financial-product experiences. My expertise
            spans{" "}
            <span className="font-medium text-foreground">
              React, Next.js, TypeScript, real-time data UI, platform
              performance, SEO, analytics, and privacy-aware engineering
            </span>
            .
          </p>

          <p className="type-body text-muted-foreground">
            I create reusable frontend foundations for data-heavy financial
            products — API integrations, caching, responsive components, and
            clear loading and error states — while improving page speed and
            reliability through server-side rendering, lazy loading, and
            frontend architecture improvements.
          </p>

          <p className="type-body text-muted-foreground">
            Currently at{" "}
            <span className="font-medium text-foreground">Upstox</span>, I've
            built real-time trading and investment-research experiences with
            live market prices, charts, and interactive tables, shipped
            account-opening and IPO workflows, implemented technical SEO for
            financial content, and mentored junior engineers through code
            reviews and knowledge sharing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3 sm:gap-8">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="tabular text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-foreground md:text-[3.25rem]">
                {stat.value}
              </div>
              <div className="type-small mt-3 text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
