// Collaudo (Fase 4): node scripts/audit.cjs [baseUrl]
const { chromium } = require('playwright');
const fs = require('fs');
const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const BASE = process.argv[2] || 'http://localhost:5173';
const routes = ['/', '/soluzioni', '/soluzioni/sicurezza-documenti', '/soluzioni/database-publishing', '/soluzioni/workflow-output-management', '/soluzioni/pim-dam', '/prodotti', '/case-study', '/case-study/aswo', '/case-study/vadigran', '/azienda', '/contatti', '/pagina-inesistente'];
const widths = [320, 375, 768, 1024, 1440];
const report = { overflow: [], axe: [], targets: [], focus: [], links: [] };

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ reducedMotion: 'reduce' });
  // 1. Overflow orizzontale + reflow (320 = 1280 @ 400%)
  for (const r of routes) for (const w of widths) {
    const p = await ctx.newPage(); await p.setViewportSize({ width: w, height: 800 });
    await p.goto(BASE + r, { waitUntil: 'networkidle' });
    const [sw, iw] = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
    if (sw > iw) report.overflow.push(`${r} @${w}: scrollWidth ${sw} > ${iw}`);
    await p.close();
  }
  // 2. axe WCAG 2.1 AA (contrasto incluso) a 375 e 1440
  for (const r of routes) for (const w of [375, 1440]) {
    const p = await ctx.newPage(); await p.setViewportSize({ width: w, height: 900 });
    await p.goto(BASE + r, { waitUntil: 'networkidle' });
    await p.addScriptTag({ content: axeSrc });
    const res = await p.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] })).violations
      .map(v => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 3).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n')[1]) })));
    res.forEach(v => report.axe.push({ route: r, w, ...v }));
    await p.close();
  }
  // 3. Target touch >= 44x44 (escluse le parole linkate dentro un paragrafo)
  for (const r of routes) {
    const p = await ctx.newPage(); await p.setViewportSize({ width: 375, height: 900 });
    await p.goto(BASE + r, { waitUntil: 'networkidle' });
    const small = await p.evaluate(() => [...document.querySelectorAll('a[href], button, input, select, textarea, [role=tab]')]
      .filter(el => el.offsetParent !== null && !el.closest('.sr-only') && !(el.tagName === 'A' && el.parentElement.closest('p')))
      .map(el => { const b = el.getBoundingClientRect(); return { t: (el.textContent || el.getAttribute('aria-label') || el.name || '').trim().slice(0, 40), w: Math.round(b.width), h: Math.round(b.height) }; })
      .filter(x => x.h < 44 || x.w < 44));
    small.forEach(s => report.targets.push(`${r}: "${s.t}" ${s.w}x${s.h}`));
    await p.close();
  }
  // 4. Focus visibile: Tab su tutti gli elementi
  for (const r of routes) {
    const p = await ctx.newPage(); await p.setViewportSize({ width: 1440, height: 900 });
    await p.goto(BASE + r, { waitUntil: 'networkidle' });
    const n = await p.evaluate(() => document.querySelectorAll('a[href], button, input, select, textarea, [tabindex="0"]').length);
    for (let i = 0; i < n + 2; i++) {
      await p.keyboard.press('Tab');
      const f = await p.evaluate(() => { const el = document.activeElement; if (!el || el === document.body) return null;
        const cs = getComputedStyle(el); return { t: (el.textContent || el.getAttribute('aria-label') || el.name || el.tagName).trim().slice(0, 30), o: cs.outlineStyle, ow: parseFloat(cs.outlineWidth), oc: cs.outlineColor, inInk: !!el.closest('.on-ink') }; });
      if (f && (f.o === 'none' || f.ow < 2)) report.focus.push(`${r}: "${f.t}" outline ${f.o} ${f.ow}px`);
    }
    await p.close();
  }
  // 5. Link: nessun href="#", rotte interne esistenti, ancore presenti
  const seen = new Set();
  for (const r of routes.slice(0, -1)) {
    const p = await ctx.newPage(); await p.goto(BASE + r, { waitUntil: 'networkidle' });
    const hrefs = await p.evaluate(() => [...document.querySelectorAll('a')].map(a => a.getAttribute('href')));
    for (const h of hrefs) {
      if (h === null || h === '' || h === '#') { report.links.push(`${r}: href vuoto o "#"`); continue; }
      if (/^(https?:|mailto:|tel:)/.test(h) || seen.has(h)) { seen.add(h); continue; }
      seen.add(h);
      const url = new URL(h, BASE + r);
      const q = await ctx.newPage(); await q.goto(url.href, { waitUntil: 'networkidle' });
      const ok = await q.evaluate((hash) => ({ nf: document.body.innerText.includes('Questa pagina non esiste'), anchor: !hash || !!document.getElementById(decodeURIComponent(hash.slice(1))) }), url.hash);
      if (ok.nf) report.links.push(`${r} → ${h}: pagina 404`);
      if (!ok.anchor) report.links.push(`${r} → ${h}: ancora mancante`);
      await q.close();
    }
    await p.close();
  }
  console.log(`link controllati: ${seen.size}`);
  await b.close();
  for (const [k, v] of Object.entries(report)) { console.log(`\n== ${k}: ${v.length}`); v.forEach(x => console.log(typeof x === 'string' ? '  ' + x : '  ' + JSON.stringify(x))); }
})();
