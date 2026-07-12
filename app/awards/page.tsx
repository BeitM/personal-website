import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Awards Data" };

const awards = [
  ["REC_001", "FTC ROBOTICS AWARD", "FIRST TECH CHALLENGE", "YEAR / EVENT LEVEL TO ADD", "ROBOTICS"],
  ["REC_002", "SAMSUNG SOLVE FOR TOMORROW", "SAMSUNG", "RECOGNITION LEVEL TO ADD", "STEM INNOVATION"],
  ["REC_003", "TOSHIBA EXPLORAVISION", "TOSHIBA / NSTA", "RECOGNITION LEVEL TO ADD", "RESEARCH"],
  ["REC_004", "SCIENCE OLYMPIAD PLACEMENT", "SCIENCE OLYMPIAD", "EVENT / TOURNAMENT TO ADD", "SCIENCE"],
  ["REC_005", "ACADEMIC + PROGRAM HONORS", "SELECTED RECORD", "FINAL NAMES / YEARS TO ADD", "ACADEMICS"],
];

export default function AwardsPage() {
  return <div className="record-page archive-width">
    <header className="directory-hero"><p className="system-kicker"><span>AWARDS.DAT</span> VERIFIED / PENDING FIELDS</p><h1>RECOGNITION RECORDS.</h1><div><p>A compact database of selected recognition. Fields marked “to add” are intentionally incomplete rather than replaced with invented details.</p><span>{awards.length} RECORDS / MIXED STATUS</span></div></header>
    <section className="award-database"><header><span>ID</span><span>RECORD</span><span>ISSUER</span><span>DETAIL</span><span>CLASS</span></header>{awards.map((award) => <article key={award[0]}>{award.map((field, index) => <span className={index === 0 ? "award-id" : index === 3 ? "award-pending" : ""} key={field}>{field}</span>)}</article>)}</section>
    <p className="database-note"><span>!</span> CONTENT INPUT REQUIRED: exact award names, dates, event levels, and placements.</p>
    <nav className="next-record"><span>RELATED FILE</span><Link href="/personnel-record">RESUME.DOC <b>→</b></Link></nav>
  </div>;
}
