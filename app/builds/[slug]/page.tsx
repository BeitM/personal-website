import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/archive";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project?.shortTitle ?? "Build File" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return <article className="project-page">
    <header className="project-hero archive-width">
      <div className="project-file-code"><span>{project.id}</span><b>BUILD RECORD / {String(index + 1).padStart(2, "0")}</b></div>
      <p className="system-kicker"><span>{project.type}</span> ACCESS GRANTED</p>
      <h1>{project.title}</h1>
      <p className="project-summary">{project.summary}</p>
      <div className="project-diagram" aria-hidden="true"><span className="diagram-core">{String(project.signal).padStart(3, "0")}</span><i className="orbit orbit-one" /><i className="orbit orbit-two" /><b>LIVE SYSTEM</b><small>TELEMETRY / SIGNAL</small></div>
      <dl className="project-meta"><div><dt>STATUS</dt><dd><i /> {project.status}</dd></div><div><dt>ROLE</dt><dd>{project.role}</dd></div><div><dt>PERIOD</dt><dd>{project.year}</dd></div><div><dt>SYSTEMS</dt><dd>{project.systems.join(" / ")}</dd></div></dl>
    </header>
    <div className="project-body archive-width">
      <aside><p>FILE INDEX</p>{project.sections.map((section, sectionIndex) => <a href={`#section-${sectionIndex + 1}`} key={section.title}><span>0{sectionIndex + 1}</span>{section.title}</a>)}<a href="#result"><span>0{project.sections.length + 1}</span>Current result</a></aside>
      <div className="project-sections">{project.sections.map((section, sectionIndex) => <section id={`section-${sectionIndex + 1}`} key={section.title}><span>0{sectionIndex + 1}</span><div><p>PROJECT RECORD</p><h2>{section.title}</h2><p>{section.body}</p>{sectionIndex === 1 && <div className="process-strip">{project.systems.map((system, itemIndex) => <span key={system}><b>{String(itemIndex + 1).padStart(2, "0")}</b>{system}</span>)}</div>}</div></section>)}
        <section id="result" className="result-section"><span>0{project.sections.length + 1}</span><div><p>CURRENT RESULT</p><h2>{project.result}</h2><div className="related-logs"><h3>RELATED LOGS</h3>{project.logs.map((log) => <p key={log}><i /> {log}<span>INDEXED</span></p>)}</div></div></section>
      </div>
    </div>
    <nav className="project-nav archive-width"><Link href="/builds">← RETURN TO BUILDS</Link><Link href={`/builds/${next.slug}`}><span>NEXT FILE</span>{next.title} →</Link></nav>
  </article>;
}
