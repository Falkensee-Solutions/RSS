"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

// const BEZIRKE = [
//   "Charlottenburg-Wilmersdorf",
//   "Friedrichshain-Kreuzberg",
//   "Lichtenberg",
//   "Marzahn-Hellersdorf",
//   "Mitte",
//   "Neukölln",
//   "Pankow",
//   "Reinickendorf",
//   "Spandau",
//   "Steglitz-Zehlendorf",
//   "Tempelhof-Schöneberg",
//   "Treptow-Köpenick",
// ];

const EINRICHTUNGSARTEN = [
  "Gemeinde",
  "Verein",
  "Schule",
  "Jugendzentrum",
  "Kulturort",
  "Bildungseinrichtung",
  "Sonstiges",
];

const ZEITFENSTER = ["Werktags vormittags", "Werktags nachmittags", "Werktags abends", "Wochenende"];
// const KANAELE = ["Jugendgruppe", "Newsletter", "Aushang", "Social Media", "Messenger", "Persönliche Ansprache", "Schule", "Sonstiges"];

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@forumdialog.org";

function buildEmailBody(data: Record<string, FormDataEntryValue | FormDataEntryValue[]>) {
  const get = (k: string) => {
    const v = data[k];
    if (Array.isArray(v)) return v.join(", ");
    return (v as string) || "";
  };
  return [
    "Neue Anfrage für Raum. Stille. Stimme.",
    "",
    "1. Einrichtung",
    `Name: ${get("einrichtung_name")}`,
    `Art: ${get("einrichtung_art")}`,
    // `Ausrichtung: ${get("ausrichtung")}`,
    // `Website: ${get("website")}`,
    // `Bezirk: ${get("bezirk")}`,
    `Adresse: ${get("adresse")}`,
    "",
    "2. Kontaktperson",
    `Name: ${get("kontakt_name")}`,
    `Rolle: ${get("kontakt_rolle")}`,
    `E-Mail: ${get("kontakt_email")}`,
    `Telefon: ${get("kontakt_telefon")}`,
    `Bevorzugte Kontaktaufnahme: ${get("kontakt_praeferenz")}`,
    "",
    "3. Rahmen vor Ort",
    `Geeigneter Raum: ${get("raum_geeignet")}`,
    `Raumbeschreibung: ${get("raum_beschreibung")}`,
    // `Ungestört nutzbar: ${get("raum_ungestoert")}`,
    `Barrierefreiheit: ${get("barrierefreiheit")}`,
    `Wasser/Verpflegung: ${get("verpflegung")}`,
    `Mögliche Zeitfenster: ${get("zeitfenster")}`,
    `Wunschtermin/Zeitraum: ${get("wunschtermin")}`,
    "",
    "4. Zielgruppe und Einladung",
    // `Erreichbarkeit 14–18: ${get("zielgruppe_erreichbar")}`,
    `Erwartete Anzahl: ${get("erwartete_anzahl")}`,
    // `Einladungskanäle: ${get("kanaele")}`,
    `Feste Gruppe vorhanden: ${get("feste_gruppe")}`,
    "",
    "5. Haltung und Schutz",
    // `Geschützter Mädchenraum akzeptiert: ${get("zustimmung_maedchenraum") ? "Ja" : "Nein"}`,
    // `Kein Religionsunterricht/keine Missionierung bestätigt: ${get("zustimmung_kein_unterricht") ? "Ja" : "Nein"}`,
    // `Foto-/Video-Regel bestätigt: ${get("zustimmung_fotoregel") ? "Ja" : "Nein"}`,
    `Besondere Hinweise: ${get("schutz_hinweise")}`,
    "",
    "6. Nachricht",
    `Nachricht: ${get("nachricht")}`,
    "",
    `Datenschutz-Einwilligung: ${get("datenschutz") ? "Ja" : "Nein"}`,
  ].join("\n");
}

export function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const endpoint = useMemo(() => process.env.NEXT_PUBLIC_FORM_ENDPOINT || "", []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    const form = e.currentTarget;

    // Honeypot
    const hp = (form.elements.namedItem("website_url") as HTMLInputElement | null)?.value;
    if (hp) {
      setStatus("success"); // silently succeed against bots
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const dataObj: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
    fd.forEach((v, k) => {
      if (k in dataObj) {
        const existing = dataObj[k];
        dataObj[k] = Array.isArray(existing) ? [...existing, v] : [existing as FormDataEntryValue, v];
      } else {
        dataObj[k] = v;
      }
    });

    setStatus("submitting");
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataObj),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus("success");
        form.reset();
      } else {
        // Mailto-Fallback
        const subject = `RSS-Anfrage: ${dataObj.einrichtung_name || "Einrichtung"} – ${dataObj.bezirk || "Berlin"}`;
        const body = buildEmailBody(dataObj);
        const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
        setStatus("success");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Die Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an " +
          CONTACT_EMAIL +
          ".",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-sand mx-auto max-w-form text-center">
        <span className="icon-circle mx-auto">
          <CheckCircle2 size={26} aria-hidden />
        </span>
        <h3 className="mt-5 font-serif text-3xl">Vielen Dank für Ihre Anfrage.</h3>
        <p className="mt-4 text-rss-ink/85">
          Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.
          Gemeinsam klären wir, ob und wie „Raum. Stille. Stimme.“ in Ihrer
          Einrichtung stattfinden kann.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              formRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
          >
            Neue Anfrage stellen
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="mx-auto max-w-form space-y-10"
      aria-describedby="form-intro"
    >
      {/* Honeypot */}
      <div className="hp-field" aria-hidden>
        <label>
          Website (bitte freilassen)
          <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Fieldset legend="1. Angaben zur Einrichtung">
        <Field label="Name der Einrichtung / des Vereins" required>
          <input name="einrichtung_name" required className="form-input" autoComplete="organization" />
        </Field>
        <Field label="Art der Einrichtung" required>
          <select name="einrichtung_art" required defaultValue="" className="form-select">
            <option value="" disabled>Bitte wählen</option>
            {EINRICHTUNGSARTEN.map((a) => <option key={a}>{a}</option>)}
          </select>
        </Field>
        {/* <Field label="Religiöse / weltanschauliche / säkulare Ausrichtung">
          <input name="ausrichtung" className="form-input" />
        </Field>
        <Field label="Website">
          <input
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
            className="form-input"
            autoComplete="url"
          />
        </Field>
        <Field label="Bezirk" required>
          <select name="bezirk" required defaultValue="" className="form-select">
            <option value="" disabled>Bitte wählen</option>
            {BEZIRKE.map((b) => <option key={b}>{b}</option>)}
          </select>
        </Field> */}
        <Field label="Adresse des möglichen Veranstaltungsortes" required>
          <textarea name="adresse" required className="form-textarea" placeholder="Straße, PLZ, Ort" />
        </Field>
      </Fieldset>

      <Fieldset legend="2. Kontaktperson">
        <Field label="Vor- und Nachname" required>
          <input name="kontakt_name" required className="form-input" autoComplete="name" />
        </Field>
        <Field label="Rolle / Funktion">
          <input name="kontakt_rolle" className="form-input" placeholder="z. B. Jugendleitung, Gemeindebüro" />
        </Field>
        <Field label="E-Mail" required>
          <input
            name="kontakt_email"
            type="email"
            required
            className="form-input"
            autoComplete="email"
          />
        </Field>
        <Field label="Telefon">
          <input name="kontakt_telefon" type="tel" className="form-input" autoComplete="tel" />
        </Field>
        <fieldset>
          <legend className="form-label">Bevorzugte Kontaktaufnahme</legend>
          <div className="mt-2 flex flex-wrap gap-4">
            {["E-Mail", "Telefon", "egal"].map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 text-sm">
                <input type="radio" name="kontakt_praeferenz" value={opt} className="h-4 w-4 accent-rss-ink" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      </Fieldset>

      <Fieldset legend="3. Rahmen vor Ort">
        <RadioGroup
          label="Gibt es einen geeigneten Raum für 15–20 Teilnehmerinnen?"
          name="raum_geeignet"
          options={["Ja", "Nein", "Unsicher"]}
          required
        />
        <Field label="Raum kurz beschreiben">
          <textarea name="raum_beschreibung" className="form-textarea" placeholder="Größe, Sitzordnung, Besonderheiten" />
        </Field>
        {/* <RadioGroup label="Ist der Raum ungestört nutzbar?" name="raum_ungestoert" options={["Ja", "Nein", "Unsicher"]} /> */}
        <RadioGroup label="Barrierefreiheit" name="barrierefreiheit" options={["Ja", "Teilweise", "Nein", "Unsicher"]} />
        <fieldset>
          <legend className="form-label">Zugang zu Wasser / kleiner Verpflegung</legend>
          <div className="mt-2 flex flex-wrap gap-4">
            {["Wasser", "Küche", "Tee", "Snacks möglich"].map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" name="verpflegung" value={opt} className="h-4 w-4 accent-rss-ink" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="form-label">
            Mögliche Zeitfenster <span className="text-red-700" aria-hidden>*</span>
          </legend>
          <p className="form-help">Mehrfachauswahl möglich.</p>
          <div className="mt-2 flex flex-col gap-2">
            {ZEITFENSTER.map((z) => (
              <label key={z} className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="zeitfenster"
                  value={z}
                  className="h-4 w-4 accent-rss-ink"
                  onChange={(e) => {
                    // Make group required: ensure at least one is checked
                    const form = e.currentTarget.form;
                    if (!form) return;
                    const any = form.querySelectorAll<HTMLInputElement>('input[name="zeitfenster"]:checked').length > 0;
                    form.querySelectorAll<HTMLInputElement>('input[name="zeitfenster"]').forEach((el) => {
                      el.setCustomValidity(any ? "" : "Bitte mindestens ein Zeitfenster wählen.");
                    });
                  }}
                />
                {z}
              </label>
            ))}
          </div>
        </fieldset>
        <Field label="Wunschtermin oder Zeitraum">
          <input name="wunschtermin" className="form-input" placeholder="z. B. April–Juni 2026" />
        </Field>
      </Fieldset>

      <Fieldset legend="4. Zielgruppe und Einladung">
        {/* <RadioGroup
          label="Können Sie Mädchen / junge Frauen im Alter von ca. 14–18 Jahren erreichen?"
          name="zielgruppe_erreichbar"
          options={["Ja", "Teilweise", "Unsicher"]}
          required
        /> */}
        <Field label="Erwartete Anzahl interessierter Teilnehmerinnen">
          <select name="erwartete_anzahl" defaultValue="" className="form-select">
            <option value="">Bitte wählen</option>
            <option>5–10</option>
            <option>10–15</option>
            <option>15–20</option>
            <option>mehr als 20</option>
            <option>unsicher</option>
          </select>
        </Field>
        {/* <fieldset>
          <legend className="form-label">Über welche Kanäle können Sie einladen?</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {KANAELE.map((k) => (
              <label key={k} className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" name="kanaele" value={k} className="h-4 w-4 accent-rss-ink" />
                {k}
              </label>
            ))}
          </div>
        </fieldset> */}
        <RadioGroup label="Gibt es bereits eine feste Gruppe?" name="feste_gruppe" options={["Ja", "Nein", "Im Aufbau"]} />
      </Fieldset>

      <Fieldset legend="5. Haltung und Schutz">
        {/* <Consent
          name="zustimmung_maedchenraum"
          required
          label="Wir sind offen für einen geschützten Mädchenraum."
        />
        <Consent
          name="zustimmung_kein_unterricht"
          required
          label="Uns ist bewusst, dass das Format kein Religionsunterricht und keine Missionierung ist."
        />
        <Consent
          name="zustimmung_fotoregel"
          required
          label="Fotos/Videos werden nur nach Absprache und mit Einwilligung gemacht."
        /> */}
        <Field label="Hinweise zu Schutz, Zugänglichkeit oder besonderen Bedarfen">
          <textarea name="schutz_hinweise" className="form-textarea" />
        </Field>
      </Fieldset>

      <Fieldset legend="6. Ihre Nachricht">
        <Field label="Ihre Nachricht / Fragen">
          <textarea name="nachricht" className="form-textarea" />
        </Field>
        <Consent
          name="datenschutz"
          required
          label={
            <>
              Ich bin damit einverstanden, dass Forum Dialog e.V. meine Angaben
              zur Bearbeitung der Anfrage verarbeitet und mich dazu kontaktiert.
              Weitere Informationen finde ich in der{" "}
              <Link href="/datenschutz" className="underline hover:text-rss-ink">
                Datenschutzerklärung
              </Link>
              .
            </>
          }
        />
      </Fieldset>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle size={20} aria-hidden className="mt-0.5 shrink-0" />
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "submitting"} className="btn-primary">
          <Send size={18} aria-hidden />
          {status === "submitting" ? "Wird gesendet …" : "Anfrage absenden"}
        </button>
        <p className="text-sm text-rss-muted">
          Pflichtfelder sind mit <span className="text-red-700">*</span> markiert.
        </p>
      </div>
    </form>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="card space-y-5">
      <legend className="px-2 font-serif text-2xl">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="form-label">
        {label}
        {required && <span className="ml-0.5 text-red-700" aria-hidden> *</span>}
      </span>
      {children}
    </label>
  );
}

function RadioGroup({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="form-label">
        {label}
        {required && <span className="ml-0.5 text-red-700" aria-hidden> *</span>}
      </legend>
      <div className="mt-2 flex flex-wrap gap-4">
        {options.map((opt, i) => (
          <label key={opt} className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={opt}
              required={required && i === 0}
              className="h-4 w-4 accent-rss-ink"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Consent({
  name,
  label,
  required,
}: {
  name: string;
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 text-sm">
      <input
        type="checkbox"
        name={name}
        value="ja"
        required={required}
        className="mt-1 h-4 w-4 accent-rss-ink"
      />
      <span>
        {label}
        {required && <span className="ml-0.5 text-red-700" aria-hidden> *</span>}
      </span>
    </label>
  );
}
