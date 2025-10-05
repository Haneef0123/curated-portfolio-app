import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaik Haneef Basha - Front End Developer",
  description:
    "Portfolio of Shaik Haneef Basha - Experienced Front End Developer with 6+ years expertise in React, Next.js, TypeScript",
  authors: [{ name: "Shaik Haneef Basha" }],
  openGraph: {
    title: "Shaik Haneef Basha - Front End Developer",
    description:
      "Experienced Front End Developer with 6+ years in React, Next.js, TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
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
