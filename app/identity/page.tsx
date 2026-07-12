import type { Metadata } from "next";
import Link from "next/link";
import { skillSystems, timeline } from "@/data/archive";

export const metadata: Metadata = { title: "Identity Record" };

export default function IdentityPage() {
  return <div className="record-page archive-width">
    <header className="record-hero"><div><p className="system-kicker"><span>DIR 01</span> PERSONNEL IDENTITY</p><h1>Matt Beitler</h1><p className="record-deck">Student builder translating curiosity into working systems—from competition robots to questions about intelligence and biology.</p></div><dl><div><dt>CLASS</dt><dd>PUBLIC PROFILE</dd></div><div><dt>PRIMARY MODE</dt><dd>BUILD / TEST / LEARN</dd></div><div><dt>STATUS</dt><dd><i /> ACTIVE</dd></div></dl></header>
    <section className="record-split"><div><p className="section-code">01 / DIRECTION</p><h2>Interested in the moment an abstract idea has to work in the real world.</h2></div><div className="prose"><p>Robotics made that moment concrete: software becomes motion, imperfect sensors become decisions, and design choices are tested under pressure.</p><p>That same instinct now extends into AI, computational biology, research, and tools that help people understand complex systems. This archive keeps both completed work and unfinished questions visible.</p></div></section>
    <section className="record-block"><header className="section-heading"><div><p>CAPABILITY MAP</p><h2>Systems in use</h2></div><span>LEVELS ARE DIRECTIONAL<br />NOT SCORES</span></header><div className="system-table">{skillSystems.map((group, index) => <article key={group.label}><span>0{index + 1}</span><div><h3>{group.label}</h3><small>{group.level}</small></div><p>{group.items.join(" / ")}</p></article>)}</div></section>
    <section className="record-block"><header className="section-heading"><div><p>HISTORY STREAM</p><h2>Selected coordinates</h2></div></header><div className="timeline compact">{timeline.map((event, index) => <article key={event.year}><span>0{index + 1}</span><time>{event.year}</time><div><h3>{event.label}</h3><p>{event.detail}</p></div></article>)}</div></section>
    <nav className="next-record"><span>NEXT DIRECTORY</span><Link href="/builds">BUILDS <b>→</b></Link></nav>
  </div>;
}
