import type { Metadata } from "next";
import Link from "next/link";
import { skillSystems } from "@/data/archive";

export const metadata: Metadata = { title: "Personnel Record" };

export default function PersonnelRecordPage() {
  return <div className="record-page archive-width personnel-page">
    <header className="personnel-header"><div><p className="system-kicker"><span>DIR 04</span> PERSONNEL RECORD</p><h1>Matt Beitler</h1><p>STUDENT BUILDER / ROBOTICS / SOFTWARE / RESEARCH</p></div><div className="personnel-stamp">PUBLIC COPY<span>REV 2026.07</span></div></header>
    <div className="personnel-grid">
      <aside><section><p>IDENTIFICATION</p><dl><div><dt>LOCATION</dt><dd>Pennsylvania, US</dd></div><div><dt>STATUS</dt><dd>Student / Active</dd></div><div><dt>FOCUS</dt><dd>Robotics, AI, computational biology</dd></div></dl></section><section><p>TECHNICAL SYSTEMS</p>{skillSystems.map((group) => <div className="resume-skill" key={group.label}><h3>{group.label}</h3><span>{group.items.join(" · ")}</span></div>)}</section><section><p>EDUCATION</p><h3>HIGH SCHOOL</h3><span>School and graduation year to add</span></section></aside>
      <main>
        <section><p>01 / SELECTED BUILDS</p><article><h2>FTC ROBOTICS SOFTWARE</h2><span>CAPTAIN / PROGRAMMER · 2024—NOW</span><p>Develop robot software, autonomous routines, localization, vision, controls, testing practices, and engineering documentation for FTC Team 18603 Terabridges.</p></article><article><h2>FTC AI ASSISTANT</h2><span>CREATOR / DEVELOPER · 2026</span><p>Designing a debugging workflow that connects robot code, intended behavior, and telemetry context.</p></article><article><h2>COMPUTATIONAL BIOLOGY</h2><span>RESEARCH EXPLORATION · 2025—NOW</span><p>Applied Python, algorithms, analysis, and visualization to biological sequence and modeling topics.</p></article></section>
        <section><p>02 / EXPERIENCE</p><article><h2>CMU PRE-COLLEGE GCET</h2><span>CARNEGIE MELLON UNIVERSITY · SUMMER 2026</span><p>Explored the intersection of emerging technology, culture, humanities, ethics, and creative practice through project development and presentation.</p></article><article><h2>COMPETITIONS + ACTIVITIES</h2><span>SELECTED RECORD</span><p>Science Olympiad, Samsung Solve for Tomorrow, Toshiba ExploraVision, FBLA, tennis, and German exchange experience. Final dates and distinctions to add.</p></article></section>
        <section><p>03 / RECOGNITION</p><article><h2>AWARDS + HONORS</h2><p>Selected robotics, STEM, science, academic, program, and athletic recognition. Exact award names and years remain flagged for content completion.</p></article></section>
      </main>
    </div>
    <div className="resume-actions"><span>PDF EXPORT / NOT YET LINKED</span><Link className="signal-button" href="/uplink">CONTACT MATT <b>↗</b></Link></div>
  </div>;
}
