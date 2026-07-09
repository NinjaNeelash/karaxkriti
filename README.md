# Velocity Premium Static Website

A fully static, premium interactive personal website built with HTML5, CSS3 and vanilla JavaScript.

## Structure

- `index.html` — main page entry point
- `css/style.css` — core layout and styling
- `css/animations.css` — keyframe animations and motion effects
- `css/responsive.css` — responsive breakpoints for mobile and tablet
- `js/content.js` — editable content stored in a single data object
- `js/theme.js` — theme switcher and saved preferences
- `js/animations.js` — loader animation and page motion helpers
- `js/main.js` — dynamic section rendering and interaction setup
- `assets/images/` — place your four PNG images here

## Usage

1. Place the provided PNG images in `assets/images/`.
2. Open `index.html` in any browser.
3. Update `js/content.js` to change text, labels, sections, gallery entries or theme variants.

## Notes

- All page content is generated dynamically from `portfolio` data in `js/content.js`.
- The site is designed to work without build tools, frameworks, or external JavaScript libraries.
- The theme system uses CSS variables and stores the selected theme in `localStorage`.
