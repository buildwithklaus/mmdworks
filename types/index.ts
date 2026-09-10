export interface Service {
  slug: string;
  title: string;
  icon: string; // lucide icon name
  shortDescription: string;
  fullDescription: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Commercial" | "Residential" | "Roads" | "Industrial" | "Renovations";
  image: string;
  location: string;
  year: number;
  client: string;
  services: string[];
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  rating: number;
  review: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: "Commercial" | "Residential" | "Roads" | "Industrial" | "Renovations";
  image: string;
  gallery?: string[];
  location: string;
  year: number;
  status?: "completed" | "ongoing";
  client: string;
  services: string[];
  description: string;
  featured?: boolean;
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  rating: number;
  review: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}