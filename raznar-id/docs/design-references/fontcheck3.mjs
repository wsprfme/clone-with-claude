import { chromium } from "playwright";
const b = await chromium.launch();
for (const url of ["https://raznar.id", "http://localhost:3000"]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const fonts = [];
  p.on("request", rq => { if (rq.resourceType() === "font") fonts.push(rq.url()); });
  await p.goto(url, { waitUntil: "networkidle" });
  const loaded = await p.evaluate(() => [...document.fonts].map(f => f.family + " " + f.weight + " " + f.status));
  console.log(location => 0, JSON.stringify({ url, fontRequests: fonts, documentFonts: loaded }));
  await p.close();
}
await b.close();
