export type ProjectStatus = "ACTIVE" | "DEVELOPING" | "RESEARCH" | "ARCHIVED";

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  status: ProjectStatus;
  role: string;
  year: string;
  summary: string;
  systems: string[];
  featured?: boolean;
  signal: number;
  sections: ProjectSection[];
  result: string;
  logs: string[];
};

export type ArchiveEntry = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  tags: string[];
};

export type TimelineEvent = {
  year: string;
  label: string;
  detail: string;
};

export type SkillSystem = {
  label: string;
  level: "PRIMARY" | "WORKING" | "EXPLORING";
  items: string[];
};

export type ExternalLink = {
  label: string;
  value: string;
  href: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "FILE 001",
    slug: "robolab-ftc",
    title: "ROBO LAB / FTC",
    shortTitle: "Robo Lab FTC",
    type: "ROBOTICS SYSTEM",
    status: "ACTIVE",
    role: "CAPTAIN / PROGRAMMER",
    year: "2024—NOW",
    summary: "Robot software, autonomous strategy, localization, vision, and controls developed where code has to survive contact with the field.",
    systems: ["JAVA", "FTC SDK", "VISION", "CONTROL SYSTEMS"],
    featured: true,
    signal: 96,
    sections: [
      { title: "Problem", body: "A competition robot must coordinate mechanisms, navigation, sensing, and driver intent under strict timing and reliability constraints." },
      { title: "What was built", body: "A growing robot software system covering driver controls, mechanism states, autonomous routines, localization experiments, and vision-assisted behavior." },
      { title: "How it works", body: "The code separates hardware behavior from match strategy, uses explicit system states, and turns testing observations into repeatable controls and autonomous sequences." },
      { title: "Development process", body: "Build, test, record failure, isolate the system, tune, and return to full-field conditions. Documentation preserves why decisions were made, not only what changed." },
    ],
    result: "IN DEVELOPMENT — FIELD TESTING CONTINUES",
    logs: ["Autonomous sequencing notes", "Localization test record", "Vision pipeline experiments"],
  },
  {
    id: "FILE 002",
    slug: "ftc-ai-assistant",
    title: "FTC AI ASSISTANT",
    shortTitle: "FTC AI Assistant",
    type: "AI / ROBOTICS TOOL",
    status: "DEVELOPING",
    role: "CREATOR / DEVELOPER",
    year: "2026",
    summary: "A debugging assistant concept that connects robot code, intended behavior, and telemetry instead of treating each signal in isolation.",
    systems: ["NEXT.JS", "AI", "LOG ANALYSIS", "TELEMETRY"],
    signal: 82,
    sections: [
      { title: "Problem", body: "Robot bugs are rarely explained by code alone. The intended behavior, physical system, telemetry, and match context all matter." },
      { title: "What was built", body: "A prototype workflow and data model for combining code excerpts, operator observations, and telemetry into focused debugging context." },
      { title: "How it works", body: "The system structures evidence before requesting an explanation, helping narrow likely causes and propose checks that can be run on the actual robot." },
      { title: "Development process", body: "Current work focuses on useful context boundaries, trustworthy suggestions, and keeping the human programmer in control of diagnosis." },
    ],
    result: "PROTOTYPE PLANNING",
    logs: ["Context model draft", "Telemetry field inventory", "Safety and trust notes"],
  },
  {
    id: "FILE 003",
    slug: "computational-biology",
    title: "COMPUTATIONAL BIOLOGY",
    shortTitle: "Computational Biology",
    type: "RESEARCH SERIES",
    status: "RESEARCH",
    role: "RESEARCHER / STUDENT",
    year: "2025—NOW",
    summary: "Experiments in sequence alignment, biological data analysis, modeling, and visualization.",
    systems: ["PYTHON", "ALGORITHMS", "DATA ANALYSIS", "BIOLOGY"],
    signal: 68,
    sections: [
      { title: "Problem", body: "Biological systems produce complex data whose structure is difficult to see without computational tools and careful interpretation." },
      { title: "What was built", body: "Coursework and research explorations spanning sequence alignment, beta diversity analysis, and cell-cycle visualization." },
      { title: "How it works", body: "Algorithms organize or compare biological observations; visualizations then expose patterns that can be questioned rather than merely displayed." },
      { title: "Development process", body: "Each experiment begins with the biological question, then chooses the smallest computational method capable of testing it." },
    ],
    result: "ONGOING RESEARCH EXPLORATION",
    logs: ["Sequence alignment notes", "Beta diversity study", "Cell-cycle model sketches"],
  },
  {
    id: "FILE 004",
    slug: "personal-archive",
    title: "PERSONAL ARCHIVE",
    shortTitle: "Personal Archive",
    type: "WEB SYSTEM",
    status: "ACTIVE",
    role: "DESIGNER / DEVELOPER",
    year: "2026",
    summary: "This public terminal: a durable system for projects, experiments, history, and work still in progress.",
    systems: ["NEXT.JS", "TYPESCRIPT", "MOTION", "CSS"],
    signal: 91,
    sections: [
      { title: "Problem", body: "A normal portfolio flattens very different kinds of work into identical cards and quickly becomes outdated." },
      { title: "What was built", body: "A structured personal archive with parallel visual and command navigation, reusable project records, and an intentionally restrained machine identity." },
      { title: "How it works", body: "Central TypeScript records drive directory listings and project pages. A persistent shell maintains location and controls while routes change inside it." },
      { title: "Development process", body: "The system is built in stages: architecture, shell, content hierarchy, interaction, project files, then performance and accessibility review." },
    ],
    result: "PUBLIC SYSTEM ONLINE",
    logs: ["Interface architecture", "CRT restraint study", "Navigation command map"],
  },
];

export const archiveEntries: ArchiveEntry[] = [
  { id: "LOG 024", slug: "robotics-debugging-context", title: "What context does a robot debugging model need?", date: "2026.07", category: "AI / ROBOTICS", summary: "A working inventory of the code, intent, telemetry, hardware state, and test history that make a diagnosis useful.", tags: ["AI", "Telemetry", "FTC"] },
  { id: "LOG 019", slug: "world-models-geometry", title: "Notes on world models and 3D geometry", date: "2026.03", category: "RESEARCH", summary: "Questions about representing space, motion, and uncertainty in systems that reason about dynamic environments.", tags: ["World models", "3D geometry"] },
  { id: "LOG 014", slug: "sequence-alignment", title: "Sequence alignment as an algorithmic lens", date: "2025.11", category: "COMPUTATIONAL BIOLOGY", summary: "Studying how scoring systems and dynamic programming expose relationships between biological sequences.", tags: ["Biology", "Algorithms", "Python"] },
  { id: "LOG 008", slug: "alexnet", title: "Why AlexNet changed computer vision", date: "2025.06", category: "AI", summary: "A compact record of convolution, learned feature hierarchies, and the practical conditions behind a turning point.", tags: ["CNNs", "Computer vision"] },
];

export const timeline: TimelineEvent[] = [
  { year: "2023", label: "SYSTEM ENTRY", detail: "Programming became a tool for building, not only an academic subject." },
  { year: "2024", label: "ROBOTICS LINK", detail: "Joined the feedback loop between software decisions and physical machines." },
  { year: "2025", label: "RESEARCH BRANCH", detail: "Expanded into AI, data analysis, and computational biology." },
  { year: "2026", label: "PUBLIC ARCHIVE", detail: "Began organizing projects and unfinished questions into a living system." },
];

export const skillSystems: SkillSystem[] = [
  { label: "BUILD", level: "PRIMARY", items: ["Java", "Python", "TypeScript", "Next.js"] },
  { label: "ROBOT", level: "PRIMARY", items: ["FTC SDK", "Autonomous", "Localization", "Controls"] },
  { label: "RESEARCH", level: "WORKING", items: ["Data analysis", "Algorithms", "Visualization", "Technical writing"] },
  { label: "FRONTIER", level: "EXPLORING", items: ["AI integration", "World models", "Computational biology"] },
];

export const externalLinks: ExternalLink[] = [
  { label: "EMAIL", value: "ADD ADDRESS", href: "mailto:your.email@example.com", placeholder: true },
  { label: "GITHUB", value: "ADD PROFILE", href: "https://github.com/", placeholder: true },
  { label: "LINKEDIN", value: "ADD PROFILE", href: "https://www.linkedin.com/", placeholder: true },
  { label: "PERSONNEL RECORD", value: "OPEN INTERNAL FILE", href: "/personnel-record" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
