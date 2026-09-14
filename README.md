# Mutsurgical Website

A static 5-page business website for Mutsurgical (Surgical, Dental, Orthopedic, Beauty & Veterinary instruments manufacturer/exporter). Plain HTML/CSS/JS — no build step, no dependencies.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `products.html` — Product categories
- `certifications.html` — Certifications (placeholders — see note below)
- `contact.html` — Contact & quote request form

## Before going live — replace placeholders
Search the files for text in `[ SQUARE BRACKETS ]` and fill in your real details:
- Company email, phone/WhatsApp, and address (in every page's footer, and in `contact.html`)
- The `mailto:` address in `js/main.js` (quote form target)
- Certification names/numbers in `certifications.html` — only publish a certificate claim you can actually provide proof of
- Founding year and milestones in `about.html`
- Product lists in `products.html` — these are representative examples; replace with your actual catalogue/reference numbers

## Preview locally
No build tools needed. From this folder, run a simple local server and open the printed URL:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly by double-clicking also works, but a local server avoids minor browser quirks.)

## Deploy
Any static host works — no build step required:
- **GitHub Pages**: push this repo, enable Pages in repo settings (root folder).
- **Netlify / Vercel**: drag-and-drop the folder, or connect the repo.
- **Traditional hosting (cPanel, etc.)**: upload all files via FTP to your `public_html` folder.

## Notes
- Fonts load from Google Fonts (`Inter`); no other external dependencies.
- All icons are inline SVG — no image files required, nothing to break if hosted anywhere.
- The quote form on `contact.html` opens the visitor's email client (no backend). For a database-backed form, swap in a form service (e.g. Formspree) or a small backend later.
