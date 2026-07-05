import { chromium } from "playwright";
const b = await chromium.launch();
for (const url of ["https://raznar.id", "http://localhost:3000"]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  const r = await p.evaluate(() => {
    const h = [...document.querySelectorAll("h2")].find(e => e.textContent.includes("Apa Kata"));
    const d = h.querySelector("div") || h;
    const cs = getComputedStyle(d);
    const keys = ["letterSpacing","wordSpacing","fontStretch","fontFeatureSettings","fontVariationSettings","fontKerning","fontOpticalSizing","textRendering","fontSynthesis","textTransform"];
    const o = { host: location.host, w: d.getBoundingClientRect().width, text: d.textContent };
    keys.forEach(k => o[k] = cs[k]);
    // which font actually rendered
    return o;
  });
  console.log(JSON.stringify(r, null, 0));
  await p.close();
}
await b.close();
