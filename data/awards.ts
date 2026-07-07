import type { Award } from "./types";

export const awards: Award[] = [
  { name: "FTC Robotics Award", organization: "FIRST Tech Challenge", year: "Year to add", category: "Robotics", context: "Add the award name, event level, and a concise note about the team's contribution.", tags: ["FTC", "Robotics", "Teamwork"], link: { label: "Robotics details", href: "/robotics" } },
  { name: "Samsung Solve for Tomorrow Recognition", organization: "Samsung", year: "Year to add", category: "STEM / Innovation Competitions", context: "Add the recognition level and the impact or strength of the submitted project.", tags: ["Innovation", "STEM"], link: { label: "Project details", href: "/projects" } },
  { name: "Toshiba ExploraVision Recognition", organization: "Toshiba / NSTA", year: "Year to add", category: "STEM / Innovation Competitions", context: "Add the recognition received for future-focused research and technical communication.", tags: ["Research", "Technical writing"], link: { label: "Project details", href: "/projects" } },
  { name: "Science Olympiad Medal or Placement", organization: "Science Olympiad", year: "Year to add", category: "Science Competitions", context: "Add the event, tournament, placement, and one line of useful context.", tags: ["Science", "Engineering"], link: { label: "Experience details", href: "/experience#competitions" } },
  { name: "Academic Honor", organization: "School or organization", year: "Year to add", category: "Academics", context: "Add a selected academic honor without publishing GPA or a complete grade record.", tags: ["Academics"] },
  { name: "Tennis Achievement", organization: "School or league", year: "Year to add", category: "Activities / Athletics", context: "Add a selected team, league, or personal athletic achievement.", tags: ["Tennis", "Athletics"], link: { label: "Activity details", href: "/experience#activities" } },
  { name: "Program Recognition", organization: "Program to add", year: "Year to add", category: "Programs / Special Recognition", context: "Add selective program admission, distinction, or another special recognition.", tags: ["Program", "Recognition"] },
];

export const awardCategories = ["Robotics", "STEM / Innovation Competitions", "Science Competitions", "Academics", "Activities / Athletics", "Programs / Special Recognition"];
