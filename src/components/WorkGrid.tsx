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
