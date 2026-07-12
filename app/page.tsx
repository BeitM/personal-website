import Link from "next/link";
import { ReplayBootButton } from "@/components/system/ReplayBootButton";
import { SystemDiskButton } from "@/components/system/SystemDiskButton";
import { archiveEntries } from "@/data/archive";

const desktopFiles = [
  { name: "ABOUT_ME", ext: "SYS", href: "/identity", type: "system", note: "identity" },
  { name: "PROJECTS", ext: "FOLDER", href: "/builds", type: "folder", note: "4 items" },
  { name: "EXPERIENCE", ext: "TXT", href: "/experience", type: "document", note: "record" },
  { name: "ARCHIVE", ext: "FOLDER", href: "/archive", type: "folder", note: `${archiveEntries.length} logs` },
  { name: "AWARDS", ext: "DAT", href: "/awards", type: "data", note: "indexed" },
  { name: "CONTACT", ext: "EXE", href: "/uplink", type: "application", note: "uplink" },
  { name: "RESUME", ext: "DOC", href: "/personnel-record", type: "document", note: "public" },
];

export default function Home() {
  return <div className="desktop-surface">
    <div className="desktop-brand" aria-hidden="true"><span>MATT</span><b>BEITLER</b><small>DIGITAL ARCHIVE / PUBLIC DESKTOP</small></div>

    <section className="desktop-icons" aria-label="Desktop files and folders">
      {desktopFiles.map((file) => <Link className="desktop-file" href={file.href} key={file.name}>
        <span className={`desktop-file-art ${file.type}`} aria-hidden="true"><i /><b>{file.ext}</b></span>
        <strong>{file.name}</strong><small>{file.note}</small>
      </Link>)}
    </section>

    <div className="desktop-top-tools"><ReplayBootButton /><Link className="desktop-file instructions-file" href="/instructions"><span className="desktop-file-art document instructions-art" aria-hidden="true"><i /><b>TXT</b></span><strong>INSTRUCTIONS</strong><small>MB/OS guide</small></Link></div>

    <SystemDiskButton />
  </div>;
}
