# Sveltia CMS einrichten

Die Website bleibt auf GitHub Pages. Sveltia CMS speichert Termine, Flyer, Galeriebilder und Logos direkt im Repository. Jeder Push auf `main` startet anschließend den normalen GitHub-Pages-Build.

## 1. Admin öffnen

Nach dem Deployment ist die Redaktion unter folgender Adresse erreichbar:

`https://rss.forumdialog.org/admin/`

Die Anmeldung erfolgt über GitHub. Die Redaktionspersonen benötigen Schreibrechte im Repository `Falkensee-Solutions/RSS`. Ein gemeinsamer Token ist nicht nötig.

## 2. GitHub-OAuth

Sveltia benötigt für GitHub-Backends eine OAuth-Anmeldung. Falls die Anmeldung nach dem ersten Öffnen nicht funktioniert, muss im GitHub-Konto eine OAuth-App bzw. ein von Sveltia unterstützter OAuth-Proxy eingerichtet werden. Keine Client-Secrets in `public/admin/config.yml` eintragen.

## 3. Veranstaltung anlegen

1. `/admin/` öffnen und mit GitHub anmelden.
2. **Veranstaltungen** auswählen.
3. **Neue Veranstaltung** erstellen.
4. Titel, Slug und Datum eintragen.
5. `Veröffentlicht` aktivieren.
6. Beschreibung, Anmeldelink, Flyer, Partnerlogos und Galerie ergänzen.
7. Speichern und den Commit bestätigen.

Nach dem Commit startet GitHub Actions automatisch den Website-Build.

## 4. Wie wird daraus die Detailseite?

Sveltia ist nur die Eingabemaske. Beim Speichern legt es für jeden Termin eine
JSON-Datei unter `content/events/` an. Die Website liest diese Datei beim Build
und setzt die Felder automatisch an die richtige Stelle:

| Feld in Sveltia | Darstellung auf der Website |
| --- | --- |
| Titel, Kurzbeschreibung | Seitenkopf |
| Beginn, Ende, Ort, Adresse | Infokarte unter dem Titel |
| Beschreibung | Fließtext in der linken Spalte |
| Flyerbild | große Abbildung in der rechten Spalte |
| Flyer zum Herunterladen | Download-Button unter dem Flyer |
| Anmeldelink | gelber Anmelde-Button |
| Partner/Förderer | verlinkte Logo-Kacheln |
| Galerie | Bildergalerie am Seitenende |

Das JSON muss nicht von Hand bearbeitet werden. Sveltia erzeugt es automatisch.

### Beschreibung formatieren

Das Feld **Beschreibung** ist ein normaler Texteditor mit einer Werkzeugleiste.
Absätze entstehen durch Leerzeilen. Außerdem sind möglich:

- Überschrift 2 und 3,
- **fetter** und *kursiver* Text,
- Aufzählungen und nummerierte Listen,
- Links und Zitate.

Die Detailseite rendert diese Eingaben als sicheres Markdown. Eingegebener
HTML-Code wird nicht ausgeführt.

### Flyer

Für die Darstellung rechts ein hochformatiges Bild bei **Flyerbild** hochladen
(JPG, PNG oder WebP). Ein PDF kann zusätzlich bei **Flyer zum Herunterladen**
hinterlegt werden. Ein PDF allein wird nicht als Vorschaubild angezeigt.

### Anmeldung

Nur wenn **Anmeldelink** ausgefüllt ist, erscheint der gelbe Button. Unter
**Text auf dem Anmelde-Button** und **Hinweis zur Anmeldung** lassen sich
Beschriftung und Zusatztext ändern.

### Partner

Für jeden Partner möglichst alle drei Angaben pflegen: Name, vollständige
Website-Adresse inklusive `https://` und Logo. Sobald eine Website eingetragen
ist, wird die gesamte Logo-Kachel anklickbar.

## 5. Aktuell und vergangen

Die Website sortiert veröffentlichte Veranstaltungen beim Build automatisch anhand von `startDate` bzw. `endDate` in:

- aktuelle Termine,
- vergangene Termine.

Nachträglich ergänzte Bilder erscheinen beim nächsten Commit/Build auf der Detailseite des Termins.

## 6. Redaktioneller Hinweis

Sveltia CMS befindet sich laut offizieller Dokumentation noch in der Beta. Nicht mehrere Personen gleichzeitig dasselbe Dokument bearbeiten lassen, da es sonst zu Git-Merge-Konflikten kommen kann.

## Dateien

- `public/admin/index.html` — Sveltia-Oberfläche
- `public/admin/config.yml` — GitHub-Backend und Felder
- `content/events/*.json` — redaktionelle Veranstaltungsdaten
- `public/uploads/` — hochgeladene Medien
