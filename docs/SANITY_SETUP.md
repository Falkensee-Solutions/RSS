# Einmalige Sanity-Einrichtung

Diese Anleitung richtet das CMS für die statische GitHub-Pages-Website ein. Es werden keine Passwörter oder Tokens in GitHub committed.

## 1. Sanity-Projekt erstellen

1. Öffne <https://www.sanity.io/manage> und melde dich an.
2. Wähle **Create project**.
3. Vergib zum Beispiel den Namen `Raum Stille Stimme`.
4. Erstelle ein Dataset mit dem Namen `production`.
5. Kopiere die **Project ID**. Sie sieht ungefähr so aus: `abc123xy`.

Die Project ID ist keine geheime Zugangsinformation und kann hier genannt werden. Ein API-Token darf niemals geteilt werden.

## 2. Studio lokal starten

Im Repository:

```text
cd studio
export SANITY_STUDIO_PROJECT_ID=DEINE_PROJECT_ID
export SANITY_STUDIO_DATASET=production
npm run dev
```

Unter der von Sanity angezeigten lokalen Adresse anmelden. Im Studio kann danach eine Veranstaltung mit Titel, Slug, Datum, Beschreibung, Anmeldung, Flyer, Galerie sowie Partner- und Förderlogos angelegt werden.

## 3. Studio veröffentlichen

Nach erfolgreicher Anmeldung:

```text
cd studio
export SANITY_STUDIO_PROJECT_ID=DEINE_PROJECT_ID
export SANITY_STUDIO_DATASET=production
npm run deploy
```

Sanity fragt nach einem Namen für die Studio-Adresse. Diese Adresse kann anschließend an die Redaktion weitergegeben werden.

## 4. GitHub Pages konfigurieren

Im GitHub-Repository `Falkensee-Solutions/RSS`:

1. **Settings** → **Secrets and variables** → **Actions** öffnen.
2. Unter **Variables** eine Repository-Variable anlegen:
   - Name: `SANITY_PROJECT_ID`
   - Value: die Project ID aus Schritt 1
3. Optional eine zweite Variable anlegen:
   - Name: `SANITY_DATASET`
   - Value: `production`

Danach unter **Actions** den Workflow **Deploy to GitHub Pages** mit **Run workflow** manuell starten.

## 5. Sanity-Webhook einrichten

Damit jede Veröffentlichung automatisch die Website aktualisiert:

1. In Sanity Manage das Projekt öffnen.
2. **API** → **Webhooks** → **Create webhook** wählen.
3. Für eine sichere Verbindung einen GitHub App-/Relay-Endpunkt verwenden, der `repository_dispatch` auslöst.
4. Event-Typ im Repository: `sanity-publish`.
5. Repository: `Falkensee-Solutions/RSS`.
6. Nur auf veröffentlichte Änderungen reagieren.

Ein GitHub Personal Access Token darf nicht in dieses Repository, in den Website-Code oder in den Chat geschrieben werden. Falls kein Relay vorhanden ist, kann zunächst nach jeder Sanity-Veröffentlichung der GitHub-Workflow manuell gestartet werden; die Website funktioniert trotzdem.

## 6. Rückmeldung für die weitere Einrichtung

Nach Schritt 1 genügt folgende Nachricht:

```text
Sanity Project ID: abc123xy
Dataset: production
```

Nicht senden: Passwörter, API-Tokens, GitHub-Tokens oder Recovery-Codes.

## Erwartetes Ergebnis

Nach dem ersten erfolgreichen Workflow enthält die Website:

- aktuelle Termine,
- vergangene Termine automatisch anhand des Datums,
- dynamische Detailseiten,
- Flyer-Downloads,
- Partner- und Förderlogos,
- Galerien für nachträglich ergänzte Veranstaltungsbilder.
