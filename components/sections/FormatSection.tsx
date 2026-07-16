import type { ComponentType } from "react";
import { Heart, Palette, MessagesSquare } from "lucide-react";

function StilleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="round" d="M11 41q6.25-2.686 11.775-2.898Q28.298 37.889 37 40" />
        <path strokeLinecap="round" d="M23.045 44q-1.15-14.16.955-22" />
        <path
          strokeLinejoin="round"
          d="M24 23.176q2.385-9.027 8.4-10.766q6.014-1.74 11.6 1.594q.028 7.338-6.37 10.751q-6.4 3.414-13.63-1.579Zm-.208-1.062q1.25-10.78-5.01-15.185T4.284 4.96Q2.846 14.906 8.683 20q5.838 5.094 15.109 2.114Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}

type PhaseIcon = ComponentType<{ size?: number }>;

const COLUMNS: {
  title: string;
  minutes: string;
  text: string;
  Icon: PhaseIcon;
}[] = [
  {
    title: "Raum",
    minutes: "ca. 45 Minuten kreatives gemeinsames Tun",
    text:
      "Die Teilnehmerinnen gestalten, schreiben, kochen, basteln oder entwickeln gemeinsam etwas. Das kreative Tun senkt Hemmschwellen und schafft ein gemeinsames Erlebnis.",
    Icon: (props) => <Palette {...props} aria-hidden />,
  },
  {
    title: "Stille",
    minutes: "ca. 15 Minuten individuelle Besinnung",
    text:
      "Eine ruhige Phase für Achtsamkeit, Nachdenken und persönliche Reflexion. Die Stille ist offen gestaltet und keine angeleitete Religionsausübung.",
    Icon: StilleIcon,
  },
  {
    title: "Stimme",
    minutes: "ca. 30 Minuten moderierter Austausch",
    text:
      "Die Teilnehmerinnen teilen Gedanken, Fragen und Eindrücke. Im Fokus stehen aktives Zuhören, respektvolles Sprechen und gegenseitiges Verstehen.",
    Icon: (props) => <MessagesSquare {...props} aria-hidden />,
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
          {COLUMNS.map((c, i) => (
            <article key={c.title} className="card flex flex-col">
              <div className="flex items-center gap-3">
                <span className="icon-circle">
                  <c.Icon size={22} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-rss-muted">
                  Phase {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl md:text-3xl">
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
