"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PERSONAL_INFO } from "@/lib/constants/personal";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Translucent fixed header. Content scrolls beneath it; a hairline and a
 * slightly heavier material fade in only once the page has scrolled.
 */
export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const goTo = useCallback((id: string) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "material hairline" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="shell shell-wide flex h-14 items-center justify-between gap-4"
      >
        <button
          type="button"
          onClick={() => goTo("top")}
          className="-ml-2 rounded-md px-2 py-3 text-[15px] font-semibold tracking-tight text-foreground"
        >
          {PERSONAL_INFO.name}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="nav-link"
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            className="btn btn-md btn-primary"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-muted md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="material-thick hairline md:hidden">
          <ul className="shell flex flex-col pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="flex h-11 w-full items-center text-[17px] tracking-[-0.01em] text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-3">
              <a
                className="btn btn-md btn-primary btn-block"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
