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

### Wenn Änderungen nicht auf der Website erscheinen

1. Unter **GitHub → Actions → Deploy to GitHub Pages** den neuesten Lauf öffnen.
2. Erst wenn **build** und **deploy** erfolgreich abgeschlossen sind, ist der neue Stand veröffentlicht. Bei einem fehlgeschlagenen Build bleibt die bisherige Website online.
3. Bei **pending** prüfen, ob ein älterer Lauf auf **waiting** hängt. Einen veralteten, blockierten Lauf abbrechen; anschließend kann der neueste Lauf weiterlaufen.
4. Bei **waiting** die Umgebung **Settings → Environments → github-pages** prüfen: `main` muss als Deployment-Branch erlaubt sein; gegebenenfalls eine angeforderte Freigabe erteilen.

Der Workflow ersetzt bei neuen Änderungen ältere laufende Veröffentlichungen, damit der neueste Stand nicht dauerhaft hinter einem blockierten Lauf wartet. Er verwendet Ubuntu 24.04 und Actions mit Node.js-24-Laufzeit; die Anwendung selbst wird weiterhin mit Node.js 22 gebaut. Node.js-Deprecation- und Ubuntu-Migrationshinweise allein sind keine Buildfehler. Bei **build: failure** ist die konkrete Fehlermeldung im Build-Schritt maßgeblich.

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

Das Enddatum muss am oder nach dem Startdatum liegen. Ein Termin wird erst nach
seinem Ende archiviert. Fehlt das Enddatum, ist es ungültig oder liegt es vor dem
Startdatum, verwendet die Website für die Einordnung das Startdatum. Fehlerhafte
Datumsangaben trotzdem im CMS korrigieren, damit auch die angezeigte Uhrzeit stimmt.

Die Einordnung wird beim Build berechnet, nicht bei jedem Seitenaufruf.
Nachträglich ergänzte Bilder und korrigierte Termine erscheinen beim nächsten
Commit/Build auf der Website.

## 6. Redaktioneller Hinweis

Sveltia CMS befindet sich laut offizieller Dokumentation noch in der Beta. Nicht mehrere Personen gleichzeitig dasselbe Dokument bearbeiten lassen, da es sonst zu Git-Merge-Konflikten kommen kann.

## Dateien

- `public/admin/index.html` — Sveltia-Oberfläche
- `public/admin/config.yml` — GitHub-Backend und Felder
- `content/events/*.json` — redaktionelle Veranstaltungsdaten
- `public/uploads/` — hochgeladene Medien
