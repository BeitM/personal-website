"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { directories, displayPath } from "@/data/navigation";
import { BootSequence } from "./BootSequence";

const windowTitles: Record<string, string> = {
  "/identity": "IDENTITY.TXT",
  "/builds": "PROJECTS.DIR",
  "/experience": "EXPERIENCE.LOG",
  "/awards": "AWARDS.DAT",
  "/archive": "ARCHIVE.DIR",
  "/personnel-record": "RESUME.DOC",
  "/uplink": "UPLINK.EXE",
  "/instructions": "INSTRUCTIONS.TXT",
};

function getWindowTitle(pathname: string) {
  if (pathname.startsWith("/builds/")) return `${pathname.split("/").pop()?.toUpperCase()}.PROJECT`;
  return windowTitles[pathname] ?? "ARCHIVE.SYS";
}

export function ArchiveShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isDesktop = pathname === "/";
  const [indexOpen, setIndexOpen] = useState(false);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (indexOpen) setIndexOpen(false);
        else if (!isDesktop) router.push("/");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [indexOpen, isDesktop, router]);

  useEffect(() => setIndexOpen(false), [pathname]);

  useEffect(() => {
    const openFiles = () => setIndexOpen(true);
    window.addEventListener("mb:open-files", openFiles);
    return () => window.removeEventListener("mb:open-files", openFiles);
  }, []);

  return (
    <div className={`archive-system ${isDesktop ? "desktop-mode" : "window-mode"}`}>
      <a className="skip-link" href="#main-content">SKIP TO CONTENT</a>
      <div className="desktop-wallpaper" aria-hidden="true"><i /><i /><i /></div>
      <div className="crt-effects" aria-hidden="true" />
      <BootSequence />

      <header className="system-header desktop-menubar">
        <button className="os-menu-button" type="button" aria-expanded={indexOpen} aria-controls="mobile-index" onClick={() => setIndexOpen((open) => !open)}><span>MB</span> FILES</button>
        <nav className="desktop-menus" aria-label="Desktop controls"><Link href="/">DESKTOP</Link><Link href="/identity">ABOUT</Link><Link href="/instructions">INSTRUCTIONS</Link></nav>
        <div className="desktop-session"><i /><span>{isDesktop ? "DESKTOP" : getWindowTitle(pathname)}</span></div>
      </header>

      <AnimatePresence>{indexOpen && <motion.nav id="mobile-index" className="mobile-index desktop-launcher" aria-label="Archive files" initial={{ x: -28, scaleX: .92, opacity: 0 }} animate={{ x: 0, scaleX: 1, opacity: 1 }} exit={{ x: -18, scaleX: .94, opacity: 0 }} transition={{ duration: .14 }}><p>FILES</p>{directories.slice(1).map((item) => <Link href={item.href} key={item.href}><span className="mini-file-icon" aria-hidden="true" /><b>{item.label}</b><small>{item.plainLabel}</small></Link>)}</motion.nav>}</AnimatePresence>

      <div className="terminal-viewport desktop-viewport">
        <main id="main-content" key={pathname}>
          {isDesktop ? children : (
            <section className="application-window">
              <header className="window-titlebar">
                <div className="window-controls"><Link href="/" aria-label="Close window">×</Link><button type="button" onClick={() => router.back()} aria-label="Go back">‹</button><span aria-hidden="true">□</span></div>
                <p><span>C:\MATT_ARCHIVE\</span>{getWindowTitle(pathname)}</p>
                <b>READ ONLY</b>
              </header>
              <div className="window-toolbar"><Link href="/">DESKTOP</Link><button type="button" onClick={() => router.back()}>BACK</button><span>{displayPath(pathname)}</span></div>
              <div className="window-content">{children}</div>
              <footer className="window-status"><span>1 OBJECT OPEN</span><span>ACCESS: PUBLIC</span><span>MEMORY OK</span></footer>
            </section>
          )}
        </main>
      </div>

      <footer className="system-footer desktop-taskbar">
        <span className="taskbar-spacer" aria-hidden="true" />
        <span className="task-clock">{time}</span>
      </footer>
    </div>
  );
}
