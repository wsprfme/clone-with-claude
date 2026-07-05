"use client";

import React from "react";

const products = [
  { href: "/app-hosting/software", title: "Node.js", img: "/icons/products/nodejs.avif", delay: 0 },
  { href: "/app-hosting/software", title: "Python", img: "/icons/products/python.avif", delay: 50 },
  { href: "/app-hosting/software", title: "Java", img: "/icons/products/java.avif", delay: 100 },
  { href: "/app-hosting/software", title: "Go", img: "/icons/products/go.avif", delay: 150 },
  { href: "/app-hosting/software", title: "Discord Bot", img: "/icons/products/discord.avif", delay: 200 },
  { href: "/app-hosting/software", title: "PHP", img: "/icons/products/php.avif", delay: 250 },
  { href: "/app-hosting/database", title: "MariaDB", img: "/icons/products/mariadb.avif", delay: 300 },
  { href: "/app-hosting/database", title: "MongoDB", img: "/icons/products/mongodb.avif", delay: 350 },
  { href: "/app-hosting/database", title: "PostgreSQL", img: "/icons/products/postgresql.avif", delay: 400 },
  { href: "/app-hosting/database", title: "Redis", img: "/icons/products/redis.avif", delay: 450 },
  { href: "/app-hosting/database", title: "MySQL", img: "/icons/products/mysql.avif", delay: 500 },
  { href: "/game-hosting/fivem", title: "FiveM", img: "/icons/products/fivem.avif", delay: 550 },
  { href: "/game-hosting/unturned", title: "Unturned", img: "/icons/products/unturned.avif", delay: 600 },
  { href: "/game-hosting/project-zomboid", title: "Project Zomboid", img: "/icons/products/project-zomboid.avif", delay: 650 },
  { href: "/game-hosting/samp", title: "SA-MP", img: "/icons/products/samp.avif", delay: 700 },
  { href: "/game-hosting/minecraft", title: "Minecraft", img: "/icons/products/minecraft.avif", delay: 750 },
  { href: "/game-hosting/terraria", title: "Terraria", img: "/icons/products/terraria.avif", delay: 800 },
  { href: "/game-hosting/redm", title: "RedM", img: "/icons/products/rdr.avif", delay: 850 },
  { href: "/game-hosting/rust", title: "Rust", img: "/icons/products/rust.avif", delay: 900 },
  { href: "/game-hosting/palworld", title: "Palworld", img: "/icons/products/palworld.avif", delay: 950 },
  { href: "/game-hosting/valheim", title: "Valheim", img: "/icons/products/valheim.avif", delay: 1000 },
];

export default function Products() {
  // Delegated mouse-follow glow for any `.border-highlighter` element,
  // mirroring the original site's JS (sets --x/--y CSS vars).
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>(".border-highlighter");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="bg-gray-900 overflow-hidden" onMouseMove={handleMouseMove}>
      <section className="flex flex-col gap-y-14 mx-auto container text-center py-20">
        {/* Title */}
        <h2 className="flex flex-col items-center gap-y-3 text-3xl md:text-4xl uppercase font-extrabold text-center mx-5">
          <div>Produk Kami</div>
          <div className="h-1 w-1/6 bg-violet-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className="group bg-slate-200/80 hover:bg-violet-600/20 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 transition duration-300 shadow-md hover:shadow-xl flex items-center justify-center aspect-square"
              title={product.title}
              aria-label={product.title}
              data-aos="fade-up"
              data-aos-delay={product.delay}
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
