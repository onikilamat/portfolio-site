import Navigation from "@/components/Navigation";

export const metadata = {
  title: "awards — jaime ludeña",
  description: "awards and recognition from cannes lions, d&ad, the one show, and more.",
};

type AwardEntry = string;

interface AwardSection {
  title: string;
  entries: AwardEntry[];
}

const rankings: AwardSection[] = [
  {
    title: "personal rankings",
    entries: [
      "#2 best copywriter in the world (cannes lions report) — 2024",
      "#4 best copywriter in the world (the one show) — 2025",
      "#10 best copywriter in the world (the drum) — 2025",
    ],
  },
  {
    title: "agency rankings (david madrid)",
    entries: [
      "#7 best agency in the world (the one show) — 2025",
      "#4 best agency in the world (cannes lions report) — 2024",
      "#10 best agency in the world (cannes lions report) — 2022",
      "#6 best agency in the world (cannes lions report) — 2020/21",
    ],
  },
];

const festivals: AwardSection[] = [
  {
    title: "cannes lions (18 lions)",
    entries: [
      "titanium: meet marina prieto — 2024",
      "grand prix creative b2b: meet marina prieto — 2024",
      "gold direct: alcaraz signs — 2024",
      "gold outdoor: meet marina prieto — 2024",
      "silver pr: starring bars — 2025",
      "silver radio & audio: the king of stream — 2020/21",
      "silver social & influencer: meet marina prieto — 2024",
      "bronze entertainment: starring bars — 2025",
      "bronze b2b: starring bars — 2025",
      "bronze creative strategy: meet marina prieto — 2025",
      "bronze entertainment: alcaraz signs — 2024",
      "bronze media: alcaraz signs — 2024",
      "bronze brand experience & activation: ghost campaign — 2024",
      "bronze outdoor: the truth is out there — 2022",
      "bronze direct: the menu court — 2020/21",
      "bronze direct: ghost campaign — 2024",
      "bronze social & influencer: meet marina prieto — 2024",
      "bronze creative b2b: meet marina prieto — 2024",
      "+ 37 shortlists",
    ],
  },
  {
    title: "d&ad (3 graphite, 2 wood)",
    entries: [
      "graphite pr: alcaraz signs — 2025",
      "graphite direct: the menu court — 2021",
      "graphite media: meet marina prieto — 2024",
      "wood digital & social: meet marina prieto — 2024",
      "wood direct: meet marina prieto — 2024",
      "+ 4 shortlists",
    ],
  },
  {
    title: "the one show",
    entries: [
      "best of discipline out of home: meet marina prieto — 2025",
      "gold stunts & activations: alcaraz signs — 2025",
      "gold b2b (3 awards): meet marina prieto — 2025",
      "gold posters: meet marina prieto — 2025",
      "gold creative effectiveness: meet marina prieto — 2025",
      "silver b2b: meet marina prieto — 2025",
      "bronze innovation (2 awards): meet marina prieto, alcaraz signs — 2025",
      "merit innovation (2 awards): alcaraz signs — 2025",
      "merit non traditional & guerrilla marketing: alcaraz signs — 2025",
      "merit influencer marketing: alcaraz signs — 2025",
      "merit music: bzrp meal reveal — 2023",
      "merit interactive & online: twitter dad — 2021",
      "merit social media: twitter dad — 2021",
      "+ 6 shortlists",
    ],
  },
  {
    title: "the andys",
    entries: [
      "grandy idea: meet marina prieto — 2025",
      "gold idea: alcaraz signs — 2025",
      "gold craft: meet marina prieto — 2025",
      "gold idea: the menu court — 2022",
      "gold reset: the menu court — 2022",
    ],
  },
  {
    title: "lia awards",
    entries: [
      "grand lia posters: meet marina prieto — 2024",
      "gold creative strategy: alcaraz signs — 2024",
      "gold non traditional: meet marina prieto — 2024",
      "gold use of social media & influencers: meet marina prieto — 2024",
      "gold integration (2 awards): meet marina prieto — 2024",
      "gold creative strategy: meet marina prieto — 2024",
      "gold posters: meet marina prieto — 2024",
      "gold creativity in b2b: meet marina prieto — 2024",
      "silver creativity in b2b: starring bars — 2025",
      "silver non traditional (2 awards): starring bars — 2025",
      "silver creativity in pr: starring bars — 2025",
      "silver use of social media & influencers: alcaraz signs — 2024",
      "silver evolution: alcaraz signs — 2024",
      "silver creativity in b2b: meet marina prieto — 2024",
      "bronze non traditional (2 awards): starring bars — 2025",
      "bronze ambient & activation (2 awards): starring bars — 2025",
      "bronze creativity in b2b: starring bars — 2025",
      "bronze non traditional: alcaraz signs — 2024",
      "bronze creativity in b2b: meet marina prieto — 2024",
      "+ 5 finalists",
    ],
  },
  {
    title: "clio awards",
    entries: [
      "grand clio out of home: meet marina prieto — 2025",
      "grand clio public relations: meet marina prieto — 2025",
      "grand clio creative strategy: meet marina prieto — 2025",
      "grand clio creative effectiveness: meet marina prieto — 2025",
      "gold out of home: meet marina prieto — 2025",
      "gold public relations: meet marina prieto — 2025",
      "gold use of influencers: meet marina prieto — 2025",
      "gold creative effectiveness (2 awards): meet marina prieto — 2025",
      "gold creative strategy: meet marina prieto — 2025",
      "gold media: alcaraz signs — 2025",
      "silver direct: alcaraz signs — 2025",
      "silver media (2 awards): alcaraz signs — 2025",
      "silver integrated: meet marina prieto — 2025",
      "silver out of home: meet marina prieto — 2025",
      "silver partnerships & collaborations: meet marina prieto — 2025",
      "bronze (2 awards): meet marina prieto — 2025",
      "bronze branded entertainment & content: alcaraz signs — 2025",
      "bronze creative effectiveness: alcaraz signs — 2025",
      "bronze integrated: alcaraz signs — 2025",
      "bronze social media: ghost campaign — 2025",
      "bronze branded entertainment & content: bzrp meal reveal — 2023",
      "bronze experience & activation: the menu court — 2022",
      "+ 2 shortlists",
    ],
  },
  {
    title: "the drum awards",
    entries: [
      "grand prix b2b: meet marina prieto — 2024",
      "silver b2b (3 awards): starring bars — 2025",
      "bronze pr: starring bars — 2025",
    ],
  },
  {
    title: "spikes",
    entries: [
      "gold direct: starring bars — 2026",
      "bronze entertainment: starring bars — 2026",
      "bronze pr: starring bars — 2026",
      "bronze brand experience & activation: trust bars — 2026",
      "+ 7 shortlists",
    ],
  },
  {
    title: "eurobest",
    entries: [
      "bronze pr: trust bars — 2025",
      "+ 1 shortlist",
    ],
  },
  {
    title: "el ojo de iberoamérica",
    entries: [
      "gold (4 awards): the menu court — 2021",
      "gold: the return of the bald icon — 2020",
      "silver: the truth is out there — 2022",
      "silver (4 awards): the menu court, twitter dad, gas stations — 2021",
      "bronze (4 awards): the menu court, twitter dad — 2021",
    ],
  },
  {
    title: "el sol",
    entries: [
      "gold digital: bzrp meal reveal — 2023",
      "gold print: gas stations — 2021",
      "silver audio: bzrp meal reveal — 2023",
      "silver design: bzrp meal reveal — 2023",
      "bronze out of home: bzrp meal reveal — 2023",
      "bronze branded experience & activation: bzrp meal reveal — 2023",
      "bronze (6 awards): the menu court, twitter dad — 2021",
      "+ 6 shortlists",
    ],
  },
  {
    title: "cdec",
    entries: [
      "gold campañas: meet marina prieto — 2025",
      "silver ideas: meet marina prieto — 2025",
      "silver producción: meet marina prieto — 2025",
      "anuario ideas: bzrp meal reveal — 2023",
      "anuario ideas: twitter dad — 2021",
      "anuario ideas: gas stations — 2021",
    ],
  },
];

export default function AwardsPage() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "40px 30px", maxWidth: 700 }}>
        {rankings.map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 13, color: "#000", fontWeight: 700, marginBottom: 8 }}>
              {section.title}
            </p>
            {section.entries.map((entry, i) => (
              <p key={i} style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
                {entry}
              </p>
            ))}
          </div>
        ))}

        <div style={{ marginBottom: 40 }} />

        {festivals.map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 13, color: "#000", fontWeight: 700, marginBottom: 8 }}>
              {section.title}
            </p>
            {section.entries.map((entry, i) => (
              <p key={i} style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
                {entry}
              </p>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}
