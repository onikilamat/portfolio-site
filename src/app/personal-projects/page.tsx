import Navigation from "@/components/Navigation";
import Link from "next/link";

export const metadata = {
  title: "personal projects — jaime ludeña",
  description: "personal projects by jaime ludeña.",
};

const projects = [
  { label: "fragile", href: "/fragile" },
  { label: "breadcrumb heliport", href: "/pidgeons-heliport" },
  { label: "someone hung this bag on a tree and i kept it", href: "/tote-bags" },
  { label: "luxury switches collection", href: "/luxury-switches-collection" },
  { label: "these letters are not by chance", href: "/new-project-2" },
  { label: "you are here until you are not here", href: "/you-are-here-until-you-are-not-here" },
  { label: "my opinion on nationalism", href: "/my-opinion-on-nationalism" },
  { label: "unanswered messages", href: "/unanswered-messages" },
];

export default function PersonalProjectsPage() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "40px 30px", maxWidth: 700 }}>
        {projects.map((project) => (
          <div key={project.href}>
            <Link
              href={project.href}
              className="block text-black no-underline hover:underline"
              style={{
                fontSize: 13,
                lineHeight: 2,
                display: "block",
              }}
            >
              {project.label}
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
