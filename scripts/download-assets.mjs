#!/usr/bin/env node
/**
 * Asset downloader for jaimeludena.com clone
 * Downloads images from Squarespace CDN to public/images/
 */

import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_CDN = 'https://images.squarespace-cdn.com/content/v1/5ce57a23db956e000101ac65';

const assets = [
  {
    url: `${BASE_CDN}/246fad29-e1ae-413e-834c-606b0266610a/Board.jpg`,
    filename: 'meet-marina-prieto.jpg',
  },
  {
    url: `${BASE_CDN}/2828b77f-ab3a-46d3-9639-7116ea4b02ef/Netflix+x+David+Agency+-+Carlos+Alcaraz+Ad+TSQ+-+14MAR2024-29.jpeg`,
    filename: 'alcaraz-signs.jpeg',
  },
  {
    url: `${BASE_CDN}/acb888d3-f392-451b-b225-80f93fe21a2c/Netflix+x+David+Agency+-+Carlos+Alcaraz+Ad+TSQ+-+14MAR2024-25.jpeg`,
    filename: 'alcaraz-signs-2.jpeg',
  },
  {
    url: `${BASE_CDN}/88c89faa-da58-4e66-8283-b572b129feed/Starring-Bars---PR-01-KV.png`,
    filename: 'starring-bars.png',
  },
  {
    url: `${BASE_CDN}/49ba199e-40fa-4008-81d0-89e0233652a3/IMG_0377.png`,
    filename: 'starring-bars-2.png',
  },
  {
    url: `${BASE_CDN}/567708c0-d02f-4548-8782-6ff2c6688840/board-final.jpg`,
    filename: 'bzrp-meal-reveal.jpg',
  },
];

const OUTPUT_DIR = path.resolve('public/images');

async function downloadFile(url, filename) {
  const filepath = path.join(OUTPUT_DIR, filename);
  if (existsSync(filepath)) {
    console.log(`✓ Already exists: ${filename}`);
    return true;
  }
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Referer': 'https://www.jaimeludena.com/',
      },
    });
    if (!res.ok) {
      console.error(`✗ Failed (${res.status}): ${filename}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buffer);
    console.log(`✓ Downloaded: ${filename} (${Math.round(buffer.length / 1024)}KB)`);
    return true;
  } catch (err) {
    console.error(`✗ Error: ${filename} — ${err.message}`);
    return false;
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Download in batches of 4
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(({ url, filename }) => downloadFile(url, filename)));
  }

  console.log('\nDownload complete.');
}

main().catch(console.error);
