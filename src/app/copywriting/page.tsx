import Link from "next/link";
import Navigation from "@/components/Navigation";
import { copyProjects } from "@/data/copywriting";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "copywriting — oğuzcan önver",
  description:
    "advertising campaigns written by oğuzcan önver as copywriter and creative group head at senfonico, planner.co, cosmos and dwarf planet.",
};

export default function CopywritingPage() {
  return (
    <>
      <Navigation />
      <main className="px-[30px] py-[30px]">
        <p className="mb-8 max-w-[640px] text-[13px] leading-[1.8]">
          campaigns i wrote as a copywriter and creative group head, for global and local brands.
        </p>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-[50px]">
          {copyProjects.map((p) => {
            const label = `${p.title} / ${p.brand}`;
            const tile = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={label} loading="lazy" className={cn("h-full w-full object-cover", p.imageClass)} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-3 text-center text-[13px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>{p.title}</span>
                  <span>{p.brand}</span>
                  <span className="mt-2 text-white/60">{p.agency}</span>
                </div>
              </>
            );
            const cls = "group relative block aspect-square no-underline";
            return p.href.startsWith("/") ? (
              <Link key={label} href={p.href} className={cls}>
                {tile}
              </Link>
            ) : (
              <a key={label} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {tile}
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
