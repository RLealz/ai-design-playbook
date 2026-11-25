#!/usr/bin/env node
/**
 * Canonical 6-Viewport Website Craft & Accessibility Probe (Playwright)
 * Synthesized from Claude `versoes/_dev` & Codex `audits/capture.cjs`.
 *
 * Usage:
 *   node scripts/probe-site.mjs http://127.0.0.1:4181 [outDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const targetUrl = process.argv[2];
const outDir = process.argv[3] || './qa-report';

if (!targetUrl) {
  console.error('Usage: node scripts/probe-site.mjs <url> [outDir]');
  process.exit(1);
}

const VIEWPORTS = [
  { name: 'mobile-320', width: 320, height: 667 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'wide-1920', width: 1920, height: 1080 },
];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const report = { url: targetUrl, timestamp: new Date().toISOString(), viewports: [], passed: true };

try {
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    const errors = [];

    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(targetUrl, { waitUntil: 'networkidle' });

    const metrics = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const overflowPx = Math.max(0, docWidth - winWidth);

      const interactive = [...document.querySelectorAll('a, button, input, select, textarea, [role="button"]')];
      const undersizedTargets = [];

      for (const el of interactive) {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (r.height < 44 || r.width < 44) {
          undersizedTargets.push({
            tag: el.tagName.toLowerCase(),
            text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 32),
            width: Math.round(r.width),
            height: Math.round(r.height),
          });
        }
      }

      return { overflowPx, undersizedCount: undersizedTargets.length, undersizedSample: undersizedTargets.slice(0, 5) };
    });

    const shotPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    const vpPass = metrics.overflowPx === 0 && errors.length === 0;
    if (!vpPass) report.passed = false;

    report.viewports.push({
      viewport: vp.name,
      overflowPx: metrics.overflowPx,
      undersizedTapTargets: metrics.undersizedCount,
      undersizedSample: metrics.undersizedSample,
      consoleErrors: errors,
      screenshot: shotPath,
    });

    await context.close();
  }
} finally {
  await browser.close();
}

const reportPath = path.join(outDir, 'probe-summary.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.passed ? 0 : 1);
