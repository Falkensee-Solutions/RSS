const FAQS = [
  {
    q: "Ist das ein religiöses Angebot?",
    a: "Das Format ist interreligiös und weltanschaulich sensibel, aber kein Religionsunterricht und keine religiöse Unterweisung. Es geht um Begegnung, Reflexion, Werte, Gemeinschaft und respektvollen Austausch.",
  },
  {
    q: "Wird gemeinsam gebetet?",
    a: "Nein. Die Phase der Stille ist offen und individuell gestaltet. Sie ist keine angeleitete Religionsausübung.",
  },
  {
    q: "Wer kann das Format anfragen?",
    a: "Gemeinden, Vereine, Schulen, Jugendzentren, Kulturorte, Nachbarschaftseinrichtungen und andere Träger, die einen geschützten Raum für Mädchen und junge Frauen ermöglichen möchten.",
  },
  {
    q: "Müssen wir bereits eine feste Jugendgruppe haben?",
    a: "Nein. Eine bestehende Jugendgruppe hilft, ist aber keine Voraussetzung. Wichtig ist, dass Sie Mädchen und junge Frauen über Ihre Kanäle erreichen können.",
  },
  {
    q: "Können Jungen teilnehmen?",
    a: "Dieses konkrete Format ist als geschützter Mädchenraum konzipiert. Andere Formate oder Anschlussideen können im Gespräch geprüft werden.",
  },
  {
    q: "Wie viele Teilnehmerinnen sollten dabei sein?",
    a: "Ideal sind etwa 15–20 Teilnehmerinnen. Kleinere Gruppen sind nach Absprache möglich.",
  },
  {
    q: "Wie lange dauert ein Treffen?",
    a: "Ein Treffen dauert ca. 90 Minuten. Zusätzlich sollte etwas Zeit für Ankommen, Aufbau und kurze Nachbereitung eingeplant werden.",
  },
  {
    q: "Entstehen Kosten?",
    a: "Die Anfrage ist unverbindlich. Die Teilnahme der Jugendlichen soll möglichst niedrigschwellig sein. Kosten, Fördermöglichkeiten und Rahmenbedingungen werden im Erstgespräch transparent geklärt.",
  },
  {
    q: "Können Fotos gemacht werden?",
    a: "Nur mit ausdrücklicher Einwilligung. Wir achten darauf, keine identifizierbaren Bilder von minderjährigen Teilnehmerinnen zu veröffentlichen. Kreative Ergebnisse, Hände, Materialien oder anonymisierte Eindrücke sind bevorzugt.",
  },
  {
    q: "Was passiert nach der Anfrage?",
    a: "Wir melden uns, klären die Rahmenbedingungen und vereinbaren bei Interesse ein kurzes Kennenlerngespräch.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section bg-rss-sand/60">
      <div className="container-rss">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3">Häufige Fragen</h2>
        </div>

        <div className="mt-10 grid gap-3 md:gap-4">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-card border border-rss-border bg-white p-5 md:p-6"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-rss-ink marker:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rss-border text-lg transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-rss-ink/85">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
