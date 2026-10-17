import type { Metadata, Viewport } from "next";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://haneefbasha.vercel.app"),
  title: "Shaik Haneef Basha — Front End Developer",
  description:
    "Portfolio of Shaik Haneef Basha — Frontend engineer with 8+ years building scalable, high-performance web applications and financial-product experiences.",
  authors: [{ name: "Shaik Haneef Basha" }],
  openGraph: {
    title: "Shaik Haneef Basha — Front End Developer",
    description:
      "Frontend engineer with 8+ years of experience in React, Next.js, TypeScript and real-time data UI.",
    type: "website",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
