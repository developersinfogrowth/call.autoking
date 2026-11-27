import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FloatingCallCta } from "@/components/floating-call-cta";
import "./globals.css";

export const metadata: Metadata = {
  title: "Used Engines & Transmissions | Auto King USA",
  description: "Find a quality used engine or transmission for your vehicle with Auto King USA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="pb-[calc(56px+env(safe-area-inset-bottom))] md:pb-0">
        <Navbar />
        {children}
        <FloatingCallCta />
      </body>
    </html>
  );
}
