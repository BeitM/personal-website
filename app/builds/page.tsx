import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/archive";

export const metadata: Metadata = { title: "Build Files" };

export default function BuildsPage() {
  return <div className="record-page archive-width">
    <header className="directory-hero"><p className="system-kicker"><span>DIR 02</span> BUILD RECORDS</p><h1>Machines, software, and research made tangible.</h1><div><p>Major work is stored as a file: the problem, the system, the decisions, and what remains unresolved.</p><span>04 FILES / SORT: SIGNAL</span></div></header>
    <section className="build-directory" aria-label="Project files">{projects.map((project, index) => <Link href={`/builds/${project.slug}`} className={project.featured ? "is-featured" : ""} key={project.slug}><div className="build-number"><span>0{index + 1}</span><small>{project.id}</small></div><div className="build-copy"><p>{project.type}</p><h2>{project.title}</h2><p>{project.summary}</p></div><div className="build-meta"><span><i /> {project.status}</span><span>{project.year}</span><span>{project.systems.slice(0, 2).join(" / ")}</span></div><div className="signal-meter" aria-label={`Signal strength ${project.signal} percent`}><span style={{ width: `${project.signal}%` }} /></div><b className="build-open">OPEN ↗</b></Link>)}</section>
    <nav className="next-record"><span>NEXT DIRECTORY</span><Link href="/archive">ARCHIVE <b>→</b></Link></nav>
  </div>;
}
