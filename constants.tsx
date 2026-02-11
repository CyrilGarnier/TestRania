
import { Briefcase, Layout, Terminal, Users } from 'lucide-react';
import { Experience, Education, Language, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    title: "Apprentie Chef de Projet Digitaux",
    company: "Enedis",
    location: "Courcouronnes",
    period: "09/25 - Présent",
    tasks: [
      "Pilotage de la digitalisation des processus métiers internes",
      "Conception UX/UI pour de nouveaux outils collaboratifs",
      "Coordination transversale entre les équipes techniques et métiers",
      "Stratégie de communication digitale et accompagnement au changement",
      "Organisation et animation d'événements stratégiques"
    ]
  },
  {
    title: "Apprentie Appui Métier",
    company: "Enedis",
    location: "Courcouronnes",
    period: "08/23 - 08/25",
    tasks: [
      "Optimisation des flux d'information internes via des supports digitaux",
      "Production de contenus vidéo (montage et storytelling)",
      "Gestion logistique et événementielle des séminaires d'unité",
      "Support à la transformation numérique des agents de terrain"
    ]
  },
  {
    title: "Hôtesse de caisse/HP",
    company: "Auchan",
    location: "Bagnolet",
    period: "08/21 - 08/24",
    tasks: [
      "Gestion de la relation client en environnement dynamique",
      "Optimisation du flux de passage en caisse",
      "Fidélisation active et résolution de litiges"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Digitalisation Enedis",
    description: "Refonte des supports de communication internes vers des formats 100% interactifs.",
    tags: ["Project Management", "UI Design", "Office 365"],
    icon: Layout
  },
  {
    title: "Stratégie Vidéo",
    description: "Création d'une série de tutoriels vidéo pour l'onboarding des nouveaux arrivants.",
    tags: ["CapCut", "Storytelling", "RH"],
    icon: Terminal
  },
  {
    title: "Événementiel Hybride",
    description: "Organisation d'un séminaire d'unité mixant présentiel et outils digitaux de vote en direct.",
    tags: ["Event Planning", "Digital Tools", "Coordination"],
    icon: Users
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "BACHELOR CHEF DE PROJET DIGITAUX",
    school: "CFA ITIS",
    period: "2025 - 2026"
  },
  {
    degree: "BTS NDRC (Digitalisation Relation Client)",
    school: "CFA ITIS",
    period: "2023 - 2025"
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Lycée Georges Brassens",
    period: "2022"
  }
];

export const LANGUAGES: Language[] = [
  { name: "Français", level: "Maternel", percentage: 100 },
  { name: "Arabe", level: "Courant", percentage: 95 },
  { name: "Anglais", level: "Intermédiaire (B2)", percentage: 70 },
  { name: "Espagnol", level: "Scolaire", percentage: 45 }
];

export const SKILLS_HARD = ["Gestion de Projet", "Canva & CapCut", "Microsoft 365", "Figma", "Digital Workplace"];
export const SKILLS_SOFT = ["Réactivité", "Intelligence Relationnelle", "Autonomie", "Adaptabilité"];
export const INTERESTS = [
  { name: "Lecture", color: "bg-indigo-100 text-indigo-700" },
  { name: "Voyage", color: "bg-rose-100 text-rose-700" },
  { name: "Bénévolat", color: "bg-amber-100 text-amber-700" },
  { name: "Sport de combat", color: "bg-emerald-100 text-emerald-700" }
];
