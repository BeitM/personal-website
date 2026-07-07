import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><p className="footer-name">Matt Beitler</p><p>Student builder exploring technology with purpose.</p></div>
        <div className="footer-links"><Link href="/projects">Projects</Link><Link href="/resume">Resume</Link><Link href="/contact">Contact</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Matt Beitler</p>
      </div>
    </footer>
  );
}
