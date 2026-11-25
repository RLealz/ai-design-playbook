#!/usr/bin/env node
/**
 * Phase 0 Pre-Design Live Website Surface Auditor (Playwright)
 * Captures baseline desktop/mobile screenshots, SEO/heading metadata, CMS generator hints,
 * placeholder-copy warnings, and public route links into `evidence/surface-inventory.json`.
 *
 * Usage:
 *   node scripts/audit-live-surface.mjs https://example.com [outDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const url = process.argv[2];
const outDir = process.argv[3] || './evidence';

if (!url) {
  console.error('Usage: node scripts/audit-live-surface.mjs <https://target-site.com> [outDir]');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const SLOP_OR_PLACEHOLDER_PATTERNS = [
  /lorem ipsum/i,
  /john doe|jane doe|acme corp/i,
  /click here to edit|clique aqui para editar|i'm a paragraph|sou um parágrafo/i,
  /my site|meu site|coming soon/i,
];

const browser = await chromium.launch();

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await desktop.screenshot({ path: path.join(outDir, 'before-desktop-1440.png'), fullPage: true });

  const auditData = await desktop.evaluate(() => {
    const getMeta = (sel) => document.querySelector(sel)?.getAttribute('content') || null;
    const h1s = [...document.querySelectorAll('h1')].map((el) => el.textContent.trim()).filter(Boolean);
    const links = [...document.querySelectorAll('a[href]')].map((a) => ({
      text: (a.textContent || '').trim().slice(0, 60),
      href: a.getAttribute('href'),
    }));
    const bodyText = document.body?.innerText || '';

    return {
      title: document.title || null,
      lang: document.documentElement.lang || null,
      generator: getMeta('meta[name="generator"]'),
      metaDescription: getMeta('meta[name="description"]'),
      ogTitle: getMeta('meta[property="og:title"]'),
      ogImage: getMeta('meta[property="og:image"]'),
      h1Count: h1s.length,
      h1Texts: h1s,
      emptyOrHashLinks: links.filter((l) => !l.href || l.href === '#'),
      internalPaths: [...new Set(links.map((l) => l.href).filter((h) => h && (h.startsWith('/') || h.startsWith(location.origin))))],
      bodySample: bodyText.slice(0, 12000),
    };
  });

  const placeholderHits = SLOP_OR_PLACEHOLDER_PATTERNS
    .filter((re) => re.test(auditData.bodySample))
    .map((re) => re.source);

  delete auditData.bodySample;

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  const mobileOverflowPx = await mobile.evaluate(() =>
    Math.max(0, document.documentElement.scrollWidth - window.innerWidth)
  );
  await mobile.screenshot({ path: path.join(outDir, 'before-mobile-390.png'), fullPage: true });

  const summary = {
    auditedUrl: url,
    auditedAt: new Date().toISOString(),
    ...auditData,
    mobile390OverflowPx: mobileOverflowPx,
    placeholderCopyWarnings: placeholderHits,
  };

  const outFile = path.join(outDir, 'surface-inventory.json');
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`Saved Phase 0 surface audit -> ${outFile}`);
} finally {
  await browser.close();
}
