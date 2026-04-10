# Behaviors — jaimeludena.com

## Interaction Model
- **Overall:** Mostly static/click-driven. No scroll-driven animations detected.
- **Smooth scroll library:** None detected (Squarespace native scrolling)

## Portfolio Grid Hover
- **Trigger:** Mouse hover over grid item
- **State A (default):** Image fully visible, no overlay
- **State B (hover):** Dark overlay (rgba(0,0,0,0.7)) covers image, white text centered showing project title and client name
- **Transition:** opacity 0 → 1, duration ~0.3s ease
- **Text:** Project title (e.g., "Meet Marina Prieto") + client (e.g., "JCDecaux") in lowercase

## Navigation
- **Behavior:** Static links, no hover animations beyond underline or opacity change
- **Active state:** Current page link may be underlined or slightly different opacity

## Grid Layout
- **Desktop (≥1024px):** 3 columns, gap ~50px
- **Tablet (768px):** 2 columns, gap ~20-30px
- **Mobile (390px):** 2 columns, gap ~10-15px
- **Item size:** Grid is square-ratio (400px base size per Squarespace config)

## Page Navigation
- Click on portfolio item → project detail page
- Click nav links → respective page

## No Detected
- Parallax
- Scroll-triggered animations
- Auto-play carousels
- Modal/lightbox (though Squarespace has zoom capability)
- Dark mode
