# Sanity Studio

Das Studio wird als separates Sanity-Projekt betrieben. Wegen der React-19-Anforderung aktueller Sanity-Studio-Versionen liegt es bewusst nicht im Next.js-Frontend mit React 18.

## Einrichten

1. Im Sanity-Management ein Projekt und Dataset anlegen.
2. Mit `npm create sanity@latest` ein Studio-Projekt in diesem Ordner erzeugen oder ein separates Studio-Repository verwenden.
3. Die Datei `../sanity/event.ts` als Schema übernehmen.
4. Projekt-ID und Dataset im Studio konfigurieren.
5. Das Studio mit `npx sanity deploy` auf Sanity hosten.
6. Einzelne Redaktionskonten einladen; keinen gemeinsamen Token verwenden.
7. Für die Website die GitHub-Variable `SANITY_PROJECT_ID` setzen.

Das Studio benötigt eine eigene `package.json`, `sanity.config.ts` und `sanity.cli.ts`. Die Schemaquelle in `../sanity` kann anschließend importiert werden.
