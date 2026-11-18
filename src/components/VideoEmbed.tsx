import { type Project, videoLink } from "@/data/projects";

const linkLabel = {
  youtube: "watch on youtube",
  instagram: "watch on instagram",
  linkedin: "watch on linkedin",
} as const;

export default function VideoEmbed({ project }: { project: Project }) {
  const { type, id } = project.video;

  let frame: React.ReactNode;
  if (type === "youtube") {
    frame = (
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  } else if (type === "instagram") {
    frame = (
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        title={project.title}
        allowFullScreen
        loading="lazy"
        className="block h-[760px] w-full max-w-[420px] border-0 bg-[#f2f2f2]"
      />
    );
  } else {
    frame = (
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
        title={project.title}
        allowFullScreen
        loading="lazy"
        className="block h-[760px] w-full max-w-[504px] border-0 bg-[#f2f2f2]"
      />
    );
  }

  return (
    <div>
      {frame}
      <p className="m-0 mt-3 text-[13px]">
        <a
          href={videoLink(project)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black no-underline hover:underline"
        >
          {linkLabel[type]} →
        </a>
      </p>
    </div>
  );
}
