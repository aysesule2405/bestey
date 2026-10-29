# beste yılmaz

Portfolio site for Beste Yılmaz: poems, prose, papers, and (soon) art. English and Turkish, light and dark.

Built with [Astro](https://astro.build). It is a static site, so it can be hosted for free on Vercel, Netlify, or GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the finished site to dist/
```

## Add a new piece

Create a file in `src/content/works/`, for example `src/content/works/new-poem.md`. The file name becomes the web address (`/works/new-poem`).

```md
---
title: "new poem"
kind: poem              # poem or prose
venue: "Journal Name"   # leave out if unpublished
issue: "#12"            # optional
venueUrl: "https://..." # optional link to the journal
date: "2026-11"         # year-month, or just the year
art: budgie             # optional picture beside the text: budgie, sunflower, nautilus, bosphorus
lines:                  # 2 to 4 short lines that will appear in the homepage spiral
  - "a line from the poem"
  - "another line"
---
The poem goes here, exactly as it should look.
Line breaks, blank lines and    indents    are kept.
```

For prose poems, add `form: prose` so the paragraphs wrap like prose. To add a footnote, put `---note---` on its own line after the text and write the note under it.

**About unpublished work:** many journals treat anything posted on a personal site as already published. For pieces you still want to send out, leave the text out (or post only a few lines) until they're accepted somewhere.

## Change the bio, CV, papers, or art

Everything that isn't a poem is in `src/site.ts`:

- `bio`: the about-page paragraphs, in English (`en`) and Turkish (`tr`)
- `education`, `honors`, `roles`: the CV sections
- `alsoIn`: publications that don't have their own page yet
- `papers`: add entries here. Put the PDFs in `public/papers/`
- `art`: add pieces here. Put the images in `public/art/` and give each one an `alt` description in both languages
- `show.art` / `show.papers`: set to `false` to hide that tab from the menu
- `email`: fill this in to show a contact address

Interface words like "works" or "about" are in `src/i18n.ts`, in both languages.

## Images

Photos of Beste are in `public/images/`. The illustrations are public-domain plates from Wikimedia Commons:

- budgerigar, hand-coloured lithograph (1869)
- sunflower, Basilius Besler, *Hortus Eystettensis* (1713 edition)
- nautilus etching, Rijksmuseum (CC0)
- map of Constantinople and the Bosphorus, from *Constantinople and the Scenery of the Seven Churches of Asia Minor* (1839)

`nautilus-ink.webp` and `bosphorus-ink.webp` contain only the ink lines. The site recolours them to fit light and dark mode.
