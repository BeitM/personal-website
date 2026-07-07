import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "FTC AI Assistant",
    description: "An AI tool concept for helping FTC programmers debug robot behavior by connecting code, intended behavior, and telemetry or log data.",
    technologies: ["Next.js", "AI integration", "Log analysis", "Robotics controls"],
    status: "Concept / prototype planning",
    category: "AI + Robotics",
  },
  {
    title: "FTC Robotics Software",
    description: "Robot control, autonomous routines, localization, vision, and shooter or turret systems developed for FTC Team 18603 Terabridges.",
    technologies: ["Java", "FTC SDK", "Control systems", "Localization", "Computer vision"],
    status: "Ongoing",
    category: "Robotics",
    link: { label: "Robotics story", href: "/robotics" },
  },
  {
    title: "Computational Biology Projects",
    description: "Explorations in sequence alignment, beta diversity analysis, and cell-cycle modeling and visualization.",
    technologies: ["Python", "Data analysis", "Visualization", "Algorithms"],
    status: "Coursework / research exploration",
    category: "Computational Biology",
  },
  {
    title: "Samsung Solve for Tomorrow Project",
    description: "A developing record of the project problem, proposed solution, design process, and competition submission.",
    technologies: ["STEM innovation", "Design process", "Technical communication"],
    status: "Placeholder",
    category: "Innovation",
    link: { label: "Competition context", href: "/experience#competitions" },
  },
  {
    title: "Toshiba ExploraVision Project",
    description: "A placeholder for a future-technology concept, supporting research, technical writing, and competition submission.",
    technologies: ["Research", "Future technology", "Technical writing"],
    status: "Placeholder",
    category: "Innovation",
    link: { label: "Competition context", href: "/experience#competitions" },
  },
  {
    title: "Personal Website",
    description: "This site—a living portfolio designed to document projects, experiences, recognition, and technical growth over time.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "In development",
    category: "Web Development",
  },
];
