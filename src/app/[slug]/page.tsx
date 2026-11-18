import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import VideoEmbed from "@/components/VideoEmbed";
import { projects, getProject } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — oğuzcan önver`,
    description: p.description.join(" "),
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navigation />
      <main className="px-[30px] pt-10 pb-20">
        <div className="max-w-[1200px]">
          <h1 className="m-0 mb-8 max-w-[800px] text-[28px] font-normal leading-tight">
            {project.title} / {project.client}
          </h1>

          <div className="mb-7 text-[13px] leading-[1.8]">
            {project.credits.map((c) => (
              <p key={c.label} className="m-0">
                <span className="text-[#888]">{c.label}: </span>
                {c.value}
              </p>
            ))}
          </div>

          <div className="mb-10 max-w-[640px] text-base leading-relaxed">
            {project.description.map((para) => (
              <p key={para} className="m-0 mb-4">
                {para}
              </p>
            ))}
          </div>

          <VideoEmbed project={project} />

          <div className="mt-16 text-[13px] leading-[1.8]">
            {others.length > 0 && <p className="m-0 mb-2 text-[#888]">more work</p>}
            {others.map((p) => (
              <p key={p.slug} className="m-0">
                <Link href={`/${p.slug}`} className="text-black no-underline hover:underline">
                  {p.title} / {p.client}
                </Link>
              </p>
            ))}
            <p className="m-0 mt-2">
              <Link href="/" className="text-black no-underline hover:underline">
                ← all work
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
