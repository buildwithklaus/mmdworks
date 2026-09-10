export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Sites" | "Finished" | "Workers" | "Machinery" | "Before & After";
  height: "short" | "medium" | "tall"; // controls masonry span
}

export const galleryImages: GalleryImage[] = [
  // Ciala Residences
  {
    id: "ciala-1",
    src: "/images/ciala1.jpg",
    alt: "Ciala Residences construction site",
    category: "Sites",
    height: "tall",
  },
  {
    id: "ciala-2",
    src: "/images/ciala2.jpg",
    alt: "Ciala Residences construction progress",
    category: "Sites",
    height: "medium",
  },
  {
    id: "ciala-3",
    src: "/images/ciala3.jpg",
    alt: "Ciala Residences development",
    category: "Sites",
    height: "short",
  },
  {
    id: "ciala-4",
    src: "/images/ciala4.jpg",
    alt: "Ciala Residences site work",
    category: "Sites",
    height: "medium",
  },

  // Kabete House Renovation
  {
    id: "kabete-1",
    src: "/images/kabete/one.jpeg",
    alt: "Kabete house renovation",
    category: "Finished",
    height: "tall",
  },
  // {
  //   id: "kabete-2",
  //   src: "/images/kabete/two.jpeg",
  //   alt: "Kabete house renovation detail",
  //   category: "Finished",
  //   height: "short",
  // },
  {
    id: "kabete-3",
    src: "/images/kabete/three.jpeg",
    alt: "Kabete house renovation interior",
    category: "Finished",
    height: "medium",
  },
  {
    id: "kabete-4",
    src: "/images/kabete/four.jpeg",
    alt: "Kabete house renovation finish",
    category: "Finished",
    height: "tall",
  },
  {
    id: "kabete-5",
    src: "/images/kabete/five.jpeg",
    alt: "Kabete house renovation exterior",
    category: "Finished",
    height: "short",
  },
  {
    id: "kabete-6",
    src: "/images/kabete/six.jpeg",
    alt: "Kabete house renovation completed",
    category: "Finished",
    height: "medium",
  },
  // {
  //   id: "kabete-7",
  //   src: "/images/kabete/seven.jpeg",
  //   alt: "Kabete house renovation final result",
  //   category: "Finished",
  //   height: "tall",
  // },
  {
    id: "kabete-8",
    src: "/images/kabete/eight.jpeg",
    alt: "Kabete house renovation final result",
    category: "Finished",
    height: "tall",
  },
  // {
  //   id: "kabete-9",
  //   src: "/images/kabete/nine.jpeg",
  //   alt: "Kabete house renovation final result",
  //   category: "Finished",
  //   height: "tall",
  // },

  // Entada Residential House
  {
    id: "entada-1",
    src: "/images/entada/one.jpeg",
    alt: "Entada residential house construction",
    category: "Finished",
    height: "tall",
  },
  {
    id: "entada-2",
    src: "/images/entada/two.jpeg",
    alt: "Entada residential house",
    category: "Finished",
    height: "medium",
  },
  {
    id: "entada-3",
    src: "/images/entada/three.jpeg",
    alt: "Entada residential house construction",
    category: "Finished",
    height: "short",
  },
  {
    id: "entada-4",
    src: "/images/entada/four.jpeg",
    alt: "Entada residential house",
    category: "Finished",
    height: "tall",
  },
  {
    id: "entada-5",
    src: "/images/entada/five.jpeg",
    alt: "Entada residential house construction",
    category: "Finished",
    height: "medium",
  },
  {
    id: "entada-6",
    src: "/images/entada/six.jpeg",
    alt: "Entada residential house",
    category: "Finished",
    height: "short",
  },
  {
    id: "entada-7",
    src: "/images/entada/seven.jpeg",
    alt: "Entada residential house completed",
    category: "Finished",
    height: "tall",
  },

  // AMG Mall
  {
    id: "amg-1",
    src: "/images/amg/one.jpeg",
    alt: "AMG Mall construction site",
    category: "Sites",
    height: "medium",
  },
  {
    id: "amg-2",
    src: "/images/amg/two.jpeg",
    alt: "AMG Mall cladding work",
    category: "Sites",
    height: "short",
  },
  {
    id: "amg-3",
    src: "/images/amg/three.jpeg",
    alt: "AMG Mall tiling progress",
    category: "Sites",
    height: "tall",
  },
  {
    id: "amg-4",
    src: "/images/amg/four.jpeg",
    alt: "AMG Mall gypsum works",
    category: "Sites",
    height: "medium",
  },
  {
    id: "amg-5",
    src: "/images/amg/five.jpeg",
    alt: "AMG Mall staircase construction",
    category: "Sites",
    height: "short",
  },
  {
    id: "amg-6",
    src: "/images/amg/six.jpeg",
    alt: "AMG Mall interior progress",
    category: "Sites",
    height: "tall",
  },
  {
    id: "amg-7",
    src: "/images/amg/seven.jpeg",
    alt: "AMG Mall construction detail",
    category: "Sites",
    height: "medium",
  },
  {
    id: "amg-8",
    src: "/images/amg/eight.jpeg",
    alt: "AMG Mall site progress",
    category: "Sites",
    height: "short",
  },
  {
    id: "amg-9",
    src: "/images/amg/nine.jpeg",
    alt: "AMG Mall development",
    category: "Sites",
    height: "tall",
  },
  {
    id: "amg-10",
    src: "/images/amg/ten.jpeg",
    alt: "AMG Mall development",
    category: "Sites",
    height: "tall",
  },
  {
    id: "amg-11",
    src: "/images/amg/eleven.jpeg",
    alt: "AMG Mall development",
    category: "Sites",
    height: "tall",
  },
  {
    id: "amg-12",
    src: "/images/amg/twelve.jpeg",
    alt: "AMG Mall development",
    category: "Sites",
    height: "tall",
  },
];