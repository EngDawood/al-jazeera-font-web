# خط الجزيرة للويب — Al Jazeera Font Web

**[🇸🇦 اقرأ التوثيق بالعربية](./README.md)**

A community-maintained web package for the Al Jazeera Arabic font — one family, three weights. Drop a single `<link>` or CSS import into your project and start using the font immediately. Unlike a CDN-only wrapper, the font files **are** bundled in the npm package: the CSS uses relative URLs, so the same stylesheet works from npm, unpkg, jsDelivr (npm or GitHub) and your own hosting.

> The Al Jazeera font is designed and owned by **Tarek Atrissi Design** as an exclusive custom font for the Al Jazeera Network. See [NOTICE.md](./NOTICE.md) for the full license text embedded in the font files. This is a community package that provides a convenient CSS wrapper for web usage, modelled on [@dawod/thmanyah-font-web](https://www.npmjs.com/package/@dawod/thmanyah-font-web).

---

[![NPM Version](https://img.shields.io/npm/v/@dawod/al-jazeera-font-web)](https://www.npmjs.com/package/@dawod/al-jazeera-font-web)
[![npm downloads/month](https://img.shields.io/npm/dm/@dawod/al-jazeera-font-web?label=npm%20%2Fmonth)](https://www.npmjs.com/package/@dawod/al-jazeera-font-web)
[![jsDelivr npm hits](https://img.shields.io/jsdelivr/npm/hm/@dawod/al-jazeera-font-web?label=jsDelivr%20npm)](https://www.jsdelivr.com/package/npm/@dawod/al-jazeera-font-web)

---

## Quick Start

### CDN — no install needed

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dawod/al-jazeera-font-web/index.css" />
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/engdawood/al-jazeera-font-web@main/index.css" />
```

```html
<link rel="stylesheet" href="https://unpkg.com/@dawod/al-jazeera-font-web/index.css" />
```

### npm

```bash
npm install @dawod/al-jazeera-font-web
```

```js
import "@dawod/al-jazeera-font-web";
```

```css
@import "@dawod/al-jazeera-font-web";
```

---

## Font Family & Weights

| Family | CSS `font-family` | Weights |
|--------|-------------------|---------|
| **Al Jazeera** | `"Al Jazeera", sans-serif` | 300 · 400 · 700 |

| Weight | File | `font-weight` |
|--------|------|---------------|
| Light | `al-jazeera-Light.woff2` | 300 |
| Regular | `al-jazeera-Regular.woff2` | 400 |
| Bold | `al-jazeera-Bold.woff2` | 700 |

---

## Usage

```css
body {
  font-family: "Al Jazeera", sans-serif;
  font-weight: 400;
  direction: rtl;
}

h1 {
  font-family: "Al Jazeera", sans-serif;
  font-weight: 700;
}
```

```html
<p class="font-al-jazeera">Al Jazeera</p>
<p class="font-al-jazeera font-weight-light">300</p>
<p class="font-al-jazeera font-weight-regular">400</p>
<p class="font-al-jazeera font-weight-bold">700</p>
```

| Class | Value |
|-------|-------|
| `.font-al-jazeera` | `font-family: "Al Jazeera", sans-serif` |
| `.font-weight-light` | `font-weight: 300` |
| `.font-weight-regular` | `font-weight: 400` |
| `.font-weight-bold` | `font-weight: 700` |

**Live demo:** https://engdawood.github.io/al-jazeera-font-web/examples/demo.html

---

## License

The font is © Tarek Atrissi Design — an exclusive font for the Al Jazeera Network, usable and distributable only with written approval. Full text in [NOTICE.md](./NOTICE.md). The packaging code in this repository (CSS, docs, demo) is maintained by [@engdawood](https://github.com/engdawood) and may be reused freely.

## Acknowledgements

- **Tarek Atrissi Design** — designer and copyright holder of the Al Jazeera font (www.ArabicTypography.com).
- **[engdawood/thmanyah-font-web](https://github.com/engdawood/thmanyah-font-web)** — the upstream package this repository's structure, CSS pattern, workflows and docs are modelled on.
