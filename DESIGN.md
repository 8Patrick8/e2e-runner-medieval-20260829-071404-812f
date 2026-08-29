# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Warmer Retro-Pixel-Look mit dunklem Abendhimmel, Pergament-Text und Gold-Akzent — mittelalterlich stimmig, klar lesbar und bewusst schlicht für Canvas.

## Colors

- `--color-bg`: **#1b1d2e**
- `--color-fg`: **#f4e9d8**
- `--color-accent`: **#f2b134**
- `--color-border`: **#3a3f5c**
- `--color-muted`: **#8b93a7**
- `--color-sky_top`: **#232645**
- `--color-sky_bottom`: **#4a3f6b**
- `--color-sun`: **#f6d98c**
- `--color-castle`: **#5a5470**
- `--color-hill_far`: **#3d4a5f**
- `--color-hill_near`: **#2f6f4e**
- `--color-ground`: **#5b3a29**
- `--color-ground_dark`: **#3f2718**
- `--color-player_base`: **#6f7f9e**
- `--color-player_trim`: **#d9e0ea**
- `--color-player_accent`: **#b33434**
- `--color-barrel`: **#8a5a2b**
- `--color-barrel_dark`: **#5e3a1a**
- `--color-barrel_band`: **#2c2c34**
- `--color-fence`: **#7a4a2b**
- `--color-fence_light`: **#9a6238**
- `--color-fence_dark`: **#4f2f1a**
- `--color-danger`: **#d64545**
- `--color-overlay`: **rgba(20,22,35,0.72)**

## Typography

- `font_family`: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- `heading_weight`: 700
- `body_weight`: 400

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px

## Border-Radii

- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 16px
- `--radius-pill`: 999px

## Components

### Button

Hintergrund accent #f2b134, Text #1b1d2e, padding 12px 24px, radius md 8px, font-weight 700, min-height 44px (Touch-Ziel), min-width 120px; hover: #f6c25c (aufgehellt); active: #d99a22 plus 1px translateY; disabled: opacity 0.55 und kein Pointer-Events; Fokus-Ring 2px solid #f4e9d8.

### Panel (Start/GameOver)

Hintergrund rgba(27,29,46,0.86), radius lg 16px, border 1px solid border #3a3f5c, padding 24px (mobil 16px), max-width 420px, zentriert; Titel mit heading_weight 700, Fließtext body_weight 400.

### HUD-Spec

Canvas-HUD: Distanz links oben bei 16px Rand, 20px/700 in fg #f4e9d8; Highscore rechts oben; jeder HUD-Text erhält 2px Schatten in bg #1b1d2e für Lesbarkeit über jedem Hintergrund; unter 768px Breite Schrift 16px.

### Sprite/Art-Direction: Ritter (Spieler)

Größe 36x48 px, Bodenlinie bei y=468 in 960x540 Logikfläche; klare Silhouette aus 3 Tönen: Rüstung player_base #6f7f9e, Kanten/Licht player_trim #d9e0ea, Wappen/Akzent player_accent #b33434, plus 2px Outline #1b1d2e. Kein einfarbiges Rechteck: Helm mit Visierschlitz, Brustplatte, getrennte Arm-/Beinsegmente. 4 Lauf-Frames mit wechselnder Beinstellung, 1 Sprungframe mit angewinkelten Beinen.

### Sprite/Art-Direction: Fass (Hindernis)

Größe 28x36 px; 3 Töne: barrel #8a5a2b, Schatten barrel_dark #5e3a1a, Metallreifen barrel_band #2c2c34, plus 2px Outline #1b1d2e; horizontale Daubenlinien und zwei vertikale Metallreifen als echte Pixel-Details, keine einfarbige Fläche.

### Sprite/Art-Direction: Zaun (Hindernis)

Größe 44x32 px; 3 Töne: fence #7a4a2b, helle Latten fence_light #9a6238, dunkle Pfosten fence_dark #4f2f1a, plus 2px Outline #1b1d2e; drei bis vier senkrechte Latten mit angedeuteten Spitzen und zwei Querstreben.

### Sprite/Art-Direction: Boden

Bodenstreifen 72px hoch ab Unterkante; ground #5b3a29 mit dunklerem Erd-/Schattenband ground_dark #3f2718; dezente vertikale Linien alle 64px, die mit der Spielgeschwindigkeit scrollen und Laufgefühl erzeugen.

### Sprite/Art-Direction: Parallax-Hintergrund

Drei Ebenen: 1) Himmel als Verlauf sky_top #232645 nach sky_bottom #4a3f6b mit Sonne #f6d98c (Radius 28px, weicher Rand); 2) ferne Burg castle #5a5470 als Silhouette mit Zinnen/Turm plus Hügel hill_far #3d4a5f; 3) nahe Hügel hill_near #2f6f4e. Parallax-Faktoren 0.1 / 0.25 / 0.5 relativ zur Spielgeschwindigkeit.

### Screen-Layout: Start

Zentriertes Panel max-width 420px auf stehendem Parallax-Hintergrund; Titel 'Mittelalter-Runner' 32px/700 in fg #f4e9d8 mit 2px Schatten, Untertitel in muted #8b93a7, Highscore-Zeile mit Gold-Akzent, Button 'Start' sowie Hinweis 'Leertaste oder Klick'.

### Screen-Layout: GameOver

Overlay rgba(20,22,35,0.72) über eingefrorenem Spielfeld; zentriertes Panel: 'Game Over' in danger #d64545, erreichter Punktestand groß, Highscore mit accent #f2b134, Button 'Neustart', Hinweis 'Leertaste oder Klick startet neu'.

### Lesbarkeitsregeln

Spieler und Hindernisse immer mit 2px Outline #1b1d2e gegen helle Himmel-/Hügeltöne; warme Vordergrund-Palette (Braun/Gold/Rot) klar von kühler Hintergrund-Palette (Blau/Grün) getrennt; HUD-Text mit dunklem Schatten, Mindestkontrast für HUD-Text ≥ 7:1.

## Layout Principles

- Logische Spielfläche 960x540, per CSS responsiv auf die Viewport-Breite skaliert (16:9 letterboxing), devicePixelRatio für scharfe Canvas-Darstellung berücksichtigen.
- Spiel zentriert, maximale Anzeigebreite 1200px; Bodenlinie bei y=468, Spieler-Laufposition bei x=120.
- Breakpoint: unter 768px HUD-Schrift 16px und Panel-Padding 16px, sonst HUD 20px und Panel-Padding 24px.
- Alle Abstände in HUD und Screens aus der Skala 4/8/12/16/24/32/48px verwenden.
- Zeichenreihenfolge pro Frame: Himmel, Sonne, ferne Ebene, nahe Hügel, Boden, Hindernisse, Spieler, HUD-Text zuletzt.
