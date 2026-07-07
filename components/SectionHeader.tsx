type Props = { eyebrow?: string; title: string; description?: string; align?: "left" | "center" };

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={`section-header ${align === "center" ? "section-header-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
