"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { searchItems } from "@/data/search";

export function SiteSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? searchItems.filter((item) => [item.title, item.description, ...item.keywords].join(" ").toLowerCase().includes(normalized)).slice(0, 5)
    : [];

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="site-search" ref={wrapperRef}>
      <label className="sr-only" htmlFor="site-search">Search this site</label>
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input id="site-search" type="search" placeholder="Search" value={query} onFocus={() => setOpen(true)} onChange={(event) => { setQuery(event.target.value); setOpen(true); }} autoComplete="off" />
      {open && normalized && (
        <div className="search-results" role="listbox" aria-label="Search results">
          {results.length ? results.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => { setOpen(false); setQuery(""); }}>
              <strong>{item.title}</strong><span>{item.description}</span>
            </Link>
          )) : <p className="search-empty">No matching pages found.</p>}
        </div>
      )}
    </div>
  );
}
