import Link from "next/link";
import type { Experience } from "@/data/types";
import { SkillTag } from "./SkillTag";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="card experience-card">
      <div className="entry-type">EXPERIENCE // {experience.type}</div>
      <div className="card-topline"><span>archive_record</span><span>{experience.date}</span></div>
      <h3>{experience.name}</h3>{experience.organization && <p className="organization">{experience.organization}</p>}
      <p>{experience.description}</p>{experience.takeaways && <p className="takeaway"><strong>Key takeaways:</strong> {experience.takeaways}</p>}
      <div className="tag-list">{experience.tags.map((item) => <SkillTag key={item}>{item}</SkillTag>)}</div>
      {experience.link && <Link className="text-link" href={experience.link.href}>{experience.link.label} <span aria-hidden="true">→</span></Link>}
    </article>
  );
}
