import type { Metadata } from "next";
import Link from "next/link";
import { timeline } from "@/data/archive";

export const metadata: Metadata = { title: "Experience Log" };

const records = [
  { code: "EXP_01", name: "FTC TEAM 18603 / TERABRIDGES", role: "CAPTAIN · PROGRAMMER · ENGINEERING", date: "2024—NOW", description: "Robot software, autonomous strategy, system testing, controls, technical documentation, and team leadership under competition constraints." },
  { code: "EXP_02", name: "CMU PRE-COLLEGE GCET", role: "STUDENT / PROJECT PARTICIPANT", date: "SUMMER 2026", description: "Explored emerging technology alongside culture, humanities, ethics, AI, robotics, VR/AR, game design, and animation." },
  { code: "EXP_03", name: "STEM COMPETITION NETWORK", role: "COMPETITOR / BUILDER", date: "ACTIVE RECORD", description: "Science Olympiad, Samsung Solve for Tomorrow, Toshiba ExploraVision, and FBLA work spanning engineering, research, writing, and presentation." },
  { code: "EXP_04", name: "TENNIS + GERMAN EXCHANGE", role: "STUDENT / ATHLETE / TRAVELER", date: "DATES TO ADD", description: "Experiences outside software that developed resilience, communication, cultural awareness, and long-term discipline." },
];

export default function ExperiencePage() {
  return <div className="record-page archive-width">
    <header className="directory-hero"><p className="system-kicker"><span>EXPERIENCE.LOG</span> EXECUTION HISTORY</p><h1>PROCESSES THAT CHANGED THE SYSTEM.</h1><div><p>Programs, teams, competitions, and environments recorded by what they demanded and what they changed.</p><span>{records.length} RECORDS / CHRONOLOGICAL</span></div></header>
    <section className="system-table experience-records">{records.map((record, index) => <article key={record.code}><span>0{index + 1}</span><div><small>{record.code} / {record.date}</small><h2>{record.name}</h2><b>{record.role}</b></div><p>{record.description}</p></article>)}</section>
    <section className="record-block"><header className="section-heading"><div><p>TRACE / DEVELOPMENT</p><h2>SYSTEM TIMELINE</h2></div></header><div className="timeline compact">{timeline.map((event, index) => <article key={event.year}><span>0{index + 1}</span><time>{event.year}</time><div><h3>{event.label}</h3><p>{event.detail}</p></div></article>)}</div></section>
    <nav className="next-record"><span>RELATED FILE</span><Link href="/personnel-record">RESUME.DOC <b>→</b></Link></nav>
  </div>;
}
