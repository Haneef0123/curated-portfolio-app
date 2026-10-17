import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants/personal";
import { SocialLinks } from "@/components/common/SocialLinks";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="shell shell-wide flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="type-caption text-muted-foreground">
          © 2026 {PERSONAL_INFO.fullName}. All rights reserved.
        </p>
        <SocialLinks links={SOCIAL_LINKS} />
      </div>
    </footer>
  );
};
