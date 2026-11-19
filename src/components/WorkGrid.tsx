import Link from "next/link";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

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
              alt={`${project.title} / ${project.client}`}
              className={cn("w-full h-full object-cover", project.imageClass)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#f2f2f2] p-4 text-center text-[16px] text-black group-hover:invisible">
              <span>{project.title}</span>
              <span>{project.client}</span>
            </div>
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <span
              className="text-white text-center block"
              style={{ fontSize: "16px" }}
            >
              {project.title}
            </span>
            <span
              className="text-white text-center block"
              style={{ fontSize: "16px" }}
            >
              {project.client}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
