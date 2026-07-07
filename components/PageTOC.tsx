export type TocItem = { label: string; href: string };

export function PageTOC({ items }: { items: TocItem[] }) {
  return (
    <aside className="page-toc" aria-label="Table of contents">
      <p className="toc-title">On this page</p>
      <nav>{items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </aside>
  );
}
