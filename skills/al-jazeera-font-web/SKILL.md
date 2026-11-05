---
name: al-jazeera-font-web
description: Use the Al Jazeera Arabic font on the web via the @dawod/al-jazeera-font-web package — CDN link, npm import, weights 300/400/700, and RTL checklist.
---

# Al Jazeera Font Web

One family — `"Al Jazeera"` — three weights: Light 300, Regular 400, Bold 700.

## Add it

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dawod/al-jazeera-font-web/index.css" />
```

or

```bash
npm install @dawod/al-jazeera-font-web
```

```js
import "@dawod/al-jazeera-font-web";
```

The CSS uses relative font URLs — never hand-write `@font-face` rules or absolute CDN font URLs; link the package stylesheet as-is.

## Use it

```css
body { font-family: "Al Jazeera", sans-serif; font-weight: 400; direction: rtl; }
```

Utility classes: `.font-al-jazeera`, `.font-weight-light` (300), `.font-weight-regular` (400), `.font-weight-bold` (700).

## RTL checklist

- Set `lang="ar"` and `dir="rtl"` for Arabic content.
- The CSS already sets `font-display: swap` and Arabic + Latin `unicode-range`.

## Verify

1. DevTools → Network → filter `woff2`: requests return 200.
2. Computed `font-family` is `"Al Jazeera"`, not the fallback.
3. Switching 300 → 700 visibly changes rendering; if not, a `@font-face` block is missing.

## License warning

The font is © Tarek Atrissi Design, exclusive to Al Jazeera Network, distribution only with written approval — see the package's NOTICE.md before redistributing the font files.
