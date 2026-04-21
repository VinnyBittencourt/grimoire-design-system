# Grimoire Design System

## Brand

Medieval fantasy D&D 3.5 theme. Dark aged wood backgrounds, gold accents, serif headings.
The aesthetic evokes an ancient spellbook — worn leather, candlelight, arcane glyphs.
This system should feel immersive for tabletop RPG players while remaining readable and usable.

---

## Colors

### Primitives

| Token | Value | Description |
|---|---|---|
| `--color-gold-primary` | `#c9a84c` | Main gold — borders, icons, accents |
| `--color-gold-light` | `#f0d070` | Bright gold — hover states, highlights |
| `--color-gold-dark` | `#8a6e2a` | Muted gold — secondary elements |
| `--color-wood-darkest` | `#1a1208` | Page background |
| `--color-wood-dark` | `#2a1a0a` | Panel background |
| `--color-wood-medium` | `#3d2810` | Card / elevated surface |
| `--color-wood-border` | `#6b4a1a` | Panel and card borders |
| `--color-text-light` | `#f0e6c8` | Primary text (parchment white) |
| `--color-text-muted` | `#9b8a6a` | Secondary / helper text |
| `--color-danger` | `#c0392b` | Destructive actions |
| `--color-danger-light` | `#e74c3c` | Danger hover |
| `--color-success` | `#27ae60` | Confirmations |
| `--color-overlay` | `rgba(0, 0, 0, 0.75)` | Modal backdrop |

### Semantic Aliases

| Role | Token |
|---|---|
| Background page | `--color-wood-darkest` |
| Background surface | `--color-wood-dark` |
| Background elevated | `--color-wood-medium` |
| Border default | `--color-wood-border` |
| Border accent | `--color-gold-primary` |
| Text primary | `--color-text-light` |
| Text secondary | `--color-text-muted` |
| Interactive default | `--color-gold-primary` |
| Interactive hover | `--color-gold-light` |

---

## Typography

| Token | Value |
|---|---|
| `--font-heading` | `'Cinzel', Georgia, serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--font-size-xs` | `0.75rem` |
| `--font-size-sm` | `0.875rem` |
| `--font-size-base` | `1rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-xl` | `1.25rem` |
| `--font-size-2xl` | `1.5rem` |

**Rules:**
- Use Cinzel for headings, labels, and navigation items — uppercase tracking
- Use Inter for all body text, descriptions, and UI copy
- Never use Cinzel below 12px

---

## Spacing

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |

---

## Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |

---

## Components

### Panel
Dark wood container — the primary layout surface.
- Background: `--color-wood-dark`
- Border: 1px solid `--color-wood-border`, with inner gold glow
- Border radius: `--radius-md`
- Padding: `--space-4`

### Button — Gold (Primary CTA)
- Background: linear gradient from `--color-gold-dark` to `--color-gold-primary`
- Text: `--color-wood-darkest` (dark for contrast on gold)
- Font: `--font-heading`, uppercase, `--font-size-sm`
- Border: 1px solid `--color-gold-primary`
- Hover: gradient brightens toward `--color-gold-light`

### Button — Ghost
- Background: transparent
- Text: `--color-gold-primary`
- Border: 1px solid `--color-gold-primary`
- Hover: background becomes `rgba(201, 168, 76, 0.1)`

### Button — Danger
- Background: `--color-danger`
- Text: `--color-text-light`
- Hover: `--color-danger-light`

### Input
- Background: `rgba(0, 0, 0, 0.3)`
- Border: 1px solid `--color-wood-border`
- Text: `--color-text-light`
- Focus border: `--color-gold-primary`
- Border radius: `--radius-sm`
- Padding: `--space-2` `--space-3`

### Card
- Background: `--color-wood-medium`
- Border: 1px solid `--color-wood-border`
- Border radius: `--radius-md`
- Hover: border becomes `--color-gold-primary`, slight translateY(-2px)

### Modal
- Overlay: `--color-overlay` fullscreen
- Content: `--color-wood-dark` background, `--color-gold-primary` border
- Border radius: `--radius-lg`
- Max width: 500px (default)
