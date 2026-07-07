import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: { default: "Matt Beitler | Student Builder", template: "%s | Matt Beitler" }, description: "Portfolio of Matt Beitler: robotics, AI, computer science, computational biology, and STEM innovation." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
