import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ArchiveShell } from "@/components/system/ArchiveShell";

const display = Archivo({ subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description = "The public personal archive of Matt Beitler: robotics, AI, software, computational biology, and experiments in progress.";

  return {
    metadataBase,
    title: { default: "Matt Beitler // Personal System", template: "%s // Matt Beitler" },
    description,
    openGraph: { title: "Matt Beitler // Personal System", description, type: "website", images: [{ url: "/og.png", width: 1792, height: 934, alt: "Matt Beitler personal system public archive" }] },
    twitter: { card: "summary_large_image", title: "Matt Beitler // Personal System", description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable} ${sans.variable}`}><ArchiveShell>{children}</ArchiveShell></body></html>;
}
