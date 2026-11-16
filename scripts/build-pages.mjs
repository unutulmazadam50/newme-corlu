import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

// Prepare a preview build without changing the production source files.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
if (!repo) throw new Error('GITHUB_REPOSITORY is required');
const base = `/${repo}`;
const origin = 'https://unutulmazadam50.github.io';
const backups = new Map();
function edit(path, transform) {
  const original = readFileSync(path, 'utf8');
  backups.set(path, original);
  writeFileSync(path, transform(original));
}
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);
}
try {
  edit('astro.config.mjs', text => text
    .replace(/site:\s*'[^']*',?/, '')
    .replace(/adapter:\s*node\(\{[\s\S]*?\}\),/, '')
    .replace('defineConfig({', `defineConfig({\n  site: '${origin}',\n  base: '${base}',\n  trailingSlash: 'always',`));
  for (const path of walk('src').filter(p => /\.(astro|ts|js|css)$/.test(p))) {
    edit(path, text => {
      let result = text.replace(/(["'`])\/(?!\/)/g, `$1${base}/`);
      result = result.replaceAll('https://newmecorlu.com', `${origin}${base}`)
        .replaceAll('https://panther01agency.com', `${origin}${base}`);
      if (path.endsWith('ContactForm.astro')) {
        result = result.replace('<form ', '<p role="note">Bu önizlemede mesaj gönderimi kapalıdır.</p>\n<form ')
          .replace('type="submit" data-submit', 'type="submit" disabled data-submit')
          .replace("if (form.dataset.ready === 'true') return;", 'return;');
      }
      return result;
    });
  }
  const api = 'src/pages/api/contact.ts';
  if (existsSync(api)) unlinkSync(api);
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) throw new Error('Preview build failed');
  writeFileSync('dist/.nojekyll', '');
} finally {
  for (const [path, text] of backups) writeFileSync(path, text);
}
