# raznar.id — Page Topology

Single landing page, dark theme, top→bottom:

1. **Header** — fixed overlay, z-50. Source: `components/header.html` → `src/components/Header.tsx` (client)
2. **Hero** — `section#hero`, purple gradient bg, Swiper fade carousel, 9 slides. Source: `components/hero.html` → `src/components/Hero.tsx` (client)
3. **Products** — `section.bg-gray-900`, "Produk Kami", grid of 21 icon cards with border-glow hover. Source: `components/products.html` → `src/components/Products.tsx` (client, mouse-follow)
4. **Features** — "Apa yang Membuat Kami Terbaik?", 3 cards. Source: `components/features.html` → `src/components/Features.tsx` (client, mouse-follow)
5. **Testimonials** — `section.bg-gray-900.my-16`, "Apa Kata Mereka?", Swiper 1/2/3-up. Source: `components/testimonials.html` → `src/components/Testimonials.tsx` (client)
6. **Clients** — "Klien Kami yang Terkenal", CSS marquee, 21 clients duplicated. Source: `components/clients.html` → `src/components/Clients.tsx`
7. **Footer** — `footer.bg-violet-700`, 4 columns, socials, payment icons. Source: `components/footer.html` → `src/components/Footer.tsx`

Assembly: `src/app/page.tsx` imports all + `AosInit` client component (`AOS.init({duration:1000, easing:'ease-in-out-quart', once:true})`).
Interaction models: header=scroll-driven class swap; hero/testimonials=time-driven Swiper autoplay + click dots; marquee=time-driven CSS; cards=hover/mouse-driven; section reveals=scroll-driven AOS.
