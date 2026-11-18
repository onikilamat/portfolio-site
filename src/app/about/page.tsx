import Navigation from "@/components/Navigation";

export const metadata = {
  title: "about — oğuzcan önver",
  description:
    "copywriter turned creative group head turned ai filmmaker. ten years in advertising, 30+ awards, five years making ai films for fashion and brands.",
};

const sections: { label: string; lines: string[] }[] = [
  {
    label: "what i do",
    lines: [
      "ai video projects, end to end — idea, script, generation, edit, delivery",
      "turning advertising campaigns into ai productions",
      "fashion films and brand content",
    ],
  },
  {
    label: "background",
    lines: [
      "ai filmmaker & visual artist (last 5 years)",
      "creative group head, advertising agencies",
      "copywriter, advertising agencies",
      "creative content editor, mobile games (1 year)",
    ],
  },
  {
    label: "recognition",
    lines: ["30+ advertising awards"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-[700px] px-[30px] py-10">
        <p className="mb-12 text-lg leading-relaxed">
          copywriter turned creative group head turned ai filmmaker. for ten years i wrote the idea — now i
          make the film too.
        </p>

        <div className="mb-12 text-base leading-relaxed">
          <p className="mb-4">
            i spent about a decade in advertising agencies, first as a copywriter, then as a creative group
            head, building campaign strategy for global and local brands. the work picked up 30+ awards along
            the way. somewhere in between, i spent a year at a mobile game company as a creative content
            editor.
          </p>
          <p className="mb-4">
            for the last five years i&apos;ve been making things with ai, mostly for fashion brands. i take ai
            video projects from first idea to final cut, and i turn advertising campaigns into ai productions.
          </p>
          <p>the short version: i think like a creative director and produce like a studio.</p>
        </div>

        {sections.map((s) => (
          <div key={s.label} className="mb-10">
            <p className="mb-2 text-[13px]">{s.label}</p>
            <p className="text-[13px] leading-[1.8]">
              {s.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </main>
    </>
  );
}
