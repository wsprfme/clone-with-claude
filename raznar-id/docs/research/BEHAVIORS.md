# raznar.id — Behaviors (extracted from live site scripts)

## Global
- **AOS** (Animate On Scroll): `AOS.init({ duration: 1000, easing: 'ease-in-out-quart', once: true })`. Elements carry `data-aos="fade-up"` etc. — keep attributes verbatim.
- Font: Inter. Body: `bg-gray-950` (rgb(3,7,18)), white text.
- No smooth-scroll library (no Lenis).

## Header (`#site-header`)
- `fixed transition-all duration-500 w-full z-50 backdrop-blur`
- At `scrollY <= 50`: `bg-transparent`
- At `scrollY > 50` **or mobile menu open**: add `bg-violet-950/80 shadow-2xl border-b border-white/10`, remove `bg-transparent`
- Mobile: hamburger toggles `#mobile-menu` (hidden class), swaps hamburger/close icons, locks body scroll (`overflow:hidden`), accordion sub-menus (`.accordion-trigger` toggles `.accordion-content` hidden/flex + chevron `rotate-180`; only one open at a time)
- Desktop dropdowns: CSS `group`-hover based (in markup)

## Hero carousel (`.hero-swiper`)
- Swiper: `effect: 'fade', fadeEffect: { crossFade: true }, slidesPerView: 1, autoplay: { delay: 5000 }, pagination: { clickable: true }`
- 9 slides. Hero image bobs: `animate-[updown_2s_ease-in-out_infinite_alternate-reverse]`
- Skeleton (`#hero-skeleton`) fades out on init (opacity 0 over 500ms then display:none); swiper fades in (opacity-0 → opacity-100)
- Section bg: `.hero-bg` = `linear-gradient(45deg,#7c3aede6,#7c3aede6), url(/hero-bg.avif) 50%/cover no-repeat !important`

## Testimonials (`.testimonials-swiper`)
- Swiper: `slidesPerView: 1, spaceBetween: 40, autoplay: { delay: 5000 }, pagination clickable, breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }`

## Clients marquee
- CSS animation `infinite-scroll 40s linear infinite` (`translate(0) → translate(-100%)`), list duplicated (aria-hidden copy) for seamless loop.

## Card border glow (products/features cards)
- `.border-highlighter`: radial-gradient follows mouse via `--x`/`--y` CSS vars → needs an `onMouseMove` handler setting those vars from cursor position relative to element.
- `.border-highlighter-container:hover:before`: rotating conic-gradient border (pure CSS, already in globals.css).

## Keyframes (already in globals.css)
updown, zoomin, zoom-in-out, shimmer, infinite-scroll, border-rotate, moon-float, pulse-glow.

## Swiper pagination bullet styles: in globals.css.
