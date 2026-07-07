import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillTag } from "@/components/SkillTag";
import { LearningEntry } from "@/components/LearningEntry";
import { PageTOC } from "@/components/PageTOC";
import { skills } from "@/data/skills";
import { learning } from "@/data/learning";

const features = [
  ["01", "FTC Robotics", "Leadership, software, autonomous systems, vision, localization, and control systems.", "/robotics"],
  ["02", "Projects", "Technical work across robotics, AI, computational biology, and web development.", "/projects"],
  ["03", "Experience", "Programs, competitions, activities, and early research exploration.", "/experience"],
  ["04", "Awards", "A quick record of recognition across STEM, academics, robotics, and activities.", "/awards"],
];

export default function Home() {
  return <>
    <section id="introduction" className="hero anchor-section"><div className="container page-with-toc"><div className="hero-grid"><div><p className="hero-kicker">Student · Builder · Problem Solver</p><h1>Hi, I&apos;m <span>Matt Beitler.</span></h1><p className="lead">I&apos;m a student builder interested in robotics, AI, computer science, computational biology, and STEM innovation. This site documents my projects, technical growth, robotics work, experiences, competitions, and learning progress.</p><div className="button-row"><Link className="button button-primary" href="/projects">Explore my projects</Link><Link className="button button-secondary" href="/resume">View resume</Link></div></div><div className="hero-panel" aria-label="Areas of interest"><p className="code-line"><strong>const</strong> interests = [</p><p className="code-line">&nbsp; <em>&quot;robotics&quot;</em>,</p><p className="code-line">&nbsp; <em>&quot;artificial intelligence&quot;</em>,</p><p className="code-line">&nbsp; <em>&quot;computational biology&quot;</em>,</p><p className="code-line">&nbsp; <em>&quot;engineering&quot;</em></p><p className="code-line">];</p></div></div><PageTOC items={[{label:"Introduction",href:"#introduction"},{label:"Explore",href:"#explore"},{label:"Skills",href:"#skills"},{label:"Currently working",href:"#current"},{label:"Learning log",href:"#learning"}]}/></div></section>
    <section id="explore" className="section section-soft anchor-section"><div className="container"><SectionHeader eyebrow="Explore" title="Building across disciplines" description="Each section captures a different angle—from how a system works to what I learned while building it." /><div className="grid-4">{features.map(([number,title,description,href]) => <Link href={href} className="card feature-card" key={title}><span className="feature-number">{number}</span><div><h3>{title}</h3><p>{description}</p><span className="text-link">Explore <span aria-hidden="true">→</span></span></div></Link>)}</div></div></section>
    <section id="skills" className="section anchor-section"><div className="container"><SectionHeader eyebrow="Toolkit" title="Skills I am building" description="A growing mix of programming, engineering, analysis, and communication skills." align="center" /><div className="skill-cloud">{skills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}</div></div></section>
    <section id="current" className="section section-soft anchor-section"><div className="container"><SectionHeader eyebrow="Now" title="Currently working on" description="Developing FTC robot software, planning an AI-assisted robotics debugging tool, and expanding this site as new work takes shape." /></div></section>
    <section id="learning" className="section anchor-section"><div className="container"><SectionHeader eyebrow="Learning log" title="Ideas in progress" description="Short notes on topics I am studying and questions I want to understand better." /><div className="learning-list">{learning.slice(0,3).map(item => <LearningEntry key={item.title} item={item} />)}</div><Link className="text-link" href="/learning">View the complete learning log <span aria-hidden="true">→</span></Link></div></section>
  </>;
}
