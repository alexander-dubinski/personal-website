interface EducationEntry {
  degree: string;
  description: string;
  end_year: number;
  gpa: number;
  image: string;
  major: string;
  school: string;
  start_year: number;
}

interface CareerEntry {
  company: string;
  department: string;
  team: string;
  description: string;
  end_year: number;
  image: string;
  start_year: number;
  title: string;
}

interface Image {
  url: string;
  alt: string;
}
