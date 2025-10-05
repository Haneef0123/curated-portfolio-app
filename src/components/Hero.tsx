"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants/personal";
import { SocialLinks } from "@/components/common/SocialLinks";
import { DecorativeUnderline } from "@/components/svg/DecorativeUnderline";
import { scrollToSection } from "@/lib/utils/scroll";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg.src}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-light-peach" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-mustard/20 border-2 border-mustard rounded-full">
              <span className="text-sm font-semibold text-warm-brown">
                {PERSONAL_INFO.title}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building digital
              <br />
              <span className="relative inline-block">
                experiences
                <DecorativeUnderline />
              </span>
              <br />
              <span className="text-mustard">that matter</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-foreground">
                {PERSONAL_INFO.fullName}
              </span>
              . {PERSONAL_INFO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-warm-brown hover:bg-warm-brown/90 text-primary-foreground font-semibold rounded-full px-8 group"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-primary-foreground font-semibold rounded-full px-8"
                onClick={() => scrollToSection("experience")}
              >
                View Work
              </Button>
            </div>

            {/* Social Links */}
            <SocialLinks links={SOCIAL_LINKS} />
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img
                src={profileImg.src}
                alt={`${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.title}`}
                className="w-full h-full object-cover rounded-full border-4 border-mustard shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-coral rounded-full border-4 border-background flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-mustard/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl" />
    </section>
  );
};
