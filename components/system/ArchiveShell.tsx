"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { directories, displayPath } from "@/data/navigation";
import { BootSequence } from "./BootSequence";
import { CommandPalette } from "./CommandPalette";

const windowTitles: Record<string, string> = {
  "/identity": "IDENTITY.TXT",
  "/builds": "PROJECTS.DIR",
  "/experience": "EXPERIENCE.LOG",
  "/awards": "AWARDS.DAT",
  "/archive": "ARCHIVE.DIR",
  "/personnel-record": "RESUME.DOC",
  "/uplink": "UPLINK.EXE",
};

function getWindowTitle(pathname: string) {
  if (pathname.startsWith("/builds/")) return `${pathname.split("/").pop()?.toUpperCase()}.PROJECT`;
  return windowTitles[pathname] ?? "ARCHIVE.SYS";
}

export function ArchiveShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const isDesktop = pathname === "/";
  const [commandOpen, setCommandOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [time, setTime] = useState("--:--");
  const [transferPath, setTransferPath] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const typing = target.matches("input, textarea, [contenteditable='true']");
      if (event.key === "/" && !typing) { event.preventDefault(); setCommandOpen(true); }
      if (event.key === "Escape") {
        if (commandOpen) setCommandOpen(false);
        else if (indexOpen) setIndexOpen(false);
        else if (!isDesktop) router.push("/");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [commandOpen, indexOpen, isDesktop, router]);

  useEffect(() => setIndexOpen(false), [pathname]);

  useEffect(() => {
    if (isDesktop) return;
    setTransferPath(getWindowTitle(pathname));
    const timer = window.setTimeout(() => setTransferPath(null), reducedMotion ? 1 : 360);
    return () => window.clearTimeout(timer);
  }, [isDesktop, pathname, reducedMotion]);

  return (
    <div className={`archive-system ${isDesktop ? "desktop-mode" : "window-mode"}`}>
      <a className="skip-link" href="#main-content">SKIP TO CONTENT</a>
      <div className="desktop-wallpaper" aria-hidden="true"><i /><i /><i /></div>
      <div className="crt-effects" aria-hidden="true" />
      <BootSequence />

      <header className="system-header desktop-menubar">
        <button className="os-menu-button" type="button" aria-expanded={indexOpen} aria-controls="mobile-index" onClick={() => setIndexOpen((open) => !open)}><span>MB</span> SYSTEM</button>
        <nav className="desktop-menus" aria-label="Desktop menus"><button type="button" onClick={() => setIndexOpen((open) => !open)}>FILES</button><button type="button" onClick={() => setCommandOpen(true)}>COMMAND</button><Link href="/identity">ABOUT</Link></nav>
        <div className="desktop-session"><span>PUBLIC SESSION</span><i /> <time>{time}</time></div>
      </header>

      {indexOpen && <nav id="mobile-index" className="mobile-index desktop-launcher" aria-label="Archive applications"><p>APPLICATIONS</p>{directories.map((item) => <Link href={item.href} key={item.href}><span className="mini-file-icon" aria-hidden="true" /><b>{item.label}</b><small>{item.plainLabel}</small></Link>)}</nav>}

      <div className="terminal-viewport desktop-viewport">
        <AnimatePresence>{transferPath && <motion.div className="file-opening" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="opening-file-icon" /><p>OPENING FILE</p><b>{transferPath}</b><span /></motion.div>}</AnimatePresence>
        <motion.main id="main-content" key={pathname} initial={reducedMotion ? false : { opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .18 }}>
          {isDesktop ? children : (
            <section className="application-window">
              <header className="window-titlebar">
                <div className="window-controls"><Link href="/" aria-label="Close window">×</Link><button type="button" onClick={() => router.back()} aria-label="Go back">‹</button><span aria-hidden="true">□</span></div>
                <p><span>C:\MATT_ARCHIVE\</span>{getWindowTitle(pathname)}</p>
                <b>READ ONLY</b>
              </header>
              <div className="window-toolbar"><Link href="/">DESKTOP</Link><button type="button" onClick={() => router.back()}>BACK</button><span>{displayPath(pathname)}</span><button type="button" onClick={() => setCommandOpen(true)}>COMMAND [/]</button></div>
              <div className="window-content">{children}</div>
              <footer className="window-status"><span>1 OBJECT OPEN</span><span>ACCESS: PUBLIC</span><span>MEMORY OK</span></footer>
            </section>
          )}
        </motion.main>
      </div>

      <footer className="system-footer desktop-taskbar">
        <button type="button" onClick={() => setIndexOpen((open) => !open)}><span className="taskbar-light" /> START</button>
        <Link className={isDesktop ? "active-task" : ""} href="/">DESKTOP</Link>
        {!isDesktop && <span className="open-task">{getWindowTitle(pathname)}</span>}
        <button className="task-command" type="button" onClick={() => setCommandOpen(true)}><kbd>/</kbd> TERMINAL</button>
        <span className="task-clock">{time}</span>
      </footer>
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </div>
  );
}
