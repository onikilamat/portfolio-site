// All work lives here. To add a project, copy one block and change the fields.
//
// video.type:
//   "youtube"   -> id = the part after "watch?v=" in a YouTube link
//   "instagram" -> id = the code in instagram.com/reel/<code>/
//   "linkedin"  -> id = the long number in ...urn:li:activity:<number>/
//   "mp4"       -> id = file name in /public/videos, e.g. "sugur.mp4"
// video is optional: image-only projects use gallery instead.
// gallery: extra images shown on the project page.
// image: cover in /public/images. Leave out to show a plain title tile.
// imageClass: where the square crop sits, e.g. "object-right" to keep text on the right in frame.

export type VideoType = "youtube" | "instagram" | "linkedin" | "mp4";

export interface Project {
  slug: string;
  title: string;
  client: string;
  image?: string;
  imageClass?: string;
  video?: { type: VideoType; id: string };
  gallery?: string[];
  credits: { label: string; value: string }[];
  description: string[];
}

export const projects: Project[] = [
  {
    slug: "lucha-libre-masks-documentary",
    title: "what do i have to do with kanye west?",
    client: "documentary teaser",
    image: "/images/lucha-libre.jpg",
    video: { type: "mp4", id: "lucha-libre-teaser.mp4" },
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
    image: "/images/sugur.jpg",
    video: { type: "mp4", id: "sugur.mp4" },
    credits: [
      { label: "film", value: "fashion jewellery ai film" },
      { label: "client", value: "sugur jewellery" },
      { label: "format", value: "ai film, animation" },
      { label: "role", value: "ai filmmaker" },
    ],
    description: ["a fashion jewellery film for sugur jewellery, generated and animated with ai."],
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
    slug: "asperox-march-8",
    title: "an unwritten rule",
    client: "asperox",
    image: "/images/asperox.jpg",
    imageClass: "object-[50%_78%]",
    video: { type: "mp4", id: "asperox.mp4" },
    credits: [
      { label: "film", value: "an unwritten rule — international women's day" },
      { label: "client", value: "asperox" },
      { label: "format", value: "full ai film, vertical" },
      { label: "role", value: "idea, script, production, edit" },
    ],
    description: [
      "an unwritten rule. care, cleaning, order, patience… a weight that sits on women's shoulders.",
      "as a man, breaking these patterns was something i struggled with too.",
      "with this film we wanted to talk about invisible labour, and to remind everyone of a simple truth: shared responsibility at home makes life equal.",
    ],
  },
  {
    slug: "decathlon-catalogue-from-trash",
    title: "catalogue from trash",
    client: "decathlon",
    image: "/images/decathlon-1.jpg",
    imageClass: "object-right",
    gallery: ["/images/decathlon-1.jpg", "/images/decathlon-2.jpg"],
    credits: [
      { label: "campaign", value: "catalogue from trash (çöpten katalog)" },
      { label: "client", value: "decathlon" },
      { label: "occasion", value: "world cleanup day" },
      { label: "format", value: "ai-generated catalogue (midjourney), instagram + youtube" },
      { label: "role", value: "creative idea" },
      { label: "result", value: "4.5 million unique users reached" },
    ],
    description: [
      "every year decathlon organises clean-up events for world cleanup day. this year we wanted to take the brand's motto, \"no sport without nature\", to a much wider audience — and use digital to do it.",
      "with midjourney, we visualised the world we would have to do sport in if we keep polluting nature. we placed decathlon's signature products into these dystopian scenes and turned them into an alternative catalogue: the catalogue from trash.",
      "the campaign ran on instagram, supported on youtube by a film of volunteers cleaning up nature.",
      "the shock of the ai catalogue, together with a creative media strategy, reached 4.5 million unique users and made the link between sport and protecting nature impossible to miss.",
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
    slug: "doyuyo-meet-me-by-the-bull",
    title: "meet me at doyuyo!, by the bull",
    client: "doyuyo!",
    image: "/images/doyuyo-bull.jpg",
    imageClass: "object-[50%_20%]",
    video: { type: "mp4", id: "doyuyo-bull.mp4" },
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
    slug: "alan-medya-march-8",
    title: "recalculating invisible labour",
    client: "alan medya",
    image: "/images/alan-medya.jpg",
    imageClass: "object-[80%_50%]",
    video: { type: "mp4", id: "alan-medya.mp4" },
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
  {
    slug: "lems-studio-social-content",
    title: "social media content",
    client: "lems studio",
    image: "/images/lems-studio.jpg",
    video: { type: "mp4", id: "lems-studio.mp4" },
    credits: [
      { label: "client", value: "lems studio" },
      { label: "format", value: "ai animation, social media content" },
      { label: "role", value: "ai director" },
    ],
    description: ["social media content for lems studio, directed and produced with ai."],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function videoLink(p: Project) {
  if (!p.video) return null;
  const { type, id } = p.video;
  if (type === "mp4") return null;
  if (type === "youtube") return `https://www.youtube.com/watch?v=${id}`;
  if (type === "instagram") return `https://www.instagram.com/reel/${id}/`;
  return `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;
}
