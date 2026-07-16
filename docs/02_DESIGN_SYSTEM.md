# Design-System für Raum. Stille. Stimme.  
  
## Gesamtwirkung  
  
Die Website soll wirken wie:  
  
- ruhig  
- offen  
- warm  
- hochwertig  
- vertrauenswürdig  
- minimalistisch  
- jugendnah, aber nicht verspielt  
- institutionell anschlussfähig  
  
Die Gestaltung orientiert sich an der vorhandenen Flyer-Ästhetik:  
  
- Schwarz-Weiß-Gelb  
- reduzierte Illustrationen  
- klare Icons  
- viel Weißraum  
- ruhige Karten  
- freundliche runde Formen  
- dezente Linien  
  
## Farbpalette  
  
### Primärfarben  
  
#### RSS Yellow  
  
- Hex: `#F6C343`  
- Verwendung:  
  - Punkte nach „Raum. Stille. Stimme.“  
  - CTA-Buttons  
  - Akzentlinien  
  - Nummernkreise  
  - Icons-Hintergründe  
  - Hover-Zustände  
  
#### Ink Black  
  
- Hex: `#171717`  
- Verwendung:  
  - Headlines  
  - Fließtext  
  - Icons  
  - Footer-Text  
  
#### Warm White  
  
- Hex: `#FAF8F2`  
- Verwendung:  
  - Seitenhintergrund  
  - große ruhige Flächen  
  
### Sekundärfarben  
  
#### Soft Sand  
  
- Hex: `#F3EBDD`  
- Verwendung:  
  - Kartenhintergründe  
  - Infoboxen  
  - FAQ-Flächen  
  
#### Light Border  
  
- Hex: `#E7DDCB`  
- Verwendung:  
  - Kartenränder  
  - Linien  
  - Trenner  
  
#### Muted Text  
  
- Hex: `#66645F`  
- Verwendung:  
  - sekundärer Text  
  - Beschreibungen  
  - Footer-Microcopy  
  
#### White  
  
- Hex: `#FFFFFF`  
- Verwendung:  
  - Karten  
  - Formularflächen  
  - Kontrastflächen  
  
## Typografie  
  
### Headline-Schrift  
  
Empfehlung:  
  
- `Cormorant Garamond`  
- oder `Playfair Display`  
- oder eine ähnliche elegante Serifenschrift  
  
Verwendung:  
  
- H1  
- H2  
- große Zitate  
- Logo-nahe Typografie  
  
Stil:  
  
- große Zeilenhöhe  
- ruhige Eleganz  
- nicht zu dekorativ  
  
### Body-Schrift  
  
Empfehlung:  
  
- `Inter`  
- oder `Source Sans 3`  
- oder system sans-serif  
  
Verwendung:  
  
- Fließtext  
- Formular  
- Navigation  
- Buttons  
- FAQ  
  
## Typografische Hierarchie  
  
### H1  
  
- sehr groß  
- Desktop: ca. 56–72 px  
- Mobile: ca. 40–48 px  
- Serif  
- Zeilenhöhe eng, aber lesbar  
  
### H2  
  
- Desktop: ca. 36–48 px  
- Mobile: ca. 30–36 px  
- Serif  
  
### H3  
  
- ca. 22–28 px  
- Sans oder Serif je nach Layout  
  
### Body  
  
- 17–19 px  
- Zeilenhöhe ca. 1.6  
  
### Kleine Labels  
  
- 13–15 px  
- Sans  
- gerne uppercase sparsam verwenden  
  
## Logo / Titel  
  
Der Titel soll so gesetzt werden:  
  
Raum.    
Stille.    
Stimme.  
  
Die Punkte können gelb hervorgehoben werden.  
  
Beispiel:  
  
- „Raum“ schwarz, Punkt gelb  
- „Stille“ schwarz, Punkt gelb  
- „Stimme“ schwarz, Punkt gelb  
  
## Layout  
  
### Maximalbreite  
  
- Content max-width: ca. 1120–1200 px  
- Formulare max-width: ca. 760–880 px  
  
### Raster  
  
- Desktop: 12-Spalten-Grid oder flexible CSS-Grid-Struktur  
- Tablet: 2 Spalten  
- Mobile: 1 Spalte  
  
### Abstände  
  
- Große Section-Paddings: 80–120 px Desktop  
- Mobile: 56–72 px  
- Kartenabstände: 20–32 px  
  
## Komponenten  
  
### Header  
  
- Sticky oder statisch, aber immer klar  
- Logo links  
- Navigation rechts  
- CTA-Button ganz rechts  
- Mobile: Hamburger oder kompakte Navigation  
- Hintergrund: warm white / leicht transparent möglich  
- dezente Border unten  
  
### Buttons  
  
#### Primärbutton  
  
- Hintergrund: `#F6C343`  
- Text: `#171717`  
- Border-radius: 999px  
- Padding: großzügig  
- Hover: leicht dunkler / Schatten minimal  
  
Textbeispiele:  
  
- Format anfragen  
- Unverbindlich anfragen  
  
#### Sekundärbutton  
  
- Hintergrund: transparent oder weiß  
- Border: `#171717` oder `#E7DDCB`  
- Text: `#171717`  
- Border-radius: 999px  
  
Textbeispiele:  
  
- Ablauf ansehen  
- Mehr erfahren  
  
### Karten  
  
- Hintergrund: Weiß oder Soft Sand  
- Border: `#E7DDCB`  
- Border-radius: 20–28 px  
- Padding: 24–32 px  
- Schatten sehr subtil oder gar keiner  
  
### Icon-Stil  
  
- Outline Icons  
- Strichstärke ca. 1.5–2  
- Schwarz  
- Gelbe Kreise oder gelbe Highlights als Hintergrund  
- Gute Icon-Bibliothek: `lucide-react`  
  
Geeignete Icons:  
  
- Users  
- Clock  
- MapPin  
- DoorOpen / Building  
- Megaphone  
- Heart  
- Lightbulb  
- Briefcase  
- MessageCircle  
- BarChart  
- ClipboardCheck  
- ShieldCheck  
  
### Timeline  
  
Für den Ablauf in 5 Schritten:  
  
- Nummernkreise in Gelb  
- vertikale Linie oder horizontale Linie  
- kurze Texte  
- optional kleine Illustrationen oder Icons  
  
Schritte:  
  
1. Kennenlernen  
2. Raum prüfen  
3. Einladen  
4. Durchführen  
5. Auswerten  
  
### Hinweisbox  
  
Für den Merksatz:  
  
**Kein Religionsunterricht. Keine Missionierung. Kein Podium. Kein Leistungsdruck.**  
  
Gestaltung:  
  
- Border gelb  
- Icon Herz oder Schild  
- Hintergrund weiß  
- große, klare Typografie  
  
## Illustrationen  
  
Stil:  
  
- lineare Schwarz-Weiß-Zeichnungen  
- gelbe Flächen als Akzent  
- keine fotorealistischen Menschen  
- keine identifizierbaren Gesichter  
- Gruppen, Hände, Material, Räume, Gesprächssituationen  
- freundliche, diverse, aber abstrahierte Figuren  
  
Wenn keine eigenen Illustrationen vorhanden sind:  
  
- mit Icons und abstrakten Formen arbeiten  
- keine Stockfotos verwenden  
- keine generischen KI-Fotos verwenden  
  
## Bildsprache  
  
Vermeiden:  
  
- dramatische Bilder  
- religiöse Symbolik als Hauptmotiv  
- Fotos von betenden Personen  
- erkennbare Minderjährige  
- stereotype Darstellungen von Religion  
  
Bevorzugen:  
  
- Materialien  
- Hände beim Gestalten  
- leere Stuhlkreise  
- Karten, Papier, Stifte  
- abstrakte Figuren  
- Raumdetails  
- anonymisierte kreative Ergebnisse  
  
## Barrierefreiheit  
  
- Ausreichende Kontraste sicherstellen  
- CTA-Buttons klar erkennbar machen  
- Navigation per Tastatur bedienbar  
- Fokuszustände sichtbar  
- Formulare mit Labels, nicht nur Placeholder  
- Fehlermeldungen verständlich  
- Alt-Texte für Bilder und Illustrationen  
- Keine Informationen nur über Farbe vermitteln  
  
## Animationen  
  
Wenn Animationen verwendet werden:  
  
- sehr dezent  
- kurze Fade-ins oder Slide-ups  
- keine hektischen Bewegungen  
- `prefers-reduced-motion` respektieren  
  
## Responsive Verhalten  
  
### Desktop  
  
- Großzügiger Hero mit zwei Spalten  
- Kartenraster 2–3 Spalten  
- Timeline horizontal oder vertikal  
  
### Tablet  
  
- Hero ggf. noch zwei Spalten  
- Karten 2 Spalten  
  
### Mobile  
  
- Alles einspaltig  
- CTA direkt sichtbar  
- Formulare einfach bedienbar  
- Header kompakt  
- Keine übergroßen Illustrationen  