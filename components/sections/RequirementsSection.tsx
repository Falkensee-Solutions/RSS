import { Check, Info } from "lucide-react";

const REQS = [
  "Ein ruhiger Raum für ca. 15–20 Teilnehmerinnen",
  "Sitzmöglichkeiten im Kreis oder in offener Anordnung",
  "Zeitfenster von ca. 90 Minuten plus Ankommen",
  "Zugang zu Wasser und ggf. kleiner Verpflegung",
  "Eine feste Ansprechperson vor Ort",
  "Möglichkeit zur Bewerbung über eigene Kanäle",
  "Offenheit für einen geschützten Mädchenraum",
  "Klärung von Barrierefreiheit und Zugänglichkeit",
  "Keine Fotos oder Veröffentlichungen ohne Einwilligung",
];

export function RequirementsSection() {
  return (
    <section id="voraussetzungen" className="section bg-rss-sand/60">
      <div className="container-rss grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-start">
        <div>
          <p className="eyebrow">Voraussetzungen vor Ort</p>
          <h2 className="mt-3">Was wir vor Ort brauchen.</h2>
          <p className="mt-6 text-lg text-rss-ink/85">
            Das Format ist bewusst niedrigschwellig. Für eine gute Durchführung
            helfen folgende Rahmenbedingungen.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-card border border-rss-yellow bg-white p-5">
            <span className="icon-circle">
              <Info size={20} aria-hidden />
            </span>
            <p className="text-sm">
              Falls nicht alle Voraussetzungen erfüllt sind, können Sie trotzdem
              anfragen. Wir klären gemeinsam, was möglich ist.
            </p>
          </div>
        </div>

        <ul className="card grid gap-3 sm:grid-cols-2">
          {REQS.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rss-yellow">
                <Check size={14} aria-hidden />
              </span>
              <span className="text-sm md:text-base">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
