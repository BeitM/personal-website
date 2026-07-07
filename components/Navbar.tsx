"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteSearch } from "./SiteSearch";

const links = [
  ["Home", "/"], ["Projects", "/projects"], ["Robotics", "/robotics"],
  ["Experience", "/experience"], ["Awards", "/awards"], ["Resume", "/resume"], ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Matt Beitler home">
          <span className="brand-mark">MB</span><span>Matt Beitler</span>
        </Link>
        <div className="nav-actions"><SiteSearch /><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links">
          <span className="sr-only">Toggle navigation</span><span /><span /><span />
        </button></div>
        <div id="nav-links" className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
