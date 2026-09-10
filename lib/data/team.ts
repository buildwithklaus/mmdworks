export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Dennis Bello",
    role: "Construction Manager",
    photo: "/images/team/bello1.jpg",
    bio: "With over 20 years in construction and civil engineering, Michael founded MD Works to bring uncompromising quality and integrity to every build.",
  },
  {
    name: "Erick Ayako",
    role: "Chief Architect",
    photo: "/images/team/diana-wanjiru.jpg",
    bio: "Diana oversees day-to-day operations, ensuring every project runs on schedule, on budget, and to the highest safety standards.",
  },
  {
    name: "Simon",
    role: "Head of Civil Engineering",
    photo: "/images/team/samuel-kiptoo.jpg",
    bio: "A licensed civil engineer with a decade of infrastructure experience, Samuel leads structural design and technical compliance.",
  },
  {
  name: "Edwin Wafula",
  role: "Accountant",
  photo: "/images/about/dwin.jpg",
  bio: "Edwin manages the company's financial operations, ensuring accurate financial reporting, responsible budgeting, and sound financial management across all projects.",
},
];