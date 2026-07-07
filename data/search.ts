export type SearchItem = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

export const searchItems: SearchItem[] = [
  { title: "Home", description: "Introduction, featured areas, skills, and learning preview", href: "/", keywords: ["Matt Beitler", "portfolio", "skills", "currently working"] },
  { title: "Projects", description: "Technical projects across robotics, AI, biology, and web development", href: "/projects", keywords: ["FTC AI Assistant", "computational biology", "Samsung", "Toshiba", "website"] },
  { title: "FTC Robotics", description: "Team 18603 leadership, software, autonomous, vision, and controls", href: "/robotics", keywords: ["Terabridges", "Java", "FTC SDK", "localization", "computer vision"] },
  { title: "Experience", description: "Programs, competitions, activities, and research", href: "/experience", keywords: ["CMU GCET", "Science Olympiad", "FBLA", "tennis", "German exchange"] },
  { title: "Awards & Honors", description: "Recognition in robotics, STEM, science, academics, and activities", href: "/awards", keywords: ["awards", "medals", "recognition", "honors"] },
  { title: "Resume", description: "Education, technical skills, projects, leadership, and experience", href: "/resume", keywords: ["coursework", "education", "technical skills", "PDF"] },
  { title: "Contact", description: "Professional contact links", href: "/contact", keywords: ["email", "GitHub", "LinkedIn"] },
  { title: "Learning Log", description: "Notes on AI, robotics, biology, and world models", href: "/learning", keywords: ["CNN", "AlexNet", "sequence alignment", "3D geometry"] },
];
