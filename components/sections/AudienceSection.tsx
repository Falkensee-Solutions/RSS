import Image from "next/image";
import collaborationImage from "@/images/Zusammenarbeit-Illustration.png";

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
            Für Einrichtungen, die Mädchen einen geschützten Raum unter sich ermöglichen möchten.
          </h2>
          <p className="mt-6 text-lg text-rss-ink/85">
            Das Format richtet sich an Einrichtungen in Berlin, die einen
            geschützten Raum ausschließlich für Mädchen und junge Frauen von 14
            bis 18 Jahren schaffen möchten. Die Gruppe bleibt während des
            gesamten Treffens ein Mädchenraum; Jungen nehmen nicht teil.
            Besonders geeignet ist das Angebot für Gemeinden, Vereine,
            Jugendgruppen, Schulen, Kulturorte und Träger der Jugend- oder
            Bildungsarbeit.
          </p>
          <p className="mt-4 text-rss-muted">
            Die Einrichtung muss das Format nicht selbst entwickeln. Forum
            Dialog e.V. bringt den Rahmen, die Moderation und die Materialien
            mit.
          </p>
        </div>

        <div className="card overflow-hidden">
          <div className="-mx-6 -mt-6 mb-6 flex justify-center bg-rss-warm p-5 md:-mx-8 md:-mt-8">
            <Image
              src={collaborationImage}
              alt="Illustration einer unterstützenden Zusammenarbeit für das Mädchentreffen"
              className="h-auto max-h-72 w-auto object-contain"
            />
          </div>
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
