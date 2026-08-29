# Mittelalter-Runner

Ein simples 2D-Endless-Runner-Browserspiel im Mittelalter-Stil: Ein Ritter
läuft automatisch von links nach rechts, springt per Leertaste oder Klick über
prozedural erscheinende Hindernisse (Fässer, Zäune) und sammelt Distanzpunkte.
Das Lauftempo steigt mit der Zeit, der Highscore wird im LocalStorage
gespeichert. Ein parallax scrollender Hintergrund (Burg, Hügel) sowie Start-
und Game-Over-Screen mit Neustart runden das Spiel ab.

## Tech Stack

- JavaScript (Vanilla)
- Vite (Build & Dev-Server)
- HTML5 Canvas
- LocalStorage (Highscore)
- npm

## Installation

```bash
npm install
```

## Entwicklung

Dev-Server starten (Hot-Reload):

```bash
npm run dev
```

Danach im Browser die angezeigte URL öffnen (Standard `http://localhost:5173`).

## Produktion bauen

```bash
npm run build
```

Der Build liegt danach in `dist/` und wird über `npm run preview` lokal
ausgeliefert. Die `dist/`-Dateien werden ausschließlich lokal ausgeliefert —
es werden keine externen Ressourcen geladen.

## Steuerung

- **Leertaste** oder **Klick**: Aktion auslösen (Spiel starten, springen, neu
  starten).

## Features

- Canvas-Renderer mit fester Logikfläche 960×540, responsiv skaliert (16:9)
- Spielschleife über `requestAnimationFrame` mit festem Zeitschritt 1/60 s
- Modulare Architektur: `constants`, `state`, `loop`, `input`, `player`,
  `obstacles`, `background`, `hud`, `highscore`, `progression`, `scenes`
- Sichtbarer Anfangspfad: Himmel, Bodenfläche und eine Ritter-Figur, die auf
  Leertaste/Klick sichtbar reagiert
- Test-Hook `window.__TEST_API__` (`scene`, `player`, `score`) für die QA

> Hinweis: Dies ist das Spielgrundgerüst (Sprint-Gerüst). Laufanimation,
> Hindernisse, Parallax-Hintergrund, Punktewertung, HUD, Highscore und die
> Start-/Game-Over-Screens werden in den Folgetickets ergänzt.
