import type { Metadata, Viewport } from "next";
import "@/index.css";
import { SITE_URL } from "@/lib/site";

const TITLE = "Shaik Haneef Basha — Front End Developer";
const DESCRIPTION =
  "Portfolio of Shaik Haneef Basha — Frontend engineer with 8+ years building scalable, high-performance web applications and financial-product experiences.";
const SOCIAL_DESCRIPTION =
  "Frontend engineer with 8+ years of experience in React, Next.js, TypeScript and real-time data UI.";

export const metadata: Metadata = {
  // Absolute URLs in the tags below resolve against the deployed origin.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Shaik Haneef Basha" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "/",
    siteName: "Shaik Haneef Basha",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  // The design uses rem-based spacing, so let the user's text size scale it.
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No providers: this is a single static page with no client-side state,
  // toasts or tooltips, so the layout ships no client JavaScript at all.
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
