import Link from "next/link";
import type { Project } from "@/data/types";
import { SkillTag } from "./SkillTag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="entry-type">PROJECT // {project.category}</div>
      <div className="card-topline"><span>system_entry</span><span className="status">{project.status}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="tag-list">{project.technologies.map((item) => <SkillTag key={item}>{item}</SkillTag>)}</div>
      {project.link ? <Link className="text-link" href={project.link.href}>{project.link.label} <span aria-hidden="true">→</span></Link> : <span className="text-link muted-link">Link coming soon</span>}
    </article>
  );
}
