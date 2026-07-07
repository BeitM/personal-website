export type LinkInfo = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  category: string;
  link?: LinkInfo;
};

export type Experience = {
  name: string;
  type: string;
  organization?: string;
  date: string;
  description: string;
  takeaways?: string;
  tags: string[];
  link?: LinkInfo;
};

export type Award = {
  name: string;
  organization: string;
  year: string;
  category: string;
  context: string;
  tags?: string[];
  link?: LinkInfo;
};

export type LearningItem = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};
