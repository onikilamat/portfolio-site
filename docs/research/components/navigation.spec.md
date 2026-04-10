# Navigation Specification

## Overview
- **Target file:** `src/components/Navigation.tsx`
- **Interaction model:** static, click-driven links
- **Position:** Top of every page, fixed or static

## DOM Structure
```
<header>
  <a href="/">jaime ludeña</a>
  <nav>
    <a href="/">_work</a>
    <a href="/about">_about</a>
    <a href="/awards">_awards</a>
    <a href="/personal-projects">_personal projects</a>
  </nav>
</header>
```

## Computed Styles

### Header container
- display: flex
- justifyContent: space-between
- alignItems: center
- padding: 20px 30px (desktop), 15px 20px (mobile)
- backgroundColor: #ffffff
- width: 100%
- position: static (or sticky top-0 with z-index 50)

### Site name link (left)
- fontFamily: system-ui / Helvetica Neue / sans-serif
- fontSize: 13px–14px
- fontWeight: 400
- color: #000000
- textDecoration: none
- textTransform: lowercase
- letterSpacing: normal

### Nav links (right)
- display: flex
- gap: 20–24px
- fontFamily: same as above
- fontSize: 13px–14px
- fontWeight: 400
- color: #000000
- textDecoration: none
- textTransform: lowercase

### Hover state (nav links)
- color: #000 (same, or slightly reduced opacity ~0.6)
- transition: opacity 0.2s ease

## Text Content (verbatim)
- Site name: "jaime ludeña"
- Nav items: "_work", "_about", "_awards", "_personal projects"

## Responsive Behavior
- **Desktop (1440px):** Horizontal flex row, items on right
- **Mobile (390px):** Stack vertically OR compress into smaller layout
  - Site name stays top-left
  - Nav links may stack below or remain inline (site is simple enough to stay inline)

## Notes
- All text in lowercase — never capitalize
- The underscore prefix ("_work") is intentional branding
