import Link from "next/link";
import {
  Users,
  Clock,
  UserCheck,
  MapPin,
  Palette,
  MessagesSquare,
} from "lucide-react";

function PureNatural({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <title>pure-natural</title>
      <g fill="none" stroke="currentColor" strokeWidth={4}>
        <path
          strokeLinecap="round"
          d="M11 41q6.25-2.686 11.775-2.898Q28.298 37.889 37 40"
        />
        <path
          strokeLinecap="round"
          d="M23.045 44q-1.15-14.16.955-22"
        />
        <path
          strokeLinejoin="round"
          d="M24 23.176q2.385-9.027 8.4-10.766q6.014-1.74 11.6 1.594q.028 7.338-6.37 10.751q-6.4 3.414-13.63-1.579Zm-.208-1.062q1.25-10.78-5.01-15.185T4.284 4.96Q2.846 14.906 8.683 20q5.838 5.094 15.109 2.114Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}

const FACTS = [
  { Icon: Users, label: "14–18 Jahre" },
  { Icon: Clock, label: "ca. 90 Minuten" },
  { Icon: UserCheck, label: "15–20 Teilnehmerinnen" },
  { Icon: MapPin, label: "bei Ihnen vor Ort" },
];

const PHASES = [
  { name: "Raum", minutes: 45, label: "kreatives Tun", Icon: Palette, fraction: "w-[50%]" },
  { name: "Stille", minutes: 15, label: "Besinnung", Icon: PureNatural, fraction: "w-[18%]" },
  { name: "Stimme", minutes: 30, label: "Austausch", Icon: MessagesSquare, fraction: "w-[33%]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-rss-warm pt-12 md:pt-20">
      <div className="container-rss grid items-center gap-10 pb-12 md:grid-cols-[1.1fr,1fr] md:gap-12 md:pb-20 lg:gap-16">
        <div>
          <p className="eyebrow">Forum Dialog e.V. · Berlin</p>
          <h1 className="mt-3">
            Bringen Sie{" "}
            <span className="text-rss-ink">Raum<span className="text-rss-yellow">.</span></span>{" "}
            <span className="text-rss-ink">Stille<span className="text-rss-yellow">.</span></span>{" "}
            <span className="text-rss-ink">Stimme<span className="text-rss-yellow">.</span></span>{" "}
            in Ihre Einrichtung.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-rss-ink/80">
            Ein geschütztes, interreligiös sensibles Begegnungsformat für
            Mädchen und junge Frauen von 14 bis 18 Jahren in Berlin. Forum
            Dialog e.V. kommt mit Konzept, Teamerinnen, Materialkoffer und
            Moderation zu Ihnen vor Ort.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#anfrage" className="btn-primary">
              Format anfragen
            </Link>
            <Link href="#ablauf" className="btn-secondary">
              Ablauf ansehen
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute right-2 -top-5 h-20 w-20 rounded-full bg-rss-yellow/70"
          />
          <div
            aria-hidden
            className="absolute -bottom-5 left-8 h-10 w-10 rounded-full bg-rss-yellow"
          />
          <div
            aria-hidden
            className="absolute bottom-14 right-6 h-2.5 w-2.5 rounded-full bg-rss-ink"
          />

          <div className="relative rounded-card border border-rss-border bg-white p-6 md:p-8">
            <p className="eyebrow">Ein Treffen · ca. 90 Minuten</p>
            <p className="mt-3 font-serif text-2xl leading-snug md:text-3xl">
              Drei Phasen, ein ruhiger Rhythmus.
            </p>

            <ul className="mt-6 space-y-5">
              {PHASES.map(({ name, minutes, label, Icon, fraction }) => (
                <li key={name}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rss-yellow/20">
                      <Icon size={18} aria-hidden />
                    </span>
                    <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="font-serif text-xl leading-tight">
                        {name}
                        <span className="text-rss-yellow">.</span>
                        <span className="ml-2 font-sans text-sm font-normal text-rss-muted">
                          {label}
                        </span>
                      </span>
                      <span className="text-sm font-medium tabular-nums text-rss-muted">
                        ca. {minutes} Min
                      </span>
                    </div>
                  </div>
                  <div
                    className="ml-13 mt-2 h-1.5 w-full overflow-hidden rounded-full bg-rss-sand"
                    aria-hidden
                  >
                    <div className={`${fraction} h-full rounded-full bg-rss-yellow`} />
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-rss-border pt-4 text-sm text-rss-muted">
              Kreatives Tun, individuelle Stille, moderierter Austausch –
              auf Augenhöhe.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-rss-border bg-white">
        <div className="container-rss grid grid-cols-2 gap-4 py-8 sm:grid-cols-4 md:gap-8">
          {FACTS.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="icon-circle">
                <Icon size={22} aria-hidden />
              </span>
              <span className="text-sm font-medium md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
