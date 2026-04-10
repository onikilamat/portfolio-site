import Navigation from "@/components/Navigation";

export const metadata = {
  title: "about — jaime ludeña",
  description: "spanish creative/copywriter from getafe (claims madrid). work recognized at cannes lions, d&ad, and the one show.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "40px 30px", maxWidth: 700 }}>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#000", marginBottom: 48, fontWeight: 400 }}>
          one-minute microwave rice with tuna eater, weird and strange-named countries traveler, acceptable self-mustache shaver, lonely planet guides reader, 365-days-a-year hawaiian short sleeve shirt wearer and twenty-four-hours-a-day seven-days-a-week thinker.
        </p>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: "#000", marginBottom: 8, fontWeight: 400 }}>work</p>
          <p style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400 }}>
            independent senior creative (2024–present)<br />
            david madrid (2019–2024)<br />
            lola mullenlowe madrid (2017–2019)
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: "#000", marginBottom: 8, fontWeight: 400 }}>teaching</p>
          <p style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400 }}>
            miami ad school (2025–present)<br />
            escac catalonia cinema school (2023–2024)<br />
            the atomic garden school (2020–2022)
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: "#000", marginBottom: 8, fontWeight: 400 }}>contact</p>
          <p style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400 }}>
            jaime.ludena.diaz@gmail.com<br />
            +34 691 11 20 60<br />
            +66 098 6322 116
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: "#000", marginBottom: 8, fontWeight: 400 }}>social</p>
          <p style={{ fontSize: 13, color: "#000", lineHeight: 1.8, fontWeight: 400 }}>
            <a href="https://linkedin.com/in/jaimeludenadiaz/" style={{ color: "#000", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/jaimeludenadiaz/
            </a>
            <br />
            <a href="https://instagram.com/jaime_ludena/" style={{ color: "#000", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              instagram.com/jaime_ludena/
            </a>
          </p>
        </div>

        <p style={{ fontSize: 13, color: "#000", lineHeight: 1.6, fontWeight: 400 }}>
          spanish creative/copywriter from getafe (claims madrid). work recognized at cannes lions, d&amp;ad, and the one show.
        </p>
      </main>
    </>
  );
}
