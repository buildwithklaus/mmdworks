export interface RenderImage {
  id: string;
  src: string;
  alt: string;
  project: string;
  projectSlug: string;
}

export const renderImages: RenderImage[] = [
  {
    id: "ciala-render-1",
    src: "/images/renders/ciala-render-1.jpg",
    alt: "Ciala Residences 3D render — luxury estate overview",
    project: "Ciala Residences",
    projectSlug: "ciala-residences",
  },
  {
    id: "ciala-render-2",
    src: "/images/renders/ciala-render-2.jpg",
    alt: "Ciala Residences 3D render — entrance and driveway",
    project: "Ciala Residences",
    projectSlug: "ciala-residences",
  },
];
