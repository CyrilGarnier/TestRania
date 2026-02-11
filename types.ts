
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
  level?: number; // 0 to 100 for visual bars
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}
