import type { Metadata } from "next";
import { archiveEntries } from "@/data/archive";

export const metadata: Metadata = { title: "Archive Logs" };

export default function ArchivePage() {
  return <div className="record-page archive-width">
    <header className="directory-hero"><p className="system-kicker"><span>DIR 03</span> NOTES / EXPERIMENTS</p><h1>Incomplete thoughts are still evidence.</h1><div><p>Research notes, prototypes, questions, and older work. Entries document movement without pretending every idea is a conclusion.</p><span>04 LOGS / READ ONLY</span></div></header>
    <section className="log-directory">{archiveEntries.map((entry, index) => <article key={entry.slug}><div className="log-id"><span>0{index + 1}</span><small>{entry.id}</small></div><div className="log-title"><p>{entry.category}</p><h2>{entry.title}</h2></div><time>{entry.date}</time><p className="log-summary">{entry.summary}</p><div className="log-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="log-state">INDEXED</span></article>)}</section>
  </div>;
}
