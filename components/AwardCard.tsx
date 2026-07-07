import Link from "next/link";
import type { Award } from "@/data/types";
import { SkillTag } from "./SkillTag";

export function AwardCard({ award }: { award: Award }) {
  return (
    <article className="card award-card">
      <div className="award-icon" aria-hidden="true">◇</div>
      <div><div className="card-topline"><span>{award.organization}</span><span>{award.year}</span></div><h3>{award.name}</h3><p>{award.context}</p>
      {award.tags && <div className="tag-list">{award.tags.map((item) => <SkillTag key={item}>{item}</SkillTag>)}</div>}
      {award.link && <Link className="text-link" href={award.link.href}>{award.link.label} <span aria-hidden="true">→</span></Link>}</div>
    </article>
  );
}
