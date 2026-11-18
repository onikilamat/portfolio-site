// All work lives here. To add a project, copy one block and change the fields.
//
// video.type:
//   "youtube"   -> id = the part after "watch?v=" in a YouTube link
//   "instagram" -> id = the code in instagram.com/reel/<code>/
//   "linkedin"  -> id = the long number in ...urn:li:activity:<number>/
// image: cover in /public/images. Leave out to show a plain title tile.
// imageClass: where the square crop sits, e.g. "object-right" to keep text on the right in frame.

export type VideoType = "youtube" | "instagram" | "linkedin";

export interface Project {
  slug: string;
  title: string;
  client: string;
  image?: string;
  imageClass?: string;
  video: { type: VideoType; id: string };
  credits: { label: string; value: string }[];
  description: string[];
}

export const projects: Project[] = [
  {
    slug: "doyuyo-meet-me-by-the-bull",
    title: "meet me at doyuyo!, by the bull",
    client: "doyuyo!",
    image: "/images/doyuyo-bull.jpg",
    video: { type: "instagram", id: "DM-t_EzI7wA" },
    credits: [
      { label: "film", value: "meet me at doyuyo!, by the bull" },
      { label: "client", value: "doyuyo!" },
      { label: "format", value: "ai + cgi + 3d + live action, vertical" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: [
      "our new film is live, and we pressed every button: ai, cgi, 3d — and even a real shoot.",
    ],
  },
  {
    slug: "doyuyo-ai-film",
    title: "can't be told, must be tasted",
    client: "doyuyo!",
    image: "/images/doyuyo.jpg",
    video: { type: "youtube", id: "oxWBSCgzrok" },
    credits: [
      { label: "film", value: "can't be told, must be tasted (anlatılmaz, yenir)" },
      { label: "client", value: "doyuyo!" },
      { label: "format", value: "ai film" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: [
      "an ai film for doyuyo! built on the brand line \"anlatılmaz, yenir\" — some things can't be described, they have to be eaten. crunch, spice and slow-motion texture, generated and finished entirely with ai.",
    ],
  },
  {
    slug: "albaraka-leasing-ancient-pergamon",
    title: "what if albaraka leasing existed in antiquity?",
    client: "albaraka leasing",
    image: "/images/albaraka-leasing.jpg",
    imageClass: "object-right",
    video: { type: "youtube", id: "0EwAuh75Dn4" },
    credits: [
      { label: "film", value: "what if albaraka leasing existed in antiquity?" },
      { label: "client", value: "albaraka leasing" },
      { label: "format", value: "ai film" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: [
      "with ai, we travelled back to the ancient city of pergamon and followed one question: how much easier would things have been if the financing solutions albaraka leasing offers had existed back then?",
    ],
  },
  {
    slug: "lucha-libre-masks-documentary",
    title: "what do i have to do with kanye west?",
    client: "documentary teaser",
    video: { type: "linkedin", id: "7466436094058930176" },
    credits: [
      { label: "film", value: "lucha libre masks — documentary (teaser)" },
      { label: "format", value: "ai + live action, experimental documentary" },
      { label: "role", value: "director, ai filmmaker" },
    ],
    description: [
      "a project that happened completely by chance before kanye west's concert.",
      "to launch his new album bully, a campaign was built around mexican wrestling and lucha libre aesthetics: wrestlers stepped into the ring around the world as the album was played for the first time.",
      "for the istanbul leg of these parties, the lucha libre masks were made in my girlfriend's workshop, and i got to document the process. the strange part: while it was happening, we had no idea the masks were for kanye.",
      "i started an experimental documentary mixing ai and live footage. the full film doesn't have a date yet, but the teaser is ready. sometimes you can't tell where a job will take you.",
    ],
  },
  {
    slug: "sugur-jewellery-ai-film",
    title: "fashion jewellery ai film",
    client: "sugur jewellery",
    video: { type: "linkedin", id: "7460710610415067137" },
    credits: [
      { label: "film", value: "fashion jewellery ai film" },
      { label: "client", value: "sugur jewellery" },
      { label: "format", value: "ai film, animation" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: ["a fashion jewellery film for sugur jewellery, generated and animated with ai."],
  },
  {
    slug: "alan-medya-march-8",
    title: "recalculating invisible labour",
    client: "alan medya",
    video: { type: "linkedin", id: "7436381965160751105" },
    credits: [
      { label: "film", value: "recalculating invisible labour — international women's day" },
      { label: "client", value: "alan medya" },
      { label: "format", value: "ai film" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: [
      "\"housework\" looks like a single job title. in reality it is many professions combined. as long as this ignored work is told as a story of personal sacrifice, the system keeps letting itself off the hook.",
      "by romanticising housework, society pushes it outside of pay and value. domestic labour has to stop being a private, personal matter and become a political and economic one.",
      "this march 8, we recalculated the value of invisible labour.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function videoLink(p: Project) {
  const { type, id } = p.video;
  if (type === "youtube") return `https://www.youtube.com/watch?v=${id}`;
  if (type === "instagram") return `https://www.instagram.com/reel/${id}/`;
  return `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;
}
