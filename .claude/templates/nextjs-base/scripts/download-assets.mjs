#!/usr/bin/env node
// Reusable asset downloader for cloned sites. Given a manifest of
// { url, dest } pairs, downloads each into public/<dest> with a
// concurrency cap, retries once with a Referer header on failure
// (fixes most hotlink-protection 403s), and logs anything that still
// fails to docs/research/ASSET_FAILURES.md instead of dropping it silently.
//
// Usage: node scripts/download-assets.mjs <manifest.json> <target-site-origin>
//
// manifest.json: [{ "url": "https://...", "dest": "images/hero.jpg" }, ...]

import fs from 'node:fs';
import path from 'node:path';

const [, , manifestPath, targetOrigin] = process.argv;

if (!manifestPath || !targetOrigin) {
  console.error('Usage: node download-assets.mjs <manifest.json> <target-site-origin>');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const publicDir = path.resolve('public');
const failuresPath = path.resolve('docs/research/ASSET_FAILURES.md');

async function downloadOnce(url, referer) {
  const res = await fetch(url, referer ? { headers: { Referer: referer } } : undefined);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function downloadAsset({ url, dest }) {
  const destPath = path.join(publicDir, dest);
  try {
    const buf = await downloadOnce(url);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(destPath, buf);
    return { url, dest, ok: true };
  } catch (firstErr) {
    try {
      const buf = await downloadOnce(url, targetOrigin);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, buf);
      return { url, dest, ok: true, recoveredWithReferer: true };
    } catch (secondErr) {
      return { url, dest, ok: false, error: String(secondErr.message || secondErr) };
    }
  }
}

async function runBatched(items, batchSize, worker) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...(await Promise.all(batch.map(worker))));
  }
  return results;
}

const results = await runBatched(manifest, 4, downloadAsset);
const failures = results.filter((r) => !r.ok);

if (failures.length > 0) {
  fs.mkdirSync(path.dirname(failuresPath), { recursive: true });
  const header = fs.existsSync(failuresPath)
    ? ''
    : '# Asset Download Failures\n\n| URL | Destination | Error |\n|-----|-------------|-------|\n';
  const rows = failures.map((f) => `| ${f.url} | \`${f.dest}\` | ${f.error} |\n`).join('');
  fs.appendFileSync(failuresPath, header + rows);
}

console.log(
  JSON.stringify(
    {
      total: manifest.length,
      downloaded: results.length - failures.length,
      failed: failures.length,
      recoveredWithReferer: results.filter((r) => r.recoveredWithReferer).length,
      failuresLoggedTo: failures.length > 0 ? 'docs/research/ASSET_FAILURES.md' : null,
    },
    null,
    2
  )
);
