import type { Metadata } from "next";
import { externalLinks } from "@/data/archive";

export const metadata: Metadata = { title: "Uplink" };

export default function UplinkPage() {
  return <div className="record-page archive-width uplink-page">
    <header className="directory-hero"><p className="system-kicker"><span>DIR 05</span> EXTERNAL CHANNELS</p><h1>Transmit a signal.</h1><div><p>For project, academic, research, or collaborative opportunities, use one of the public channels below.</p><span>NO LIVE FORM / DIRECT LINKS</span></div></header>
    <section className="uplink-console"><div className="uplink-radar" aria-hidden="true"><i /><i /><i /><span>MB</span><b>SEARCHING FOR SIGNAL</b></div><div className="uplink-links">{externalLinks.map((link, index) => <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className={link.placeholder ? "is-placeholder" : ""} key={link.label}><span>0{index + 1}</span><div><small>{link.label}</small><b>{link.value}</b></div><i>{link.placeholder ? "CONTENT REQUIRED" : "OPEN CHANNEL"}</i><strong>↗</strong></a>)}</div></section>
    <p className="privacy-note"><span>PRIVACY NOTE</span> This public record intentionally excludes a phone number, home address, and private personal information.</p>
  </div>;
}
