
import { Experience, Education, Language } from './types';

export const EXPERIENCES: Experience[] = [
  {
    title: "Apprentie Chef de Projet Digitaux",
    company: "Enedis",
    location: "Courcouronnes",
    period: "09/25 - En cours",
    tasks: [
      "Digitalisation des outils et supports internes",
      "Coordination et suivi de projets",
      "Création de supports de communication digitale",
      "Animation et accompagnement des équipes",
      "Organisation d'événements internes"
    ]
  },
  {
    title: "Apprentie Appui Métier",
    company: "Enedis",
    location: "Courcouronnes",
    period: "08/23 - 08/25",
    tasks: [
      "Gestion des événements",
      "Organisation et animation des réunions",
      "Création de supports de communication interne",
      "Gestion de projet",
      "Montages vidéos"
    ]
  },
  {
    title: "Hôtesse de caisse/HP",
    company: "Auchan",
    location: "Bagnolet",
    period: "08/21 - 08/24",
    tasks: [
      "Mise en rayon",
      "Participation à la fidélisation des clients",
      "Gestion de la ligne de caisse",
      "Service client",
      "Vérification des moyens de paiement et de caisse"
    ]
  },
  {
    title: "Préparatrice de commandes",
    company: "G la Dalle",
    location: "Évry",
    period: "04/21 - 07/21",
    tasks: [
      "Prise de commandes",
      "Préparation des menus",
      "Gestion et rangement des stocks",
      "Gestion de la salle",
      "Encaissement client"
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "BACHELOR CHEF DE PROJET DIGITAUX",
    school: "CFA ITIS",
    period: "2025 - En cours"
  },
  {
    degree: "BTS NDRC Négociation Digitalisation de la Relation Client",
    school: "CFA ITIS",
    period: "2023 - 2025"
  },
  {
    degree: "BTS CI Commerce International",
    school: "CFA ITIS",
    period: "Sept 2023 - Fév 2024"
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
  { name: "Anglais", level: "Intermédiaire", percentage: 65 },
  { name: "Espagnol", level: "Scolaire", percentage: 40 }
];

export const SKILLS_HARD = ["Canva / Cap Cut", "Pack Office", "Microsoft 365", "Figma / IA"];
export const SKILLS_SOFT = ["Réactive", "À l'écoute", "Autonome", "Capacité d'adaptation"];
export const INTERESTS = [
  { name: "Lecture", color: "bg-amber-200 text-amber-900" },
  { name: "Voyage", color: "bg-pink-200 text-pink-900" },
  { name: "Bénévolat", color: "bg-orange-200 text-orange-900" },
  { name: "Sport de combat", color: "bg-emerald-200 text-emerald-900" }
];
