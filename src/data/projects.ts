// All work lives here. To add a project, copy one block and change the fields.
// youtubeId = the part after "watch?v=" in a YouTube link.

export interface Project {
  slug: string;
  title: string;
  client: string;
  image: string;
  youtubeId: string;
  credits: { label: string; value: string }[];
  description: string;
}

export const projects: Project[] = [
  {
    slug: "doyuyo-ai-film",
    title: "can't be told, must be tasted",
    client: "doyuyo!",
    image: "/images/doyuyo.jpg",
    youtubeId: "oxWBSCgzrok",
    credits: [
      { label: "film", value: "can't be told, must be tasted (anlatılmaz, yenir)" },
      { label: "client", value: "doyuyo!" },
      { label: "format", value: "ai film" },
      { label: "role", value: "ai filmmaker" },
    ],
    description:
      "an ai film for doyuyo! built on the brand line \"anlatılmaz, yenir\" — some things can't be described, they have to be eaten. crunch, spice and slow-motion texture, generated and finished entirely with ai.",
  },
  {
    slug: "albaraka-leasing-ancient-pergamon",
    title: "what if albaraka leasing existed in antiquity?",
    client: "albaraka leasing",
    image: "/images/albaraka-leasing.jpg",
    youtubeId: "0EwAuh75Dn4",
    credits: [
      { label: "film", value: "what if albaraka leasing existed in antiquity?" },
      { label: "client", value: "albaraka leasing" },
      { label: "format", value: "ai film" },
      { label: "role", value: "ai filmmaker" },
    ],
    description:
      "with ai, we travelled back to the ancient city of pergamon and followed one question: how much easier would things have been if the financing solutions albaraka leasing offers had existed back then?",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
