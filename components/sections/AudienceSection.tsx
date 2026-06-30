const PLACES = [
  "Gemeinden",
  "Vereine",
  "Jugendzentren",
  "Schulen",
  "Kulturorte",
  "Bildungseinrichtungen",
  "Nachbarschaftszentren",
  "Träger der Jugendarbeit",
];

export function AudienceSection() {
  return (
    <section id="einrichtungen" className="section bg-rss-sand/60">
      <div className="container-rss grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-start">
        <div>
          <p className="eyebrow">Für Einrichtungen</p>
          <h2 className="mt-3">
            Für Einrichtungen, die jungen Menschen geschützte Begegnung ermöglichen möchten.
          </h2>
          <p className="mt-6 text-lg text-rss-ink/85">
            Das Format richtet sich an Einrichtungen in Berlin, die einen
            geschützten Raum für Mädchen und junge Frauen schaffen möchten.
            Besonders geeignet ist es für Gemeinden, Vereine, Jugendgruppen,
            Schulen, Kulturorte und Träger der Jugend- oder Bildungsarbeit.
          </p>
          <p className="mt-4 text-rss-muted">
            Die Einrichtung muss das Format nicht selbst entwickeln. Forum
            Dialog e.V. bringt den Rahmen, die Moderation und die Materialien
            mit.
          </p>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-rss-muted">
            Geeignete Orte
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {PLACES.map((p) => (
              <li
                key={p}
                className="rounded-full border border-rss-border bg-rss-warm px-4 py-2 text-sm"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
