# Jay Prakash Agro — Website

A fast, single-page brochure site for the cashew business: type-led design in the
brand's green & white, one purple passage for packaging, and hand-drawn cashew
accents. Every call-to-action is one tap to WhatsApp, call, or email.

> A scroll-driven **3D version** was built earlier and is **parked**, not deleted —
> see "Parked 3D work" below. The live site is the 2D one described here.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host (Vercel, Netlify,
or your domain's existing hosting). No server needed.

## Editing content (no coding)

Almost everything you'd want to change lives in **one file**:

- **`src/data/content.js`** — business name, tagline, address, all three phone
  numbers, email, Instagram, the cashew grades, the 6 process stages, packaging
  sizes, the "why us" points, and the SEO title/description. Change the text here
  and it updates everywhere on the page.
  - ⚠️ The **retail pouch sizes** (100 g / 250 g / 500 g / 1 kg) are sensible
    defaults — confirm the sizes you actually sell and edit that list.
- **`index.html`** — the browser-tab title, social-share preview text, and fonts.
- **`src/index.css`** — brand colours are CSS variables at the very top
  (`--green`, `--purple`, `--cream`, …). Swap in exact hex codes once you have the
  logo file to sample from.

## How the page is built

- `src/App.jsx` — the running order of sections.
- `src/components/`
  - `Navbar.jsx`, `Footer.jsx`
  - `Sketch.jsx` — the hand-drawn cashew mark, underline, and pouch (the design
    signature; SVG "roughen" filter makes clean lines look inked by hand).
  - `Icons.jsx` — inline SVG icons (WhatsApp, phone, mail, etc.).
- `src/components/sections/` — `Hero`, `Stats`, `GradesSection`, `ProcessSection`,
  `PackagingSection`, `AboutSection`, `ContactSection`.
- `src/hooks/useReveal.js` — fades sections in as you scroll (respects
  "reduce motion" accessibility settings).
- `src/lib/links.js` — builds the `wa.me` / `tel:` / `mailto:` / Maps links from
  the phone numbers in `content.js`.
- `public/favicon.svg` — the little green cashew browser-tab icon.

Fonts: **Fraunces** (display serif) + **Hanken Grotesque** (body), loaded from
Google Fonts in `index.html`.

## Parked 3D work (kept for later, not used by the live site)

These files are still on disk but are **not imported** anywhere, so they add
nothing to the built site:

- `src/components/Scene3D.jsx` — the scroll-driven 3D animation
- `src/hooks/useScrollProgress.js`
- `src/assets/cashew.glb`, `pouch.glb`, `bucket.glb` — the 3D models
- `src/components/sections/PackingSection.jsx`, `BulkSection.jsx` — earlier sections

The 3D libraries (`three`, `@react-three/*`, `gsap`) are still in `package.json`
but, because nothing imports them, they're **excluded from the production build**.

## To do / confirm

- Confirm the retail pouch sizes in `content.js`.
- Drop in exact brand hex codes once the logo file is available.
- Optional: a real product photo for the packaging section and a 1200×630
  share image (`og:image`) for nicer WhatsApp link previews.
