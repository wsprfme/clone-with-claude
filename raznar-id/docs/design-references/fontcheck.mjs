import { chromium } from "playwright";
const b = await chromium.launch();
for (const url of ["https://raznar.id", "http://localhost:3000"]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  const r = await p.evaluate(() => {
    const h = [...document.querySelectorAll("h2")].find(e => e.textContent.includes("Apa Kata"));
    const d = h.querySelector("div") || h;
    const cs = getComputedStyle(d);
    return { url: location.host, w: d.getBoundingClientRect().width, font: cs.fontFamily.slice(0, 60), weight: cs.fontWeight, size: cs.fontSize };
  });
  console.log(JSON.stringify(r));
  await p.close();
}
await b.close();
