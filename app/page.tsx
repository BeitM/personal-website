import Link from "next/link";
import { AsciiTypingIntro } from "@/components/AsciiTypingIntro";
import { LearningEntry } from "@/components/LearningEntry";
import { PageTOC } from "@/components/PageTOC";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillTag } from "@/components/SkillTag";
import { learning } from "@/data/learning";
import { skills } from "@/data/skills";

const features = [
  ["01", "FTC Robotics", "Leadership, software, autonomous systems, vision, localization, and control systems.", "/robotics"],
  ["02", "Projects", "Technical work across robotics, AI, computational biology, and web development.", "/projects"],
  ["03", "Experience", "Programs, competitions, activities, and early research exploration.", "/experience"],
  ["04", "Awards", "Recognition across STEM, academics, robotics, and activities.", "/awards"],
];

export default function Home() {
  return (
    <>
      <section id="introduction" className="hero anchor-section">
        <div className="container page-with-toc">
          <div className="hero-showcase">
            <AsciiTypingIntro />
            <p className="hero-role">Student builder // robotics // AI // computer science // computational biology</p>
            <p className="hero-summary">Building, debugging, competing, researching, and documenting progress.</p>
            <div className="button-row hero-actions">
              <Link className="button button-primary" href="/projects">Open Projects</Link>
              <Link className="button button-secondary" href="/resume">View Resume</Link>
            </div>
          </div>
          <PageTOC items={[{ label: "Introduction", href: "#introduction" }, { label: "Current status", href: "#current" }, { label: "Selected work", href: "#explore" }, { label: "Skills", href: "#skills" }, { label: "Learning log", href: "#learning" }]} />
        </div>
      </section>

      <section id="current" className="section section-soft anchor-section">
        <div className="container">
          <SectionHeader eyebrow="current_status" title="Work in progress" description="A concise view of what is active now." />
          <div className="status-grid">
            <div className="status-row"><span className="status-dot" /><span>Building a personal portfolio system</span><b>ACTIVE</b></div>
            <div className="status-row"><span className="status-dot" /><span>Developing an FTC AI assistant concept</span><b>IN PROGRESS</b></div>
            <div className="status-row"><span className="status-dot" /><span>Exploring AI, robotics, and computational biology</span><b>LEARNING</b></div>
          </div>
        </div>
      </section>

      <section id="explore" className="section anchor-section">
        <div className="container">
          <SectionHeader eyebrow="selected_work" title="Selected work" description="Projects and experiences viewed through what I built, tested, and learned." />
          <div className="grid-4">
            {features.map(([number, title, description, href]) => (
              <Link href={href} className="card feature-card" key={title}>
                <span className="feature-number">ENTRY_{number}</span>
                <div><h3>{title}</h3><p>{description}</p><span className="text-link">View details <span aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-soft anchor-section">
        <div className="container">
          <SectionHeader eyebrow="skills" title="Technical toolkit" description="Programming, engineering, analysis, and communication capabilities currently in use." />
          <div className="skill-cloud skill-cloud-left">{skills.map((skill) => <SkillTag key={skill}>{skill}</SkillTag>)}</div>
        </div>
      </section>

      <section id="learning" className="section anchor-section">
        <div className="container">
          <SectionHeader eyebrow="learning_log" title="Ideas in progress" description="Short notes on topics I am studying and questions I want to understand better." />
          <div className="learning-list">{learning.slice(0, 3).map((item) => <LearningEntry key={item.title} item={item} />)}</div>
          <Link className="text-link" href="/learning">View learning log <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
