import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { PageTOC } from "@/components/PageTOC";
export const metadata: Metadata = { title: "Projects" };
export default function ProjectsPage(){ return <><section className="page-hero"><div className="container"><p className="eyebrow">Selected work</p><h1>Projects built to learn, test, and solve.</h1><p className="lead">A working archive of technical projects, early concepts, coursework, and experiments. Entries will evolve as the work does.</p></div></section><section className="section"><div className="container page-with-toc"><div className="grid-2">{projects.map((project,index)=><div id={`project-${index+1}`} className="anchor-section" key={project.title}><ProjectCard project={project}/></div>)}</div><PageTOC items={projects.map((project,index)=>({label:project.title,href:`#project-${index+1}`}))}/></div></section></>; }
