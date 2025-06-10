# NeoAgen Brand Colors

## Primary Palette

### Primary Blue
- **Hex:** `#0047ab`
- **RGB:** `rgb(0, 71, 171)`
- **HSL:** `hsl(215, 100%, 34%)`
- **Usage:** Main brand color, primary emblem, primary buttons

### Light Blue / Cyan
- **Hex:** `#13aaff`
- **RGB:** `rgb(19, 170, 255)`
- **HSL:** `hsl(202, 100%, 54%)`
- **Usage:** Secondary accent, highlights, gradients

## Neutral Palette

### Dark Navy
- **Hex:** `#0d153f`
- **RGB:** `rgb(13, 21, 63)`
- **HSL:** `hsl(230, 66%, 15%)`
- **Usage:** Dark text, navigation backgrounds

### Pure White  
- **Hex:** `#ffffff`
- **RGB:** `rgb(255, 255, 255)`
- **Usage:** Light backgrounds, reversed text on dark surfaces

### Pure Black
- **Hex:** `#000000` 
- **RGB:** `rgb(0, 0, 0)`
- **Usage:** High contrast text, monochrome applications

## Color Usage Guidelines

### Text Colors
- **Primary text on light:** `#0d153f` (Dark Navy)
- **Primary text on dark:** `#ffffff` (White)
- **Secondary text:** `#0047ab` (Primary Blue)
- **Links/Interactive:** `#13aaff` (Light Blue)

### Background Colors
- **Primary background:** `#ffffff` (White)
- **Secondary background:** `#0d153f` (Dark Navy) 
- **Accent background:** `#0047ab` (Primary Blue)

### Accessibility

All color combinations meet WCAG 2.1 AA standards:

| Foreground | Background | Contrast Ratio | Rating |
|------------|------------|----------------|---------|
| `#0d153f` | `#ffffff` | 12.3:1 | AAA |
| `#ffffff` | `#0d153f` | 12.3:1 | AAA |
| `#ffffff` | `#0047ab` | 4.7:1 | AA |
| `#0047ab` | `#ffffff` | 4.7:1 | AA |

## CSS Variables

```css
:root {
  /* Primary Colors */
  --neoagen-blue: #0047ab;
  --neoagen-cyan: #13aaff;
  
  /* Neutrals */
  --neoagen-navy: #0d153f;
  --neoagen-white: #ffffff;
  --neoagen-black: #000000;
  
  /* Semantic Colors */
  --neoagen-primary: var(--neoagen-blue);
  --neoagen-secondary: var(--neoagen-cyan);
  --neoagen-text-dark: var(--neoagen-navy);
  --neoagen-text-light: var(--neoagen-white);
  --neoagen-background: var(--neoagen-white);
}
```

## Tailwind CSS Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        neoagen: {
          blue: '#0047ab',
          cyan: '#13aaff', 
          navy: '#0d153f',
          white: '#ffffff',
          black: '#000000'
        }
      }
    }
  }
}
```

## Sass Variables

```scss
// Brand Colors
$neoagen-blue: #0047ab;
$neoagen-cyan: #13aaff;
$neoagen-navy: #0d153f;
$neoagen-white: #ffffff;
$neoagen-black: #000000;

// Semantic Variables
$primary-color: $neoagen-blue;
$secondary-color: $neoagen-cyan;
$text-color-dark: $neoagen-navy;
$text-color-light: $neoagen-white;
$background-color: $neoagen-white;
```