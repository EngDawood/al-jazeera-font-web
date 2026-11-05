<div dir="rtl" align="right">

# خط الجزيرة للويب — Al Jazeera Font Web

[![NPM Version](https://img.shields.io/npm/v/@dawod/al-jazeera-font-web)](https://www.npmjs.com/package/@dawod/al-jazeera-font-web)
[![npm downloads/month](https://img.shields.io/npm/dm/@dawod/al-jazeera-font-web?label=npm%20%2Fmonth)](https://www.npmjs.com/package/@dawod/al-jazeera-font-web)
[![jsDelivr npm hits](https://img.shields.io/jsdelivr/npm/hm/@dawod/al-jazeera-font-web?label=jsDelivr%20npm)](https://www.jsdelivr.com/package/npm/@dawod/al-jazeera-font-web)
[![Font Weights](https://img.shields.io/badge/weights-300%20·%20400%20·%20700-orange)](#عائلة-الخط-والأوزان)

**حزمة مجتمعية لخط الجزيرة العربي للويب — عائلة واحدة، ثلاثة أوزان.** أضف ملف CSS واحد لمشروعك وابدأ باستخدام خط الجزيرة فورًا: خفيف (300)، عادي (400)، عريض (700).

> **ملاحظة:** خط الجزيرة من تصميم وملكية Tarek Atrissi Design، وهو خط حصري لشبكة الجزيرة — انظر [NOTICE.md](./NOTICE.md) لنص الترخيص الكامل المضمّن داخل ملفات الخط نفسها. هذا المستودع حزمة مجتمعية تعيد تجميع الخط لتسهيل استخدامه على الويب عبر npm و CDN، على نفس نمط حزمة [خط ثمانية للويب](https://github.com/engdawood/thmanyah-font-web).

**[🇬🇧 Read in English](./README.en.md)**

## 🌍 جرّب أوزان الخط أونلاين

🔗 [عرض خط الجزيرة](https://engdawood.github.io/al-jazeera-font-web/examples/demo.html)

---

## تثبيت سريع

### الطريقة ١ — CDN (الأسرع)

<div dir="ltr" align="left">

**jsDelivr (من npm):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@dawod/al-jazeera-font-web/index.css"
/>
```

**jsDelivr (من GitHub):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/engdawood/al-jazeera-font-web@main/index.css"
/>
```

**unpkg:**

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@dawod/al-jazeera-font-web/index.css"
/>
```

</div>

ملفات CSS تستخدم روابط نسبية لملفات الخطوط، لذلك تعمل من أي مصدر — npm أو GitHub أو استضافتك الخاصة — بدون تعديل.

### الطريقة ٢ — مدير الحزم

<div dir="ltr" align="left">

```bash
npm install @dawod/al-jazeera-font-web
```

```css
/* CSS */
@import "@dawod/al-jazeera-font-web";
```

```js
// JS / TS
import "@dawod/al-jazeera-font-web";
```

</div>

### الطريقة ٣ — التحميل اليدوي

انسخ مجلد `fonts/` وملف `index.css` لمشروعك، ثم اربطه في صفحتك:

<div dir="ltr" align="left">

```html
<link rel="stylesheet" href="path/to/index.css" />
```

</div>

---

## 🔤 عائلة الخط والأوزان

<div dir="ltr" align="left">

| Family | CSS `font-family` | Weights |
| --- | --- | --- |
| **Al Jazeera** | `"Al Jazeera", sans-serif` | 300 · 400 · 700 |

</div>

| الوزن | الملف | `font-weight` |
| --- | --- | --- |
| Light | `al-jazeera-Light.woff2` | 300 |
| Regular | `al-jazeera-Regular.woff2` | 400 |
| Bold | `al-jazeera-Bold.woff2` | 700 |

---

## 💡 أمثلة الاستخدام

<div dir="ltr" align="left">

```css
body {
  font-family: "Al Jazeera", sans-serif;
  font-weight: 400;
  direction: rtl;
}

h1, h2, h3 {
  font-family: "Al Jazeera", sans-serif;
  font-weight: 700;
}
```

```html
<p class="font-al-jazeera">نص بخط الجزيرة</p>
<p class="font-al-jazeera font-weight-light">خفيف 300</p>
<p class="font-al-jazeera font-weight-regular">عادي 400</p>
<p class="font-al-jazeera font-weight-bold">عريض 700</p>
```

</div>

---

## الترخيص

الخط © Tarek Atrissi Design — خط حصري لشبكة الجزيرة، يُستخدم ويُوزّع فقط بموافقة كتابية. النص الكامل في [NOTICE.md](./NOTICE.md). كود التغليف في هذا المستودع (CSS والتوثيق والعرض) من [@engdawood](https://github.com/engdawood) ويمكن إعادة استخدامه بحرية.

</div>

## Acknowledgements

- **Tarek Atrissi Design** — designer and copyright holder of the Al Jazeera font (www.ArabicTypography.com).
- **[engdawood/thmanyah-font-web](https://github.com/engdawood/thmanyah-font-web)** — the upstream package this repository's structure, CSS pattern, workflows and docs are modelled on.
