const STEPS = [
  { title: "Kennenlernen", text: "Wir tauschen uns über Ziele, Zielgruppe, Rahmen und Möglichkeiten aus." },
  { title: "Raum prüfen", text: "Wir klären gemeinsam, ob der Raum geeignet ist und welche Rahmenbedingungen wichtig sind." },
  { title: "Einladen", text: "Sie laden Mädchen und junge Frauen über Ihre Kanäle ein. Wir stellen Textbausteine und Materialien zur Verfügung." },
  { title: "Durchführen", text: "Wir gestalten das Treffen gemeinsam vor Ort. Forum Dialog e.V. bringt Team, Konzept und Material mit." },
  { title: "Auswerten", text: "Wir reflektieren gemeinsam, was gut funktioniert hat und wie eine weitere Zusammenarbeit aussehen kann." },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="section">
      <div className="container-rss">
        <div className="max-w-3xl">
          <p className="eyebrow">Ablauf</p>
          <h2 className="mt-3">In fünf Schritten zum Treffen vor Ort.</h2>
          <p className="mt-6 text-lg text-rss-ink/80">
            Von der ersten Anfrage bis zur gemeinsamen Auswertung begleiten wir
            Sie. Sie entscheiden mit, welchen Rahmen Ihre Einrichtung
            ermöglichen kann.
          </p>
        </div>

        <ol className="mt-12 relative space-y-5 md:space-y-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 top-6 hidden w-0.5 bg-rss-yellow/40 md:block"
            style={{ height: "calc(100% - 3rem)" }}
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative md:grid md:grid-cols-[2.5rem_1fr] md:gap-6">
              <span
                className="num-circle relative z-10 ring-8 ring-rss-warm md:mt-4"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="card mt-3 md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-rss-muted">
                  Schritt {i + 1}
                </p>
                <h3 className="mt-1 font-serif text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-rss-ink/85">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
