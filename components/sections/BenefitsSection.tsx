const BENEFITS = [
  {
    title: "Jugendarbeit stärken",
    text:
      "Das Format bietet Jugendlichen einen Raum, in dem sie sich ernst genommen fühlen und Gemeinschaft erleben.",
  },
  {
    title: "Interreligiöse Begegnung niedrigschwellig ermöglichen",
    text:
      "Statt abstrakter Diskussionen entstehen Begegnungen über gemeinsames Tun, Stille und Gespräch.",
  },
  {
    title: "Mädchen und junge Frauen stärken",
    text:
      "Ein geschützter Rahmen für Selbstvertrauen, Ausdruck, Zuhören und gegenseitige Unterstützung.",
  },
  {
    title: "Neue Kooperationen aufbauen",
    text:
      "Einrichtungen lernen andere Gemeinden, Vereine und Jugendakteur*innen kennen und können langfristige Netzwerke entwickeln.",
  },
  {
    title: "Positive Geschichten sichtbar machen",
    text:
      "Auf Wunsch können anonymisierte Eindrücke und kreative Ergebnisse geteilt werden – ohne die Privatsphäre zu verletzen.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section bg-rss-sand/60">
      <div className="container-rss">
        <div className="max-w-3xl">
          <p className="eyebrow">Warum mitmachen?</p>
          <h2 className="mt-3">
            Warum sich eine Teilnahme für Ihre Einrichtung lohnt.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <li key={b.title} className="card flex flex-col">
              <span className="num-circle" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl">{b.title}</h3>
              <p className="mt-3 text-rss-ink/85">{b.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
