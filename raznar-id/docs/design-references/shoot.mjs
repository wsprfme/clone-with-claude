import { chromium } from "playwright";

const OUT = "docs/design-references";
const shots = [
  { name: "hero", y: 0, wait: 1800 },
  { name: "products", y: 750, wait: 1200 },
  { name: "features", y: 1500, wait: 1200 },
  { name: "footer", y: 99999, wait: 1200 },
];

const browser = await chromium.launch();
for (const [label, url] of [
  ["original", "https://raznar.id"],
  ["clone", "http://localhost:3000"],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  // freeze animations that would cause diff noise
  await page.addStyleTag({
    content: `*,*::before,*::after{animation-play-state:paused !important;transition:none !important}`,
  });
  for (const s of shots) {
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
    await page.waitForTimeout(s.wait);
    await page.screenshot({ path: `${OUT}/${label}-${s.name}.png` });
  }
  await page.close();
}
await browser.close();
console.log("done");
