// ─── Personal Info ──────────────────────────────────────────────────────────
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  dob: string;
  email: string;
  address: string;
  github: string;
}

// ─── Skills ─────────────────────────────────────────────────────────────────
export interface SkillCategory {
  id: string;
  label: string;
  icon: string; // lucide icon name
  skills: string[];
}

// ─── Work Experience ─────────────────────────────────────────────────────────
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

// ─── Education ───────────────────────────────────────────────────────────────
export interface Education {
  id: string;
  school: string;
  major: string;
  period: string;
  gpa?: string;
  thesis?: string;
}

// ─── Certificate ─────────────────────────────────────────────────────────────
export interface Certificate {
  id: string;
  issuer: string;
  year: string;
  course: string;
}

// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  github: string;
  technologies: string[];
  description: string;
  achievement: string;
}
