# INK SOUL — Tattoo & Piercing Studio Landing Page

A dark-themed responsive landing page for **INK SOUL**, a tattoo and piercing studio in Wrocław. Built with semantic HTML5, custom CSS, and vanilla JavaScript with bilingual **Polish / English (`PL / EN`)** switching.

---

## Features

- **Bilingual Switcher (`PL / EN`)**: Instant UI translation across navigation, hero, services, gallery captions/copy, artists, reviews, FAQ, and booking form, persisted in `localStorage`.
- **Interactive Portfolio Gallery & Lightbox**: Style filters (`Realism`, `Graphic`, `Minimalism`, `Blackwork`, `Oldschool`) paired with an accessible modal lightbox supporting mouse, on-screen controls, arrow keys, `Escape` closing, and focus trapping/restoration.
- **Artists Showcase & Studio Workflow**: Dedicated cards for studio artists (`Adam Muś`, `Kordian Betcher`, `Klaudia Naglik`), animated metric counters, and a 4-step session process.
- **Accessible FAQ Accordion & Booking Form**: Expandable FAQ items synced with `aria-expanded`, client-side validation with toast notifications, and an embedded studio map.
- **Responsive & Accessible**: Skip link navigation, visible `:focus-visible` states, `prefers-reduced-motion` support, semantic `<main>` landmarks, and clean mobile drawer navigation down to `320px`.

---

## Project Structure

```text
InkSoul/
├── index.html        # Single-page studio layout, gallery, FAQ, booking & lightbox modal
├── css/
│   └── style.css     # Dark-theme design system, animations, lightbox & responsive rules
├── js/
│   └── script.js     # PL/EN i18n dictionary, filters, lightbox, FAQ accordion & form handler
├── images/           # Studio logo, artist portraits, and optimized tattoo gallery photography
├── LICENSE
└── README.md
```

---

## Getting Started

No build step or runtime dependencies are required.

```bash
git clone https://github.com/CorvusDemon/InkSoul.git
cd InkSoul
```

Open `index.html` directly in your browser, or run a lightweight local static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, responsive breakpoints)
- Vanilla JavaScript (ES6+)
- Font Awesome & Google Fonts (`Montserrat`, `Open Sans`)

---

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
