# 🎨 Quick Color Reference - Magical Fantasy Theme

## At-a-Glance Palette

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MAGIC PURPLE (30%)                Primary Brand
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
█████ #6D4FFF  Base        - Borders, branding
█████ #9B7FFF  Light       - Secondary accents
█████ #C4B5FF  Lighter     - Subtle highlights
█████ #5538E6  Dark        - Text on light

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GOLD & YELLOW (10%)          CTAs & Highlights
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
█████ #FFD54F  Gold        - CTAs, badges ⭐
█████ #FFE699  Gold Light  - Hover states
█████ #E6BC2F  Gold Dark   - Gradients
█████ #FEFF4F  Yellow      - Magical glow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STONE GRAY (60%)                    Base/Text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
█████ #6B6780  Dark        - Backgrounds, body
█████ #8A8599  Medium      - Secondary text
█████ #B8B5C4  Light       - Light text on dark
█████ #E5E4E8  Lighter     - Headers on dark

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOSS/SAGE (Decorative)         Natural Accent
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
█████ #7F8067  Sage        - Nature elements
█████ #A5A68F  Sage Light  - Soft touches
```

---

## Copy-Paste CSS Variables

```css
:root {
  /* Primary - Magic Purple */
  --color-primary: #6D4FFF;
  --color-primary-light: #9B7FFF;
  --color-primary-lighter: #C4B5FF;
  --color-primary-dark: #5538E6;
  
  /* Accent - Gold */
  --color-gold: #FFD54F;
  --color-gold-light: #FFE699;
  --color-gold-dark: #E6BC2F;
  
  /* Highlight - Yellow */
  --color-yellow: #FEFF4F;
  
  /* Neutral - Stone Gray */
  --color-neutral-dark: #6B6780;
  --color-neutral-medium: #8A8599;
  --color-neutral-light: #B8B5C4;
  --color-neutral-lighter: #E5E4E8;
  
  /* Secondary - Sage */
  --color-sage: #7F8067;
  --color-sage-light: #A5A68F;
}
```

---

## Tailwind Config Extension

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        magic: {
          DEFAULT: '#6D4FFF',
          light: '#9B7FFF',
          lighter: '#C4B5FF',
          dark: '#5538E6',
        },
        gold: {
          DEFAULT: '#FFD54F',
          light: '#FFE699',
          dark: '#E6BC2F',
        },
        highlight: {
          yellow: '#FEFF4F',
        },
        stone: {
          dark: '#6B6780',
          medium: '#8A8599',
          light: '#B8B5C4',
          lighter: '#E5E4E8',
        },
        sage: {
          DEFAULT: '#7F8067',
          light: '#A5A68F',
        },
      },
    },
  },
};
```

---

## Common Combinations

### ✅ High Contrast (AAA)
| Foreground | Background | Use Case |
|------------|------------|----------|
| #6B6780 | White | Body text |
| #FFD54F | #6B6780 | CTA button |
| #E5E4E8 | #6B6780 | Light text on dark |

### ⭐ Brand Combos
| Primary | Accent | Use Case |
|---------|--------|----------|
| #6D4FFF | #FFD54F | Logo, badge |
| #6D4FFF | #FEFF4F | Magical highlight |
| #6B6780 | #6D4FFF | Card + border |

### 🎨 Gradients
```css
/* Gold Shimmer */
linear-gradient(135deg, #FFD54F 0%, #FEFF4F 50%, #FFD54F 100%)

/* Purple Fade */
linear-gradient(180deg, #6D4FFF 0%, #5538E6 100%)

/* Magical Glow */
radial-gradient(circle, rgba(254,255,79,0.2) 0%, transparent 70%)
```

---

## Quick Decision Tree

```
┌─ WHAT ARE YOU STYLING? ─────────────────────────┐
│                                                   │
├─ CTA Button? ────────────► Use #FFD54F (Gold)   │
├─ Badge/Star Rating? ─────► Use #FFD54F (Gold)   │
├─ Border/Frame? ──────────► Use #6D4FFF (Purple) │
├─ Background? ────────────► Use #6B6780 (Gray)   │
├─ Body Text? ─────────────► Use #E5E4E8 (Light)  │
├─ Heading? ───────────────► Use #6D4FFF (Purple) │
└─ Decorative? ────────────► Use #7F8067 (Sage)   │
                                                    │
        60% Gray + 30% Purple + 10% Gold           │
└───────────────────────────────────────────────────┘
```

---

## Copy-Paste Glow Effects

```css
/* Purple Magical Glow */
box-shadow: 0 0 20px rgba(109, 79, 255, 0.3),
            0 0 40px rgba(109, 79, 255, 0.1);

/* Gold CTA Glow */
box-shadow: 0 4px 20px rgba(255, 213, 79, 0.5),
            0 0 40px rgba(254, 255, 79, 0.2);

/* Hover Enhanced Glow */
box-shadow: 0 6px 30px rgba(255, 213, 79, 0.7),
            0 0 50px rgba(254, 255, 79, 0.3);

/* Subtle Card Shadow */
box-shadow: 0 10px 30px rgba(107, 103, 128, 0.3),
            0 0 20px rgba(109, 79, 255, 0.1);
```

---

## RGB & RGBA Values

```javascript
// For JavaScript/React inline styles
const colors = {
  primary: 'rgb(109, 79, 255)',      // #6D4FFF
  gold: 'rgb(255, 213, 79)',         // #FFD54F
  yellow: 'rgb(254, 255, 79)',       // #FEFF4F
  neutral: 'rgb(107, 103, 128)',     // #6B6780
  sage: 'rgb(127, 128, 103)',        // #7F8067
  
  // With opacity
  primarySubtle: 'rgba(109, 79, 255, 0.1)',
  yellowGlow: 'rgba(254, 255, 79, 0.2)',
  neutralOverlay: 'rgba(107, 103, 128, 0.94)', // F0 in hex
};
```

---

## OKLCH Values (Modern CSS)

```css
/* For supporting browsers */
--color-primary: oklch(58.5% 0.235 283);     /* #6D4FFF */
--color-gold: oklch(86% 0.12 92);            /* #FFD54F */
--color-yellow: oklch(98% 0.18 102);         /* #FEFF4F */
--color-neutral: oklch(51% 0.03 283);        /* #6B6780 */
--color-sage: oklch(56% 0.03 105);           /* #7F8067 */
```

---

## Icon Guidelines

| Icon Type | Color | Example |
|-----------|-------|---------|
| Star rating | #FFD54F (filled) | ⭐ |
| Feature icons | #FFD54F | 🛡️ Shield, 👥 Users |
| Scroll indicator | #FFD54F | ↓ Arrow |
| Decorative | #6D4FFF | 🎲 Dice |
| Emoji | Natural colors | 🎲 📘 ⚔️ |

---

## Remember the 60-30-10 Rule!

```
████████████████████████████████████████████████████████████ 60% Gray
█████████████████████████████████ 30% Purple
█████████████████ 10% Gold/Yellow
```

**Gray** = Trust & Base  
**Purple** = Magic & Brand  
**Gold** = Action & Reward  

---

**Quick Tip:** When in doubt, use gray for base, purple for borders, and gold ONLY for CTAs!

