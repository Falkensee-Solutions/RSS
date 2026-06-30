import { Heart } from "lucide-react";

const COLUMNS = [
  {
    title: "Raum",
    minutes: "ca. 45 Minuten kreatives gemeinsames Tun",
    text:
      "Die Teilnehmerinnen gestalten, schreiben, kochen, basteln oder entwickeln gemeinsam etwas. Das kreative Tun senkt Hemmschwellen und schafft ein gemeinsames Erlebnis.",
  },
  {
    title: "Stille",
    minutes: "ca. 15 Minuten individuelle Besinnung",
    text:
      "Eine ruhige Phase für Achtsamkeit, Nachdenken und persönliche Reflexion. Die Stille ist offen gestaltet und keine angeleitete Religionsausübung.",
  },
  {
    title: "Stimme",
    minutes: "ca. 30 Minuten moderierter Austausch",
    text:
      "Die Teilnehmerinnen teilen Gedanken, Fragen und Eindrücke. Im Fokus stehen aktives Zuhören, respektvolles Sprechen und gegenseitiges Verstehen.",
  },
];

export function FormatSection() {
  return (
    <section id="format" className="section">
      <div className="container-rss">
        <div className="max-w-3xl">
          <p className="eyebrow">Das Format</p>
          <h2 className="mt-3">Ein einfacher Rahmen für echte Begegnung.</h2>
          <p className="mt-6 text-lg text-rss-ink/80">
            „Raum. Stille. Stimme.“ bringt Mädchen und junge Frauen zusammen,
            die sich über Gemeinschaft, Werte, Spiritualität und Alltag
            austauschen möchten. Im Mittelpunkt stehen nicht Vorträge oder
            Debatten, sondern gemeinsames Erleben, Zuhören und respektvolles
            Sprechen.
          </p>
          <p className="mt-3 text-rss-muted">
            Jedes Treffen folgt einem klaren Dreiklang:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COLUMNS.map((c) => (
            <article key={c.title} className="card flex flex-col">
              <span className="num-circle" aria-hidden>
                {c.title.charAt(0)}
              </span>
              <h3 className="mt-5 font-serif text-2xl">
                {c.title}
                <span className="text-rss-yellow">.</span>
              </h3>
              <p className="mt-2 text-sm font-medium text-rss-muted">{c.minutes}</p>
              <p className="mt-4 text-rss-ink/85">{c.text}</p>
            </article>
          ))}
        </div>

        <div
          role="note"
          className="mt-12 flex items-start gap-4 rounded-card border-2 border-rss-yellow bg-white p-6 md:p-8"
        >
          <span className="icon-circle">
            <Heart size={22} aria-hidden />
          </span>
          <p className="font-serif text-xl leading-snug md:text-2xl">
            Kein Religionsunterricht. Keine Missionierung. Kein Podium. Kein
            Leistungsdruck.
          </p>
        </div>
      </div>
    </section>
  );
}
