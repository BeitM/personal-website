import type { LearningItem } from "@/data/types";
import { SkillTag } from "./SkillTag";

export function LearningEntry({ item }: { item: LearningItem }) {
  return <article className="learning-entry"><p className="learning-date">{item.date}</p><h3>{item.title}</h3><p>{item.summary}</p><div className="tag-list">{item.tags.map((tag) => <SkillTag key={tag}>{tag}</SkillTag>)}</div></article>;
}
