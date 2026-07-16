  
---  
  
## Datei 5: `docs/04_TECH_SEO_LEGAL.md`  
  
```markdown  
# Technische, SEO- und rechtliche Anforderungen  
  
## Grundanforderung  
  
Die Website soll modern, schnell, responsiv, barrierearm und leicht wartbar sein. Sie soll eine Landingpage für Institutionen und ein Anfrageformular enthalten.  
  
## Empfohlene technische Umsetzung  
  
Wenn kein bestehendes Projekt vorhanden ist:  
  
- Next.js mit App Router  
- TypeScript  
- Tailwind CSS  
- lucide-react für Icons  
- einfache Komponentenstruktur  
- keine unnötig schweren Abhängigkeiten  
  
Wenn bereits ein Projekt vorhanden ist:  
  
- Bestehenden Stack respektieren  
- Design und Inhalt entsprechend integrieren  
- Keine unnötige Migration beginnen  
  
## Seiten  
  
Mindestens:  
  
- `/` Landingpage  
- `/datenschutz` Datenschutzseite mit Platzhaltertext  
- `/impressum` Impressumsseite mit Platzhaltertext  
- optional `/danke` Danke-Seite nach Formularversand  
  
## Navigation  
  
- Ankerlinks auf der Startseite:  
  - `#format`  
  - `#einrichtungen`  
  - `#ablauf`  
  - `#voraussetzungen`  
  - `#faq`  
  - `#anfrage`  
  
## Performance  
  
- Bilder optimieren  
- Keine großen ungenutzten Libraries  
- Fonts performant laden  
- CLS vermeiden  
- Mobile First  
- Lighthouse-Ziel:  
  - Performance: möglichst 90+  
  - Accessibility: möglichst 90+  
  - Best Practices: möglichst 90+  
  - SEO: möglichst 90+  
  
## Barrierefreiheit  
  
- Semantisches HTML verwenden  
- Genau eine H1 pro Seite  
- Saubere Heading-Hierarchie  
- Buttons als Buttons, Links als Links  
- Formulare mit Labels  
- Fehlermeldungen mit `aria-describedby`  
- Tastaturbedienbarkeit sicherstellen  
- Fokuszustände sichtbar machen  
- `prefers-reduced-motion` beachten  
- Kontraste prüfen  
- Alt-Texte für Illustrationen/Bilder  
  
## Datenschutz  
  
- Keine Tracking-Cookies ohne Zustimmung  
- Wenn Analytics verwendet wird: datenschutzfreundlich und optional  
- Keine Veröffentlichung identifizierbarer Minderjähriger ohne Einwilligung  
- Formular nur mit Datenschutz-Checkbox  
- Keine sensiblen Daten von Jugendlichen abfragen  
- Keine Teilnehmerinnen-Anmeldung über dieses Formular  
  
## Impressum  
  
Die Impressumsseite soll als Platzhalter angelegt werden und klar markieren:  
  
**TODO: Impressumsangaben durch Forum Dialog e.V. final prüfen und freigeben lassen.**  
  
Mögliche öffentlich bekannte Angaben:  
  
- Forum Dialog e.V.  
- Website: https://www.forumdialog.org/  
- E-Mail: info@forumdialog.org  
- Telefon: 030 31519988  
  
Keine vollständigen rechtlichen Angaben erfinden.  
  
## Datenschutzseite  
  
Die Datenschutzseite soll als Platzhalter angelegt werden und klar markieren:  
  
**TODO: Datenschutzerklärung juristisch prüfen und an tatsächliche technische Umsetzung anpassen.**  
  
Sie soll mindestens Abschnitte enthalten für:  
  
- Verantwortliche Stelle  
- Kontakt  
- Server-Logs  
- Kontaktformular  
- Rechtsgrundlage  
- Speicherdauer  
- Betroffenenrechte  
- Externe Dienste, falls verwendet  
- Stand der Erklärung  
  
## SEO  
  
### Meta Title  
  
**Raum. Stille. Stimme. | Begegnungsformat für Mädchen in Berlin**  
  
### Meta Description  
  
**Ein geschütztes Begegnungsformat für Mädchen und junge Frauen von 14–18 Jahren. Forum Dialog e.V. bringt Konzept, Teamerinnen und Material zu Einrichtungen in Berlin.**  
  
### Keywords / Themen  
  
Nicht als Meta Keywords nötig, aber in Texten berücksichtigen:  
  
- Begegnungsformat Berlin  
- interreligiöser Dialog Jugendliche  
- Mädchenarbeit Berlin  
- Jugendarbeit Gemeinden  
- geschützter Mädchenraum  
- Forum Dialog e.V.  
- Raum Stille Stimme  
- Vereine Berlin  
- Gemeinden Berlin  
- Jugendformat  
  
### Open Graph  
  
- `og:title`: Raum. Stille. Stimme.  
- `og:description`: Begegnungsformat für Mädchen und junge Frauen in Berlin.  
- `og:type`: website  
- `og:image`: abstrakte Illustration / OG-Grafik ohne erkennbare Gesichter  
- `og:locale`: de_DE  
  
## Social Sharing  
  
Eine OG-Grafik sollte im Stil des Flyers erstellt werden:  
  
- warm weißer Hintergrund  
- Titel „Raum. Stille. Stimme.“  
- gelbe Punkte  
- kleine Line-Art-Elemente  
- keine echten Fotos  
- Format: 1200 × 630 px  
  
## Content-Regeln  
  
Formulierungen vermeiden:  
  
- „Wir beten gemeinsam“  
- „Wir unterrichten Religion“  
- „Wir bringen den Mädchen den Glauben bei“  
- „Mission“  
- „Bekehrung“  
- „Therapie“  
- „Beratung“ im professionell-therapeutischen Sinne, sofern nicht belegt  
  
Formulierungen bevorzugen:  
  
- Begegnung  
- Austausch  
- Reflexion  
- gemeinsames Erleben  
- geschützter Raum  
- respektvolle Gesprächskultur  
- interreligiös sensibel  
- weltanschaulich offen  
- freiwillig  
- niedrigschwellig  
  
## Sicherheit und Minderjährigenschutz  
  
Nicht zu viel versprechen, aber klare Haltung zeigen:  
  
- Fotos nur mit Einwilligung  
- Keine identifizierbaren Veröffentlichungen Minderjähriger ohne Zustimmung  
- Teamerinnen moderieren auf Augenhöhe  
- Klare Gesprächsregeln  
- Schutz der Privatsphäre  
- Freiwilligkeit  
- Keine Bloßstellung  
- Keine Bewertung persönlicher Glaubens- oder Weltanschauungsfragen  
  
## Akzeptanzkriterien  
  
Die Website gilt als fertig, wenn:  
  
1. Die Landingpage alle inhaltlichen Abschnitte enthält.  
2. Die Navigation zu den passenden Abschnitten springt.  
3. Der CTA „Format anfragen“ mehrfach sichtbar ist.  
4. Das Formular alle Pflichtfelder und Validierungen enthält.  
5. Eine Erfolgsmeldung oder Danke-Seite existiert.  
6. Impressum und Datenschutz als Platzhalterseiten vorhanden sind.  
7. Design klar an Schwarz-Weiß-Gelb-Flyer angelehnt ist.  
8. Keine identifizierbaren Minderjährigenbilder verwendet werden.  
9. Die Seite auf Mobile, Tablet und Desktop gut funktioniert.  
10. Die Website ohne Konsolenfehler läuft.  
11. Build/Lint/Typecheck erfolgreich sind, soweit im Projekt vorhanden.  
12. Claude gibt am Ende eine kurze Zusammenfassung der Änderungen und offene TODOs aus.  
