import { ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  "Freiwilligkeit statt Leistungsdruck",
  "Persönliche Perspektiven statt Belehrung",
  "Zuhören statt Bewerten",
  "Respekt vor unterschiedlichen religiösen und weltanschaulichen Hintergründen",
  "Keine Bloßstellung",
  "Schutz der Privatsphäre der Teilnehmerinnen",
  "Keine Veröffentlichung ohne Einverständnis",
];

export function StanceSection() {
  return (
    <section className="section">
      <div className="container-rss grid gap-12 md:grid-cols-[1.1fr,1fr]">
        <div>
          <p className="eyebrow">Haltung & Schutz</p>
          <h2 className="mt-3">Ein geschützter Raum braucht klare Haltung.</h2>
          <p className="mt-6 text-lg text-rss-ink/85">
            „Raum. Stille. Stimme.“ lebt von Vertrauen. Wir arbeiten mit klaren
            Gesprächsregeln, diskriminierungssensibler Moderation und einem
            respektvollen Umgang mit unterschiedlichen religiösen,
            weltanschaulichen und persönlichen Perspektiven.
          </p>

          <blockquote className="mt-8 rounded-card border-l-4 border-rss-yellow bg-rss-sand/60 p-6 font-serif text-xl md:text-2xl">
            Die Teilnehmerinnen müssen nichts beweisen. Sie dürfen einfach da
            sein, zuhören, gestalten und sprechen.
          </blockquote>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <span className="icon-circle">
              <ShieldCheck size={22} aria-hidden />
            </span>
            <h3 className="text-xl">Grundsätze</h3>
          </div>
          <ul className="mt-5 space-y-3 text-rss-ink/85">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rss-yellow" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
