interface EducationEntry {
  degree: string;
  description: string;
  end_year: number;
  gpa: number;
  img: string;
  major: string;
  order: number;
  school: string;
  start_year: number;
}

interface CareerEntry {
  company: string;
  department: string;
  team: string;
  description: string;
  end_year: number;
  img: string;
  order: number;
  start_year: number;
  title: string;
}

interface Image {
  url: string;
  alt: string;
}

export interface ProjectContent {
  description: string;
  end_year: number;
  images: Image[];
  main_img: Image;
  name: string;
  order: number;
  start_year: number;
  tools: string[];
}
