"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Slide {
  title: string;
  description: string;
  href: string;
  image: string;
  eager?: boolean;
}

const slides: Slide[] = [
  {
    title: "Hosting Hytale",
    description:
      "Tunjukkan kreativitas Anda dengan layanan hosting server Hytale yang stabil, cepat, dan minim lag.",
    href: "/game-hosting/hytale",
    image: "/assets/products/hytale.avif",
    eager: true,
  },
  {
    title: "Game Hosting",
    description: "Rasakan game hosting berkinerja tinggi bersama kami!",
    href: "/game-hosting",
    image: "/hero-img-game.avif",
  },
  {
    title: "Hosting FiveM",
    description:
      "Kelola server FiveM Anda tanpa repot dengan performa tinggi dan fitur manajemen yang lengkap.",
    href: "/game-hosting/fivem",
    image: "/assets/products/fivem/franklin.avif",
  },
  {
    title: "Hosting SA-MP",
    description:
      "Hosting andal untuk server SA-MP Anda, dengan kontrol penuh dan koneksi yang stabil.",
    href: "/game-hosting/samp",
    image: "/hero-img-samp.avif",
  },
  {
    title: "Hosting Minecraft",
    description:
      "Tunjukkan kreativitas Anda dengan hosting server Minecraft yang andal dan bebas lag.",
    href: "/game-hosting/minecraft",
    image: "/assets/products/mc-grass.avif",
  },
  {
    title: "Hosting VPS",
    description:
      "Dapatkan server yang andal dan berkinerja tinggi untuk semua kebutuhan hosting Anda!",
    href: "/virtual-private-server",
    image: "/hero-img-vps.avif",
  },
  {
    title: "Bare Metal",
    description:
      "Dapatkan server yang berkinerja paling tinggi untuk semua kebutuhan hosting Anda!",
    href: "/bare-metal",
    image: "/hero-img-bare-metal.avif",
  },
  {
    title: "Hosting Software",
    description:
      "Deploy bot atau aplikasi Anda dengan mudah dalam waktu singkat!",
    href: "/app-hosting/software",
    image: "/hero-img-software.avif",
  },
  {
    title: "Hosting Database",
    description:
      "Deploy database Anda dengan mudah dan aman menggunakan panel kontrol yang sederhana.",
    href: "/app-hosting/database",
    image: "/hero-img-database.avif",
  },
];

export default function Hero() {
  const [initialized, setInitialized] = useState(false);
  const [skeletonHidden, setSkeletonHidden] = useState(false);

  const handleInit = () => {
    setInitialized(true);
    setTimeout(() => setSkeletonHidden(true), 500);
  };

  return (
    <section
      id="hero"
      className="flex items-end pt-[200px] pb-[100px] hero-bg overflow-hidden relative"
    >
      <div className="py-3 mx-auto w-full relative">
        {/* Skeleton Overlay */}
        {!skeletonHidden && (
          <div
            id="hero-skeleton"
            className="absolute inset-0 z-20 w-full transition-opacity duration-500 pointer-events-none"
            style={{ opacity: initialized ? 0 : 1 }}
          >
            <div className="flex lg:flex-row flex-col justify-center gap-x-20 px-5 w-full py-8">
              <div className="lg:hidden flex justify-center items-center">
                <div className="skeleton rounded-md h-48 w-48 rounded-2xl"></div>
              </div>
              <div className="hero-text text-center lg:text-left flex flex-col pb-20">
                <div className="pt-2">
                  <div className="skeleton rounded-md h-10 w-64 mx-auto lg:mx-0"></div>
                </div>
                <div className="py-1 lg:py-2.5 mt-5">
                  <div className="skeleton rounded-md h-16 w-full max-w-[32rem] mx-auto lg:mx-0"></div>
                </div>
                <div className="mt-10">
                  <div className="skeleton rounded-md h-12 w-40 mx-auto lg:mx-0 rounded-3xl"></div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <div className="skeleton rounded-md h-72 w-72 rounded-2xl"></div>
              </div>
            </div>
          </div>
        )}
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          onInit={handleInit}
          className={`hero-swiper w-full transition-opacity duration-500 pb-20 ${
            initialized ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.href} className="pt-8 pb-6">
              <div className="flex lg:flex-row flex-col justify-center gap-x-20 px-5 w-full">
                {/* Mobile image */}
                <div className="lg:hidden flex justify-center items-center animate-[zoomin_1s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="animate-[updown_2s_ease-in-out_infinite_alternate-reverse_both] h-48 my-auto shrink-0"
                    loading={slide.eager ? "eager" : "lazy"}
                    fetchPriority={slide.eager ? "high" : "auto"}
                  />
                </div>
                {/* Text */}
                <div className="hero-text text-center lg:text-left pb-20">
                  <h1 className="text-3xl md:text-4xl text-white font-extrabold pt-2">
                    {slide.title}
                  </h1>
                  <div className="py-1 lg:py-2.5">
                    <p className="text-white text-2xl lg:text-3xl mt-5 font-medium max-w-[32rem] mx-auto">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex w-full bg-opacity-80 mt-10">
                    <a
                      href={slide.href}
                      className="group mx-auto lg:mx-0 py-3 px-8 rounded-3xl text-center bg-slate-800 hover:bg-opacity-70 font-semibold"
                      aria-label={`Mulai Sekarang: ${slide.title}`}
                    >
                      <span className="text-lg lg:text-2xl">Mulai Sekarang</span>
                    </a>
                  </div>
                </div>
                {/* Desktop image */}
                <div className="hidden lg:flex justify-center items-center animate-[zoomin_1s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="animate-[updown_2s_ease-in-out_infinite_alternate-reverse_both] h-72 my-auto shrink-0"
                    loading={slide.eager ? "eager" : "lazy"}
                    fetchPriority={slide.eager ? "high" : "auto"}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !bottom-10"></div>
        </Swiper>
      </div>
    </section>
  );
}
