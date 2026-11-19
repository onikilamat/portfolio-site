// Copywriting / advertising work. Each tile opens its link in a new tab.
// href starting with "/" stays on this site.

export interface CopyProject {
  title: string;
  brand: string;
  agency: string;
  image: string;
  imageClass?: string;
  href: string;
}

export const copyProjects: CopyProject[] = [
  {
    title: "golden butterfly",
    brand: "pantene",
    agency: "senfonico",
    image: "/images/copy/pantene.jpg",
    href: "https://www.instagram.com/panteneturkiye/",
  },
  {
    title: "shake bullying off your head",
    brand: "head & shoulders",
    agency: "senfonico",
    image: "/images/copy/hs-bullying.jpg",
    href: "https://www.instagram.com/headandshoulderstr/",
  },
  {
    title: "national team",
    brand: "head & shoulders",
    agency: "senfonico",
    image: "/images/copy/hs-national-team.jpg",
    href: "https://www.instagram.com/headandshoulderstr/",
  },
  {
    title: "champions island",
    brand: "adidas",
    agency: "planner.co",
    image: "/images/copy/adidas.jpg",
    href: "https://www.behance.net/gallery/186602575/adidas-Champions-Island",
  },
  {
    title: "+1 ticket",
    brand: "efes",
    agency: "planner.co",
    image: "/images/copy/efes.jpg",
    href: "https://www.behance.net/gallery/170845337/1-Bilet-Keyvisual-Animation",
  },
  {
    title: "voice card",
    brand: "papara",
    agency: "planner.co",
    image: "/images/copy/papara.jpg",
    href: "https://www.youtube.com/watch?v=3NdNMtqPeBc",
  },
  {
    title: "catalogue from trash",
    brand: "decathlon",
    agency: "planner.co",
    image: "/images/decathlon-1.jpg",
    imageClass: "object-right",
    href: "/decathlon-catalogue-from-trash",
  },
  {
    title: "if there's summer, we're here",
    brand: "penti",
    agency: "cosmos",
    image: "/images/copy/penti.jpg",
    href: "https://www.youtube.com/watch?v=oEcLxZyoIig",
  },
  {
    title: "we love this game",
    brand: "vivident",
    agency: "cosmos",
    image: "/images/copy/vivident.jpg",
    href: "https://www.youtube.com/watch?v=1_OMvtfNJkg",
  },
  {
    title: "the ai iron",
    brand: "philips",
    agency: "cosmos",
    image: "/images/copy/philips.jpg",
    href: "https://www.youtube.com/watch?v=Rqe-BVOE6a0",
  },
  {
    title: "launch film",
    brand: "metro protein",
    agency: "cosmos",
    image: "/images/copy/metro-protein.jpg",
    href: "https://www.youtube.com/watch?v=zCnS9vKIPZE",
  },
  {
    title: "on the side of trade",
    brand: "bizim toptan",
    agency: "cosmos",
    image: "/images/copy/bizim-toptan.jpg",
    href: "https://www.youtube.com/watch?v=_syJB5iGwYg",
  },
  {
    title: "the pide makers are upset",
    brand: "superfresh",
    agency: "dwarf planet",
    image: "/images/copy/superfresh-pide.jpg",
    href: "https://youtu.be/P_K1CO-Jpac",
  },
  {
    title: "tactics for the young",
    brand: "superfresh",
    agency: "dwarf planet",
    image: "/images/copy/superfresh-tactics.jpg",
    href: "https://www.youtube.com/watch?v=SVFuUCSZJzE",
  },
];
