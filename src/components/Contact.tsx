"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/common/SectionBadge";
import {
  DecorativeUnderline,
  UnderlineVariants,
} from "@/components/svg/DecorativeUnderline";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants/personal";
import { scrollToTop } from "@/lib/utils/scroll";
import { useDesktopScrollAnimation } from "@/hooks/use-desktop-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useDesktopScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useDesktopScrollAnimation(0.2);

  return (
    <section id="contact" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-8 md:mb-12">
            <SectionBadge variant="secondary">Let's Connect</SectionBadge>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Ready to start a
              <br />
              <span className="relative inline-block">
                conversation
                <DecorativeUnderline
                  pathData={UnderlineVariants.curved}
                  color="hsl(var(--forest-green))"
                />
              </span>
              ?
            </h2>

            <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              I'm always open to discussing new opportunities, interesting
              projects, or potential collaborations.
            </p>
          </div>

          {/* Contact cards */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`group p-5 md:p-6 bg-background rounded-2xl border-2 border-border hover:border-mustard hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "md:opacity-0 md:translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
            >
              <div className="inline-flex p-2.5 md:p-3 rounded-xl bg-mustard/20 text-mustard border-2 border-mustard/30 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">Email</h3>
              <p className="text-xs md:text-sm text-muted-foreground break-words">
                {PERSONAL_INFO.email}
              </p>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className={`group p-5 md:p-6 bg-background rounded-2xl border-2 border-border hover:border-forest-green hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "md:opacity-0 md:translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            >
              <div className="inline-flex p-2.5 md:p-3 rounded-xl bg-forest-green/20 text-forest-green border-2 border-forest-green/30 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">Phone</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {PERSONAL_INFO.phone}
              </p>
            </a>

            <a
              href={SOCIAL_LINKS.find((link) => link.icon === "linkedin")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 md:p-6 bg-background rounded-2xl border-2 border-border hover:border-coral hover:shadow-lg transition-all duration-500 hover:-translate-y-1 sm:col-span-2 md:col-span-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "md:opacity-0 md:translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="inline-flex p-2.5 md:p-3 rounded-xl bg-coral/20 text-coral border-2 border-coral/30 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">LinkedIn</h3>
              <p className="text-xs md:text-sm text-muted-foreground break-words">
                linkedin.com/in/haneef-basha
              </p>
            </a>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className={`text-center p-6 md:p-8 bg-warm-brown rounded-3xl text-primary-foreground transition-all duration-700 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "md:opacity-0 md:translate-y-6"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              Let's Build Something Great Together
            </h3>
            <p className="text-sm md:text-base mb-5 md:mb-6 opacity-90 px-2">
              Whether you need a skilled developer for your team or want to
              discuss a project, I'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-warm-brown hover:bg-primary-foreground/90 font-semibold rounded-full px-6 md:px-8 w-full sm:w-auto group"
              asChild
            >
              <a href="mailto:bashahaneef103@gmail.com">
                Send me an Email
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border">
        <div className="text-center text-xs md:text-sm text-muted-foreground px-4">
          <p>© 2025 Shaik Haneef Basha.</p>
        </div>
      </footer>
    </section>
  );
};
