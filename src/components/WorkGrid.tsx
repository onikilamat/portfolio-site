import Link from "next/link";

interface Project {
  title: string;
  client: string;
  slug: string;
  image: string | null;
}

const projects: Project[] = [
  { title: "meet marina prieto", client: "jcdecaux", slug: "meetmarinaprieto", image: "/images/meet-marina-prieto.jpg" },
  { title: "alcaraz signs", client: "netflix", slug: "the-alcaraz-signature-netflix", image: "/images/alcaraz-signs.jpeg" },
  { title: "starring bars", client: "heineken", slug: "starring-bars-heineken", image: "/images/starring-bars.png" },
  { title: "play no dew", client: "mountain dew", slug: "play-no-dew", image: null },
  { title: "laws under attack", client: "international red cross", slug: "laws-under-attack", image: null },
  { title: "ghost campaign", client: "burger king", slug: "ghost-campaign", image: null },
  { title: "safetynovela", client: "philippine airlines", slug: "safetynovela", image: null },
  { title: "the king of stream", client: "burger king", slug: "the-king-of-stream", image: null },
  { title: "the menu court", client: "burger king", slug: "the-menu-court", image: null },
  { title: "the truth is out there", client: "netflix", slug: "the-truth-is-out-there", image: null },
  { title: "the press concert", client: "asuncionico festival", slug: "the-press-concert", image: null },
  { title: "who's watching?", client: "netflix", slug: "whos-watching", image: null },
  { title: "trust bars", client: "heineken", slug: "trust-bars-heineken", image: null },
  { title: "heinz couture", client: "heinz", slug: "heinz-couture", image: null },
  { title: "twitter dad", client: "twitter", slug: "twitter-dad", image: null },
  { title: "ubeetch", client: "heetch", slug: "ubeetch", image: null },
  { title: "the face of 10", client: "dove", slug: "the-face-of-10", image: null },
  { title: "the perfect christmas ad", client: "twitter", slug: "the-perfect-christmas-ad", image: null },
  { title: "bzrp meal reveal", client: "burger king", slug: "bzrp-meal-reveal-burger-king", image: "/images/bzrp-meal-reveal.jpg" },
  { title: "just can't wait", client: "milka", slug: "just-cant-wait", image: null },
  { title: "gas stations", client: "burger king", slug: "gas-stations", image: null },
];

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[50px]">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/${project.slug}`}
          className="block group relative aspect-square"
          style={{ textDecoration: "none" }}
        >
          {/* Background / image */}
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{ backgroundColor: "#1a1a1a" }}
            />
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <span
              className="text-white text-center block"
              style={{ fontSize: "13px" }}
            >
              {project.title}
            </span>
            <span
              className="text-white text-center block"
              style={{ fontSize: "13px" }}
            >
              {project.client}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
