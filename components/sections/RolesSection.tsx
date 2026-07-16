import {
  Building2,
  Clock,
  UserRound,
  Megaphone,
  Heart,
  Lightbulb,
  Users,
  Briefcase,
  MessageCircle,
  MessagesSquare,
  BarChart3,
} from "lucide-react";

const HOST = {
  title: "Ihre Einrichtung ermöglicht",
  intro:
    "Sie müssen kein fertiges Konzept vorbereiten. Wichtig ist ein passender Ort, eine Ansprechperson und die Bereitschaft, Mädchen und junge Frauen über Ihre Kanäle einzuladen.",
  items: [
    { Icon: Building2, title: "Raum", text: "Einen ruhigen, geschützten Raum für ca. 15–20 Teilnehmerinnen." },
    { Icon: Clock, title: "Zeitfenster", text: "Ca. 90 Minuten Durchführung plus Zeit für Ankommen und Nachbereitung." },
    { Icon: UserRound, title: "Ansprechperson", text: "Eine feste Kontaktperson für Abstimmung, Zugang und Kommunikation." },
    { Icon: Megaphone, title: "Einladung über eigene Kanäle", text: "Bewerbung über Jugendgruppen, Newsletter, Aushänge, Messenger oder persönliche Ansprache." },
    { Icon: Heart, title: "Offenheit für Raum. Stille. Stimme.", text: "Durchführung in einem respektvollen, geschützten Rahmen." },
  ],
};

const FORUM = {
  title: "Forum Dialog e.V. bringt mit",
  intro:
    "Forum Dialog e.V. unterstützt bei Vorbereitung, Durchführung und Auswertung. Das Format ist so angelegt, dass Einrichtungen niedrigschwellig mitmachen können.",
  items: [
    { Icon: Lightbulb, title: "Konzept", text: "Ein erprobbares Format mit klarer Struktur." },
    { Icon: Users, title: "Teilnehmerinnen", text: "Mädchen oder junge Frauen, die von dem Format begeistert sind." },
    { Icon: Briefcase, title: "Materialkoffer", text: "Materialien für kreative Übungen, Moderation und Gesprächsimpulse." },
    { Icon: MessageCircle, title: "Moderation", text: "Einen sicheren Ablauf mit klaren Gesprächsregeln." },
    { Icon: MessagesSquare, title: "Gesprächsimpulse", text: "Fragen und Methoden, die Austausch ermöglichen, ohne Druck aufzubauen." },
    { Icon: BarChart3, title: "Feedback und Auswertung", text: "Gemeinsame Reflexion nach der Durchführung und Weiterentwicklung des Formats." },
  ],
};

function Column({ data, accent }: { data: typeof HOST; accent: "sand" | "white" }) {
  return (
    <div className={accent === "sand" ? "card-sand" : "card"}>
      <h3 className="font-serif text-2xl md:text-3xl">{data.title}</h3>
      <p className="mt-3 text-rss-ink/85">{data.intro}</p>
      <ul className="mt-6 space-y-5">
        {data.items.map(({ Icon, title, text }) => (
          <li key={title} className="flex items-start gap-4">
            <span className="icon-circle">
              <Icon size={22} aria-hidden />
            </span>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-sm text-rss-ink/80">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RolesSection() {
  return (
    <section className="section">
      <div className="container-rss">
        <div className="max-w-3xl">
          <p className="eyebrow">Aufgabenverteilung</p>
          <h2 className="mt-3">Sie stellen den Rahmen – wir bringen das Format.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <Column data={HOST} accent="sand" />
          <Column data={FORUM} accent="white" />
        </div>
      </div>
    </section>
  );
}
