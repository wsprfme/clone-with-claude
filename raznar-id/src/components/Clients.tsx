const clients = [
  {
    name: "PakGM",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@PakGM",
    image: "/assets/clients/PakGM.avif",
  },
  {
    name: "Rex Regum Qeon",
    role: "Tim Esports",
    href: "https://teamrrq.com/",
    image: "/assets/clients/rrq.avif",
  },
  {
    name: "Nevin Gaming",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@NevinGamingYT",
    image: "/assets/clients/Nevin.avif",
  },
  {
    name: "BlockWave",
    role: "Team Studio",
    href: "https://x.com/BlockwavesTeam",
    image: "/assets/clients/blockwave.avif",
  },
  {
    name: "Watchout",
    role: "Kreator Konten",
    href: "https://www.youtube.com/results?search_query=watchoutz",
    image: "/assets/clients/Watchout.avif",
  },
  {
    name: "Bapak Kau SMP",
    role: "Minecraft SMP",
    href: "https://minecraftid.fandom.com/id/wiki/Bapak_Kau_SMP",
    image: "/assets/clients/Bapak_Kau_SMP.avif",
  },
  {
    name: "Viva SMP",
    role: "Minecraft SMP",
    href: "https://minecraftid.fandom.com/id/wiki/Viva_SMP",
    image: "/assets/clients/Viva_SMP.avif",
  },
  {
    name: "Ayon",
    role: "Kreator Konten",
    href: "https://www.youtube.com/results?search_query=ayon+cakra",
    image: "/assets/clients/Ayon.avif",
  },
  {
    name: "Samsul CH",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@SamsulCH",
    image: "/assets/clients/Samsul_CH.avif",
  },
  {
    name: "MichelleMCL",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@MichelleMCL",
    image: "/assets/clients/Michelle_MCL.avif",
  },
  {
    name: "Vania Delicia",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@VaniaDelicia",
    image: "/assets/clients/Vania_Delicia.avif",
  },
  {
    name: "Alwisusilo",
    role: "Kreator Konten",
    href: "https://www.youtube.com/channel/UCB-zfADRmqPKpMmgLRJgRIw",
    image: "/assets/clients/Alwisusilo.avif",
  },
  {
    name: "Genah",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@Genah",
    image: "/assets/clients/Genah.avif",
  },
  {
    name: "Kaguma",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@KagumaX",
    image: "/assets/clients/Kaguma.avif",
  },
  {
    name: "Aspect30",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@Aspect30",
    image: "/assets/clients/Aspect30.avif",
  },
  {
    name: "Dennis Suryana",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@DennisSuryana",
    image: "/assets/clients/Dennis_Suryana.avif",
  },
  {
    name: "Rianiayan",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@Rianiayan",
    image: "/assets/clients/Rianiayan.avif",
  },
  {
    name: "Lord Indra",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@IndraAF11",
    image: "/assets/clients/IndraAF11.avif",
  },
  {
    name: "FirmanGG",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@FirmanGG",
    image: "/assets/clients/FirmanGG.avif",
  },
  {
    name: "Servasius",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@Servasius",
    image: "/assets/clients/Servasius.avif",
  },
  {
    name: "Rafel Alva",
    role: "Kreator Konten",
    href: "https://www.youtube.com/@RafelAlvaRhea",
    image: "/assets/clients/Rafel_Alva.avif",
  },
];

function ClientList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex justify-center md:justify-start items-center animate-[infinite-scroll_40s_linear_infinite]"
      aria-hidden={ariaHidden || undefined}
    >
      {clients.map((client) => (
        <li
          key={client.name}
          className="flex flex-col justify-center items-center mx-5 group"
        >
          <a
            href={client.href}
            className="group-hover:scale-110 transition-transform duration-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={client.name}
          >
            <div className="flex flex-col justify-center items-center w-36 h-28 mx-auto">
              <img
                className="w-24 rounded-full object-center"
                src={client.image}
                alt={`Client ${client.name}`}
                draggable={false}
                loading="lazy"
              />
            </div>
            <h3 className="text-lg text-violet-300 group-hover:text-opacity-60 font-bold mt-2 text-center transition-colors duration-500">
              {client.name}
            </h3>
            <span className="text-sm text-gray-400 group-hover:text-opacity-60 font-bold transition-colors duration-500">
              {client.role}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  return (
    <section className="py-10 overflow-hidden">
      <section className="flex flex-col gap-y-14 mx-auto container text-center">
        <h2
          className="flex flex-col items-center gap-y-3 text-3xl md:text-4xl uppercase font-extrabold text-center mx-5"
          data-aos="fade-up"
        >
          <div>Klien Kami yang Terkenal</div>
          <div className="h-1 w-1/6 bg-violet-400 rounded-full"></div>
        </h2>
        <div
          className="flex flex-wrap justify-center items-center gap-3 mb-20"
          data-aos="fade-up"
        >
          <div className="overflow-hidden">
            <div className="mask-fade overflow-hidden flex-nowrap w-full inline-flex items-center py-2">
              <ClientList />
              <ClientList ariaHidden />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
