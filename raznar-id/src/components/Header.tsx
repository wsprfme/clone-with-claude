"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  WhatsappIcon,
  DiscordIcon,
  TiktokIcon,
  InstagramIcon,
  IndonesiaFlagIcon,
} from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleAccordion = (key: string) =>
    setOpenAccordion((prev) => (prev === key ? null : key));

  const headerBg = scrolled || menuOpen
    ? "bg-violet-950/80 shadow-2xl border-b border-white/10"
    : "bg-transparent";

  return (
    <header
      id="site-header"
      className={`fixed transition-all duration-500 w-full z-50 ${headerBg} backdrop-blur`}
    >
      <a
        href="#main-content"
        className="absolute left-0 top-0 -translate-y-full focus:translate-y-0 bg-violet-600 text-white px-4 py-2 z-[60] transition-transform duration-300 font-bold"
      >
        Skip to Content
      </a>
      <nav className="flex flex-col py-5 w-full">
        <div className="flex justify-between px-8 lg:mx-auto lg:justify-between lg:container">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center shrink-0 outline-none transition-opacity hover:opacity-80"
            draggable={false}
          >
            <span className="sr-only">Raznar Home</span>
            <img
              src="/icons/banner.avif"
              alt="Raznar Logo"
              width={160}
              className="shrink-0"
              loading="eager"
              fetchPriority="high"
            />
          </a>
          <div className="flex items-center gap-x-2">
            {/* Desktop Nav */}
            <div
              className="hidden lg:flex items-center font-semibold z-[1] lg:text-gray-300"
              id="desktop-nav-container"
            >
              <ul className="flex flex-1 list-none items-center justify-center space-x-1">
                <li className="relative group">
                  <a
                    href="/consult"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 text-gray-300"
                  >
                    Konsultasi
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="/game-hosting"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 text-gray-300"
                  >
                    Games
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="/bare-metal"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 text-gray-300"
                  >
                    Bare Metal
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="/virtual-private-server"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 text-gray-300"
                  >
                    Virtual Private Server
                  </a>
                </li>
                <li className="relative group">
                  <button
                    id="nav-btn-hosting aplikasi"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 cursor-pointer outline-none text-gray-300"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="nav-menu-hosting aplikasi"
                  >
                    <span>Hosting Aplikasi</span>
                    <ChevronDownIcon
                      className="ml-1 text-sm transition-transform duration-300 group-hover:rotate-180 group-hover:text-violet-400"
                      aria-hidden="true"
                    />
                  </button>
                  <ul
                    id="nav-menu-hosting aplikasi"
                    aria-labelledby="nav-btn-hosting aplikasi"
                    className="absolute top-full left-0 mt-2 bg-gray-950/95 border border-white/10 backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50 p-4 grid gap-3 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 grid-cols-1 min-w-[20rem]"
                  >
                    <li>
                      <a
                        href="/app-hosting/software"
                        aria-label="Aplikasi Software"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            Aplikasi Software
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-gray-500 mt-1 pl-3 transition-colors group-hover/item:text-gray-300">
                          Pilih hosting terbaik kami untuk software luar biasa Anda!
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/app-hosting/database"
                        aria-label="Aplikasi Database"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            Aplikasi Database
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-gray-500 mt-1 pl-3 transition-colors group-hover/item:text-gray-300">
                          Pilih hosting terbaik kami untuk database Anda!
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/app-hosting/n8n"
                        aria-label="N8N Hosting"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            N8N Hosting
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-gray-500 mt-1 pl-3 transition-colors group-hover/item:text-gray-300">
                          Pilih hosting terbaik kami untuk otomasi N8N Anda!
                        </p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <button
                    id="nav-btn-kontak"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white bg-black/80 border border-white/10 hover:bg-black/60 cursor-pointer outline-none text-gray-300"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="nav-menu-kontak"
                  >
                    <span>Kontak</span>
                    <ChevronDownIcon
                      className="ml-1 text-sm transition-transform duration-300 group-hover:rotate-180 group-hover:text-violet-400"
                      aria-hidden="true"
                    />
                  </button>
                  <ul
                    id="nav-menu-kontak"
                    aria-labelledby="nav-btn-kontak"
                    className="absolute top-full left-0 mt-2 bg-gray-950/95 border border-white/10 backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50 p-4 grid gap-3 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 grid-cols-1 min-w-[20rem]"
                  >
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=6283173845395&text=Halo%20kak%2C%20saya%20mau%20bertanya"
                        aria-label="WhatsApp"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <WhatsappIcon
                            className="text-2xl text-violet-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-violet-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            WhatsApp
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/discord"
                        aria-label="Discord"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <DiscordIcon
                            className="text-2xl text-violet-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-violet-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            Discord
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@raznar.hosting"
                        aria-label="TikTok"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <TiktokIcon
                            className="text-2xl text-violet-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-violet-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            TikTok
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/raznar.hosting"
                        aria-label="Instagram"
                        className="group/item block select-none space-y-1 rounded-lg p-3 transition-all duration-300 border hover:bg-violet-500/10 border-transparent hover:border-violet-500/20"
                      >
                        <div className="flex items-center gap-x-3 shrink-0">
                          <InstagramIcon
                            className="text-2xl text-violet-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-violet-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-bold leading-none text-gray-200 transition-colors group-hover/item:text-white">
                            Instagram
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center ml-2">
                  <button
                    id="currency-toggle"
                    title="Switch Currency"
                    aria-label="Switch Currency"
                    className="px-2 w-auto h-12 lg:!h-10 inline-flex justify-center items-center gap-x-1.5 group/currency font-semibold text-sm bg-black hover:bg-black/60 border border-white/10 rounded-md transition-all duration-200 cursor-pointer"
                  >
                    <span
                      id="currency-label"
                      className="transition-all duration-300 text-slate-300 group-hover/currency:text-slate-100"
                    >
                      IDR
                    </span>
                  </button>
                </li>
                <li className="flex items-center">
                  <a
                    href="/en/"
                    title="Change Language"
                    aria-label="Change Language"
                    className="px-2 w-12 h-12 lg:!w-10 lg:!h-10 inline-flex justify-center items-center group/lang bg-black hover:bg-black/60 border border-white/10 rounded-md transition-all duration-200"
                  >
                    <span className="sr-only">Change Language</span>
                    <svg
                      width="1em"
                      height="1em"
                      className="w-12 h-12 md:w-7 md:h-7 group-active/lang:scale-75 transition-transform duration-75"
                      data-icon="emojione:flag-for-indonesia"
                    >
                      <symbol id="ai:emojione:flag-for-indonesia" viewBox="0 0 64 64">
                        <path
                          fill="#f9f9f9"
                          d="M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30"
                        />
                        <path
                          fill="#ed4c5c"
                          d="M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30"
                        />
                      </symbol>
                      <use href="#ai:emojione:flag-for-indonesia"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Mobile Toggle */}
            <button
              id="mobile-toggle"
              className="lg:hidden cursor-pointer p-2 text-gray-300 hover:text-white transition-colors outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {/* lucide:menu */}
              <svg
                id="hamburger-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-3xl${menuOpen ? " hidden" : ""}`}
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              {/* lucide:x */}
              <svg
                id="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-3xl${menuOpen ? "" : " hidden"}`}
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden w-full ${menuOpen ? "" : "hidden "}bg-gray-950 backdrop-blur-2xl`}
        >
          <div className="flex flex-col py-5 text-gray-300 text-base h-screen overflow-y-auto">
            <div className="w-full">
              <div className="border-b border-white/5">
                <a
                  href="/consult"
                  className="flex items-center py-5 px-6 font-bold text-lg transition-colors hover:text-white hover:bg-white/[0.02]"
                >
                  Konsultasi
                </a>
              </div>
              <div className="border-b border-white/5">
                <a
                  href="/game-hosting"
                  className="flex items-center py-5 px-6 font-bold text-lg transition-colors hover:text-white hover:bg-white/[0.02]"
                >
                  Games
                </a>
              </div>
              <div className="border-b border-white/5">
                <a
                  href="/bare-metal"
                  className="flex items-center py-5 px-6 font-bold text-lg transition-colors hover:text-white hover:bg-white/[0.02]"
                >
                  Bare Metal
                </a>
              </div>
              <div className="border-b border-white/5">
                <a
                  href="/virtual-private-server"
                  className="flex items-center py-5 px-6 font-bold text-lg transition-colors hover:text-white hover:bg-white/[0.02]"
                >
                  Virtual Private Server
                </a>
              </div>
              <div className="border-b border-white/5 mobile-accordion">
                <button
                  className="w-full flex justify-between items-center py-5 px-6 font-bold text-lg accordion-trigger transition-colors hover:text-white outline-none"
                  aria-expanded={openAccordion === "hosting"}
                  onClick={() => toggleAccordion("hosting")}
                >
                  Hosting Aplikasi
                  <ChevronDownIcon
                    className={`text-xl transition-transform duration-300 accordion-chevron${
                      openAccordion === "hosting" ? " rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`pb-3 flex-col gap-y-1 ${
                    openAccordion === "hosting" ? "flex" : "hidden"
                  } accordion-content bg-white/[0.02]`}
                >
                  <a
                    href="/app-hosting/software"
                    aria-label="Aplikasi Software"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    Aplikasi Software
                  </a>
                  <a
                    href="/app-hosting/database"
                    aria-label="Aplikasi Database"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    Aplikasi Database
                  </a>
                  <a
                    href="/app-hosting/n8n"
                    aria-label="N8N Hosting"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    N8N Hosting
                  </a>
                </div>
              </div>
              <div className="border-b border-white/5 mobile-accordion">
                <button
                  className="w-full flex justify-between items-center py-5 px-6 font-bold text-lg accordion-trigger transition-colors hover:text-white outline-none"
                  aria-expanded={openAccordion === "kontak"}
                  onClick={() => toggleAccordion("kontak")}
                >
                  Kontak
                  <ChevronDownIcon
                    className={`text-xl transition-transform duration-300 accordion-chevron${
                      openAccordion === "kontak" ? " rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`pb-3 flex-col gap-y-1 ${
                    openAccordion === "kontak" ? "flex" : "hidden"
                  } accordion-content bg-white/[0.02]`}
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=6283173845395&text=Halo%20kak%2C%20saya%20mau%20bertanya"
                    aria-label="WhatsApp"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    <WhatsappIcon className="mr-3 text-violet-400" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href="/discord"
                    aria-label="Discord"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    <DiscordIcon className="mr-3 text-violet-400" aria-hidden="true" />
                    Discord
                  </a>
                  <a
                    href="https://www.tiktok.com/@raznar.hosting"
                    aria-label="TikTok"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    <TiktokIcon className="mr-3 text-violet-400" aria-hidden="true" />
                    TikTok
                  </a>
                  <a
                    href="https://www.instagram.com/raznar.hosting"
                    aria-label="Instagram"
                    className="flex items-center py-4 font-semibold text-base transition-all px-10 hover:text-white hover:bg-white/5"
                  >
                    <InstagramIcon className="mr-3 text-violet-400" aria-hidden="true" />
                    Instagram
                  </a>
                </div>
              </div>
              {/* Mobile Footer Actions */}
              <div className="flex flex-col gap-y-6 px-6 py-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Currency</span>
                  <button
                    title="Switch Currency"
                    aria-label="Switch Currency"
                    className="px-2 w-auto h-12 lg:!h-10 inline-flex justify-center items-center gap-x-1.5 group/currency font-semibold text-sm bg-black hover:bg-black/60 border border-white/10 rounded-md transition-all duration-200 cursor-pointer"
                  >
                    <span className="transition-all duration-300 text-slate-300 group-hover/currency:text-slate-100">
                      IDR
                    </span>
                  </button>
                </div>
                <a
                  href="/en/"
                  aria-label="Switch Language"
                  className="flex items-center justify-between group"
                >
                  <span className="text-gray-400 font-medium">Language</span>
                  <div className="flex items-center gap-x-2 bg-white/5 px-3 py-2 rounded-lg">
                    <IndonesiaFlagIcon className="text-2xl" aria-hidden="true" />
                    <span className="font-bold">English</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
