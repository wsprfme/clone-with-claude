"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "PakGM",
    role: "Kreator Konten",
    avatar: "/assets/clients/PakGM.avif",
    alt: "PakGM avatar",
    text: "Sudah menjadi pelanggan di sini hampir setahun, game hosting yang andal.",
  },
  {
    name: "Dennis Suryana",
    role: "Kreator Konten",
    avatar: "/assets/clients/dennis.avif",
    alt: "Dennis Suryana avatar",
    text: "Bagus. Respon cepat, setup mudah, pengalaman pengguna terbaik ⭐⭐⭐⭐⭐",
  },
  {
    name: "Togar",
    role: "Klien",
    avatar: "/assets/clients/man.avif",
    alt: "Togar avatar",
    text: "Performa luar biasa, chunk loading sangat cepat, TPS stabil, harga terjangkau, staf responsif dan sangat membantu, semuanya sempurna!",
  },
  {
    name: "Kazuya Derry",
    role: "Kreator Konten",
    avatar: "/assets/clients/kazuya.avif",
    alt: "Kazuya Derry avatar",
    text: "Servernya sangat keren, layanannya sangat cepat. Lag? Tidak ada lag di server saya, dan harganya juga terjangkau.",
  },
  {
    name: "April Yonardi",
    role: "Klien",
    avatar: "/assets/clients/man.avif",
    alt: "April Yonardi avatar",
    text: "Stafnya sangat ramah dan terbuka, responsif, sangat sabar, dan sangat baik membantu klien membangun server. Ini adalah hosting terbaik, harganya juga sangat terjangkau, pokoknya host terbaik sejauh ini. Terima kasih Raznar (^.^)",
  },
  {
    name: "OrangeCat2528",
    role: "Klien",
    avatar: "/assets/clients/man.avif",
    alt: "OrangeCat2528 avatar",
    text: "Luar biasa! Saya bertanya tentang cara memasang plugin dan lainnya dijawab dengan sangat jelas dan mudah dipahami, servernya tidak lag sama sekali! Ah hebat. Stafnya juga baik dan menyenangkan.",
  },
];

const starDelays = ["1000ms", "1300ms", "1600ms", "1900ms", "2200ms"];

function Stars({ defineSymbol }: { defineSymbol?: boolean }) {
  return (
    <div className="flex justify-center w-full left-0 gap-x-1 absolute -bottom-2 group-hover:scale-125 transition-transform duration-1000">
      {starDelays.map((delay, i) => (
        <div
          key={i}
          className="animate-[zoom-in-out_1.5s_ease-in-out] duration-1000"
          style={{ animationDelay: delay }}
        >
          {defineSymbol && i === 0 ? (
            <svg width="1em" height="1em" className="w-5 h-5 text-yellow-300" data-icon="ion:star">
              <symbol id="ai:ion:star" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                />
              </symbol>
              <use href="#ai:ion:star"></use>
            </svg>
          ) : (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="w-5 h-5 text-yellow-300"
              data-icon="ion:star"
            >
              <use href="#ai:ion:star"></use>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function SkeletonCard({ wrapperClass }: { wrapperClass: string }) {
  return (
    <div className={wrapperClass}>
      <div className="bg-gray-900/50 rounded-3xl p-5 flex flex-col gap-y-4 h-64 border border-gray-800">
        <div className="flex gap-x-3">
          <div className="skeleton rounded-md w-16 h-16 rounded-full"></div>
          <div className="flex flex-col gap-y-2 flex-1 pt-2">
            <div className="skeleton rounded-md h-5 w-2/3"></div>
            <div className="skeleton rounded-md h-4 w-1/3"></div>
          </div>
        </div>
        <div className="skeleton rounded-md h-4 w-full mt-4"></div>
        <div className="skeleton rounded-md h-4 w-full"></div>
        <div className="skeleton rounded-md h-4 w-2/3"></div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ready, setReady] = useState(false);

  return (
    <section className="bg-gray-900 my-16 py-10 overflow-hidden">
      <section className="flex flex-col gap-y-14 mx-auto container text-center">
        <h2 className="flex flex-col items-center gap-y-3 text-3xl md:text-4xl uppercase font-extrabold text-center mx-5">
          <div>Apa Kata Mereka?</div>
          <div className="h-1 w-1/6 bg-violet-400 rounded-full"></div>
        </h2>
        <div className="flex flex-col justify-center items-center mx-auto w-full px-5">
          {!ready && (
            <div
              id="testimonials-skeleton"
              className="w-full px-10 block transition-opacity duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <SkeletonCard wrapperClass="w-full" />
                <SkeletonCard wrapperClass="w-full hidden sm:block" />
                <SkeletonCard wrapperClass="w-full hidden sm:block hidden lg:block" />
              </div>
            </div>
          )}
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            autoplay={{ delay: 5000 }}
            pagination={{ el: ".testimonials-swiper .swiper-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={() => setReady(true)}
            className={`testimonials-swiper w-full px-10 pb-10 mb-10 ${ready ? "block" : "hidden"}`}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto pt-5 pb-24 flex">
                <div
                  className="border-highlighter relative z-10 !bg-gray-300/30 hover:!bg-violet-400 hover:!bg-opacity-100 rounded-3xl p-0.5 transition-colors duration-300 w-full flex group"
                  style={{ "--x": "-350px", "--y": "-350px" } as React.CSSProperties}
                >
                  <div className="bg-gray-950/90 rounded-3xl flex flex-col gap-y-3 p-5 w-full text-start relative">
                    <div className="flex gap-x-3">
                      <div className="overflow-hidden rounded-full bg-gray-800 shrink-0">
                        <img
                          src={t.avatar}
                          alt={t.alt}
                          className="w-16 h-16 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col text-start text-violet-300">
                        <div className="text-lg md:text-xl font-bold line-clamp-1">{t.name}</div>
                        <span className="text-violet-300/90 text-xs font-medium line-clamp-1">
                          {t.role}
                        </span>
                      </div>
                    </div>
                    <div className="break-normal mb-10 flex-grow">{t.text}</div>
                    <Stars defineSymbol={t.name === "PakGM"} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div slot="container-end" className="swiper-pagination !bottom-8"></div>
          </Swiper>
        </div>
      </section>
    </section>
  );
}
