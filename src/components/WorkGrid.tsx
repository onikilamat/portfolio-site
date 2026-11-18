import Link from "next/link";
import { projects } from "@/data/projects";

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} / ${project.client}`}
            className="w-full h-full object-cover"
          />

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
