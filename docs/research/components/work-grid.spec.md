# Work Grid Specification

## Overview
- **Target file:** `src/components/WorkGrid.tsx`
- **Screenshot:** `docs/design-references/work-grid.png`
- **Interaction model:** hover-driven overlays on grid items

## DOM Structure
```
<main>
  <div class="grid"> <!-- 3-col desktop, 2-col tablet+mobile -->
    <a href="/[slug]" class="grid-item">
      <div class="relative">
        <img src="..." alt="..." />
        <div class="overlay"> <!-- appears on hover -->
          <span class="project-title">project title</span>
          <span class="project-client">client name</span>
        </div>
      </div>
    </a>
    ...
  </div>
</main>
```

## Computed Styles

### Grid container
- display: grid
- gridTemplateColumns: repeat(3, 1fr) at ≥1024px
- gridTemplateColumns: repeat(2, 1fr) at <1024px
- gap: 50px (desktop), 20px (mobile)
- padding: 30px (desktop), 20px (mobile)
- maxWidth: 100%

### Grid item (anchor)
- display: block
- position: relative
- overflow: hidden
- cursor: pointer
- textDecoration: none

### Image
- width: 100%
- aspectRatio: 1 / 1 (square)
- objectFit: cover
- display: block

### Overlay (hidden by default, shown on hover)
- position: absolute
- top: 0, right: 0, bottom: 0, left: 0
- backgroundColor: rgba(0, 0, 0, 0.7)
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- opacity: 0 (default) → 1 (hover)
- transition: opacity 0.3s ease

### Overlay text
- color: #ffffff
- fontFamily: system-ui / Helvetica Neue
- fontSize: 13px–14px
- fontWeight: 400
- textAlign: center
- textTransform: lowercase
- padding: 16px

## States & Behaviors

### Hover state
- **Trigger:** mouseenter on grid item
- **State A (default):** overlay opacity: 0 (invisible)
- **State B (hover):** overlay opacity: 1 (visible with dark bg + white text)
- **Transition:** opacity 0.3s ease

## Assets
All images from Squarespace CDN. Use downloaded versions from public/images/.
Fall back to a neutral dark (#111) background placeholder if image unavailable.

## Project Data
```
[
  { title: "meet marina prieto", client: "JCDecaux", slug: "meetmarinaprieto", image: "/images/meet-marina-prieto.jpg" },
  { title: "alcaraz signs", client: "netflix", slug: "the-alcaraz-signature-netflix", image: "/images/alcaraz-signs.jpeg" },
  { title: "starring bars", client: "heineken", slug: "starring-bars-heineken", image: "/images/starring-bars.png" },
  { title: "play no dew", client: "mountain dew", slug: "play-no-dew", image: null },
  { title: "laws under attack", client: "international red cross", slug: "laws-under-attack", image: null },
  { title: "ghost campaign", client: "burger king", slug: "ghost-campaign", image: null },
  { title: "safetynovela", client: "philippine airlines", slug: "safetynovela", image: null },
  { title: "the king of stream", client: "burger king", slug: "the-king-of-stream", image: null },
  { title: "the menu court", client: "burger king", slug: "the-menu-court", image: null },
  { title: "the truth is out there", client: "netflix", slug: "the-truth-is-out-there", image: null },
  { title: "the press concert", client: "asuncionico festival", slug: "the-press-concert", image: null },
  { title: "who's watching?", client: "netflix", slug: "whos-watching", image: null },
  { title: "trust bars", client: "heineken", slug: "trust-bars-heineken", image: null },
  { title: "heinz couture", client: "heinz", slug: "heinz-couture", image: null },
  { title: "twitter dad", client: "twitter", slug: "twitter-dad", image: null },
  { title: "ubeetch", client: "heetch", slug: "ubeetch", image: null },
  { title: "the face of 10", client: "dove", slug: "the-face-of-10", image: null },
  { title: "the perfect christmas ad", client: "twitter", slug: "the-perfect-christmas-ad", image: null },
  { title: "bzrp meal reveal", client: "burger king", slug: "bzrp-meal-reveal-burger-king", image: "/images/bzrp-meal-reveal.jpg" },
  { title: "just can't wait", client: "milka", slug: "just-cant-wait", image: null },
  { title: "gas stations", client: "burger king", slug: "gas-stations", image: null },
]
```

## Text Content (verbatim)
All project names and clients as listed above. All lowercase.

## Responsive Behavior
- **Desktop (1440px):** 3-column grid, 50px gap
- **Tablet (768px):** 2-column grid, 20-30px gap
- **Mobile (390px):** 2-column grid, 10-15px gap
