import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "MB/OS Instructions" };

const instructions = [
  ["01", "OPEN A FILE", "Single-click any desktop file or folder. The selected record opens inside an MB/OS application window."],
  ["02", "BROWSE FILES", "Use FILES in the upper-left menu bar to open the complete archive list from anywhere in the system."],
  ["03", "RETURN HOME", "Choose DESKTOP in the menu bar, close the application window, or press Escape to return to the desktop."],
  ["04", "MOVE BACK", "Use BACK inside an application window to return to the previous record or directory."],
  ["05", "REPLAY STARTUP", "Open REPLAY_BOOT.EXE on the desktop to restart the archive introduction."],
  ["06", "READ THE SIGNAL", "Red indicates active controls or important system state. Phosphor green identifies readable data and available files."],
];

export default function InstructionsPage() {
  return <div className="record-page archive-width instructions-page">
    <header className="instructions-header"><p className="system-kicker"><span>INSTRUCTIONS.TXT</span> SYSTEM MANUAL / REV 26.07</p><h1>MB/OS<br />INSTRUCTIONS</h1><p>This archive behaves like a small fictional desktop. Everything essential can be reached by clicking visible files—no terminal commands are required.</p></header>
    <section className="instruction-list">{instructions.map(([id, title, body]) => <article key={id}><span>{id}</span><div><h2>{title}</h2><p>{body}</p></div><b>READY</b></article>)}</section>
    <footer className="instructions-footer"><span>END OF MANUAL</span><Link href="/">RETURN TO DESKTOP →</Link></footer>
  </div>;
}
