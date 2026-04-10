# Page Topology — jaimeludena.com

## Site Structure
- **/** — Work (portfolio grid, default/home)
- **/about** — About page
- **/awards** — Awards page
- **/personal-projects** — Personal projects listing
- **/[project-slug]** — Individual project pages

## Global Layout
- White background (#ffffff / #fff)
- Black text (#000 / near-black)
- No decorative colors
- All text is lowercase
- Font: System sans-serif / Helvetica Neue (Squarespace default)
- Max content width: ~1200–1400px
- Navigation at top, fixed or static

## Navigation (Header)
- Left: "jaime ludeña" (site name/logo)
- Right: "_work", "_about", "_awards", "_personal projects"
- Position: Top of page, full width
- Typography: lowercase, small size (~12–14px)
- No borders, transparent background

## Work Page (/)
- Full-width portfolio grid
- 3 columns desktop (≥1024px), 2 columns tablet (≥640px), 2 columns mobile
- Each item: Image + hover overlay showing project title + client
- Grid gap: ~50px (desktop), ~20–30px mobile
- Images: square or near-square aspect ratio (roughly 1:1)
- Hover: dark overlay (rgba(0,0,0,0.7)) with white text centered

## About Page
- Two-column or single-column layout
- Bio text (quirky, lowercase)
- Contact info (email, phone)
- Social links (LinkedIn, Instagram)
- Work history timeline

## Awards Page
- Long list of awards organized by festival
- Simple text-based layout
- Rankings at top

## Personal Projects Page
- Grid or list of personal/experimental projects
- Links to sub-pages

## Interaction Model
- Work grid: hover-driven (image overlay on hover)
- Navigation: click-driven links
- No scroll-driven animations detected
- No smooth scroll library
- No dark mode

## Z-Index Layers
1. Body content (base)
2. Fixed navigation (if sticky)
3. Hover overlays on grid items
