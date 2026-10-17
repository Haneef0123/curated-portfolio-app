/**
 * Absolute origin the site is published at. Social tags, the sitemap and
 * robots.txt all resolve against it, so it lives in one place.
 *
 * On Vercel this picks up the project's production domain automatically.
 * Set NEXT_PUBLIC_SITE_URL to override it — for example when a custom
 * domain is attached later.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://haneef-portfolio-ten.vercel.app");
