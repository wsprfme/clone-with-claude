#!/usr/bin/env node
// Objective pixel-diff between an original-site screenshot and a clone
// screenshot, for Phase 5 Visual QA. Handles PNG/JPEG interchangeably
// and normalizes both to the same dimensions before comparing.
//
// Usage: node visual-diff.mjs <original> <clone> <diff-output.png>

import fs from 'node:fs';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

const [, , originalPath, clonePath, diffOutputPath] = process.argv;

if (!originalPath || !clonePath || !diffOutputPath) {
  console.error('Usage: node visual-diff.mjs <original> <clone> <diff-output.png>');
  process.exit(1);
}

async function toRawRGBA(imgPath, width, height) {
  return sharp(imgPath)
    .resize(width, height, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer();
}

const originalMeta = await sharp(originalPath).metadata();
const cloneMeta = await sharp(clonePath).metadata();

// Normalize to the smaller of the two so we're never upscaling artifacts.
const width = Math.min(originalMeta.width, cloneMeta.width);
const height = Math.min(originalMeta.height, cloneMeta.height);

const [originalRaw, cloneRaw] = await Promise.all([
  toRawRGBA(originalPath, width, height),
  toRawRGBA(clonePath, width, height),
]);

const diffRaw = Buffer.alloc(width * height * 4);
const diffPixels = pixelmatch(originalRaw, cloneRaw, diffRaw, width, height, {
  threshold: 0.1,
});

await sharp(diffRaw, { raw: { width, height, channels: 4 } }).png().toFile(diffOutputPath);

const totalPixels = width * height;
const mismatchPercent = Number(((diffPixels / totalPixels) * 100).toFixed(2));

console.log(
  JSON.stringify(
    {
      width,
      height,
      diffPixels,
      totalPixels,
      mismatchPercent,
      diffImage: diffOutputPath,
      dimensionsDiffered: originalMeta.width !== cloneMeta.width || originalMeta.height !== cloneMeta.height,
    },
    null,
    2
  )
);
