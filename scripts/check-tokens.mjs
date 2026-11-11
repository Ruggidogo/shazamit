// Verifica i divieti di design-system/MASTER.md sul codice sorgente.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const rules = [
  [/className=[^>]*?\b[a-z-]+-\[[^\]]+\]/, 'valore arbitrario Tailwind (es. text-[17px])'],
  [/\b[a-z]+-\[[^\]]+\]/, 'valore arbitrario Tailwind'],
  [/#[0-9a-fA-F]{3,8}\b(?![^'"]*['"]\s*:)/, 'colore esadecimale fuori da tailwind.config'],
  [/href=["']#["']/, 'href="#"'],
  [/\brounded-(full|lg|xl|2xl|3xl)\b/, 'raggio fuori sistema / bottone pill'],
  [/\bshadow-(?!none)\w+/, 'ombra'],
  [/gradient/i, 'gradiente'],
  [/backdrop-|blur\(/, 'glassmorphism / blur'],
  [/style=\{\{[^}]*(color|fontSize|padding|margin|borderRadius|boxShadow)/, 'stile inline fuori sistema'],
];

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : /\.(tsx?|css)$/.test(f) && files.push(p);
});
walk('src');

let errors = 0;
for (const f of files) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    if (line.includes('check-tokens-ignore')) return;
    for (const [re, msg] of rules) {
      if (re.test(line)) {
        errors++;
        console.error(`${f}:${i + 1}  ${msg}\n    ${line.trim()}`);
      }
    }
  });
}
if (errors) {
  console.error(`\n✖ ${errors} violazioni del design system`);
  process.exit(1);
}
console.log(`✔ design system rispettato (${files.length} file controllati)`);
