
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: any;
}
