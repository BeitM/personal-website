import Link from "next/link";
import { archiveEntries, projects } from "@/data/archive";

const desktopFiles = [
  { name: "PROJECTS", ext: "FOLDER", href: "/builds", type: "folder", note: "4 items" },
  { name: "EXPERIENCE", ext: "TXT", href: "/experience", type: "document", note: "record" },
  { name: "AWARDS", ext: "DAT", href: "/awards", type: "data", note: "indexed" },
  { name: "RESUME", ext: "DOC", href: "/personnel-record", type: "document", note: "public" },
  { name: "ABOUT_MATT", ext: "SYS", href: "/identity", type: "system", note: "identity" },
  { name: "ARCHIVE", ext: "FOLDER", href: "/archive", type: "folder", note: `${archiveEntries.length} logs` },
  { name: "CONTACT", ext: "EXE", href: "/uplink", type: "application", note: "uplink" },
];

export default function Home() {
  const featured = projects.find((project) => project.featured)!;

  return <div className="desktop-surface">
    <div className="desktop-brand" aria-hidden="true"><span>MATT</span><b>BEITLER</b><small>DIGITAL ARCHIVE / PUBLIC DESKTOP</small></div>

    <section className="desktop-icons" aria-label="Desktop files and folders">
      {desktopFiles.map((file) => <Link className="desktop-file" href={file.href} key={file.name}>
        <span className={`desktop-file-art ${file.type}`} aria-hidden="true"><i /><b>{file.ext}</b></span>
        <strong>{file.name}</strong><small>{file.note}</small>
      </Link>)}
    </section>

    <section id="terminal" className="desktop-terminal desktop-window">
      <header><span className="window-lights"><i /><i /></span><p>WELCOME.TERM — PUBLIC SESSION</p><b>□</b></header>
      <div className="terminal-screen">
        <p className="terminal-muted">MB/OS [Version 26.07]</p>
        <p className="terminal-muted">Copyright (c) Matt Beitler. Public access granted.</p>
        <br />
        <p><span>C:\MATT_ARCHIVE&gt;</span> whoami</p>
        <p className="terminal-response">Matt Beitler — student builder / robotics / AI / computational biology</p>
        <p><span>C:\MATT_ARCHIVE&gt;</span> message --visitor</p>
        <p className="terminal-response">You are inside my digital archive. Click a file to inspect what I build, study, and document.</p>
        <p><span>C:\MATT_ARCHIVE&gt;</span> <i className="terminal-caret" /></p>
      </div>
      <footer><span>PRESS / TO OPEN COMMAND LINE</span><span>SESSION 7F3A</span></footer>
    </section>

    <Link href={`/builds/${featured.slug}`} className="desktop-preview desktop-window">
      <header><span>ACTIVE PROJECT</span><p>{featured.id}</p><b>×</b></header>
      <div className="preview-graphic" aria-hidden="true"><i /><i /><i /><span>96</span></div>
      <div className="preview-copy"><small>{featured.type}</small><h2>{featured.shortTitle}</h2><p>{featured.summary}</p><b>DOUBLE-CLICK NOT REQUIRED — OPEN →</b></div>
    </Link>

    <aside className="desktop-help"><p>WELCOME TO MB/OS</p><span>Single-click any file to open it.</span><span>Press <kbd>/</kbd> for the command line.</span><span>Press <kbd>ESC</kbd> to return to desktop.</span></aside>

    <div className="desktop-drive"><span className="drive-art" aria-hidden="true"><i /></span><b>SYSTEM_DISK</b><small>68% FREE</small></div>
  </div>;
}
