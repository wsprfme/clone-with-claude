#!/usr/bin/env node
// Automates clone-website Phase 0: scaffold a new isolated site project,
// install deps, verify the build, register a free dev-server port, and
// log the clone in docs/CLONE_LOG.md. Deterministic — no LLM hand-edits
// of launch.json/CLONE_LOG.md needed.
//
// Usage:
//   node new-site.mjs <url> [--folder <custom-name>]
//   node new-site.mjs --complete <folder-name>

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../../');
const templateDir = path.join(repoRoot, '.claude/templates/nextjs-base');
const launchPath = path.join(repoRoot, '.claude/launch.json');
const cloneLogPath = path.join(repoRoot, 'docs/CLONE_LOG.md');

function sanitizeName(raw) {
  return raw
    .toLowerCase()
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => server.close(() => resolve(true)));
    server.listen(port, '0.0.0.0');
  });
}

async function findFreePort(usedPorts) {
  let port = 3000;
  while (usedPorts.has(port) || !(await isPortFree(port))) port++;
  return port;
}

function readLaunchConfig() {
  if (!fs.existsSync(launchPath)) return { version: '0.0.1', configurations: [] };
  return JSON.parse(fs.readFileSync(launchPath, 'utf8'));
}

function ensureCloneLog() {
  if (fs.existsSync(cloneLogPath)) return;
  fs.mkdirSync(path.dirname(cloneLogPath), { recursive: true });
  fs.writeFileSync(
    cloneLogPath,
    '# Clone Log\n\nLedger of every site cloned in this workspace.\n\n' +
      '| Site | Source URL | Folder | Port | Status |\n' +
      '|------|-----------|--------|------|--------|\n'
  );
}

async function markComplete(folderName) {
  if (!fs.existsSync(cloneLogPath)) {
    console.error(`No CLONE_LOG.md found at ${cloneLogPath}`);
    process.exit(1);
  }
  const lines = fs.readFileSync(cloneLogPath, 'utf8').split('\n');
  let found = false;
  const updated = lines.map((line) => {
    if (line.startsWith(`| ${folderName} `) && line.includes('in progress')) {
      found = true;
      return line.replace(/\|\s*in progress\s*\|$/, '| complete |');
    }
    return line;
  });
  if (!found) {
    console.error(`No "in progress" row for "${folderName}" found in CLONE_LOG.md`);
    process.exit(1);
  }
  fs.writeFileSync(cloneLogPath, updated.join('\n'));
  console.log(JSON.stringify({ folder: folderName, status: 'complete' }, null, 2));
}

async function scaffoldSite(url, folderOverride) {
  let folderName = folderOverride ? sanitizeName(folderOverride) : sanitizeName(new URL(url).hostname);
  const folderPath = path.join(repoRoot, folderName);

  if (fs.existsSync(folderPath)) {
    console.error(
      `Folder "${folderName}/" already exists. Ask the user whether to overwrite, use --folder <new-name> to version it (e.g. ${folderName}-2), or skip this URL.`
    );
    process.exit(2); // distinct exit code = collision, not a generic failure
  }

  if (!fs.existsSync(templateDir)) {
    console.error(`Template not found at ${templateDir}`);
    process.exit(1);
  }

  console.error(`Scaffolding ${folderName}/ from template...`);
  fs.cpSync(templateDir, folderPath, { recursive: true });

  console.error(`Installing dependencies in ${folderName}/...`);
  execSync('npm install', { cwd: folderPath, stdio: 'inherit' });

  console.error(`Verifying build in ${folderName}/...`);
  execSync('npm run build', { cwd: folderPath, stdio: 'inherit' });

  const launch = readLaunchConfig();
  const usedPorts = new Set(launch.configurations.map((c) => c.port));
  const port = await findFreePort(usedPorts);

  launch.configurations.push({
    name: `${folderName}-dev`,
    runtimeExecutable: 'npm',
    runtimeArgs: ['--prefix', folderName, 'run', 'dev'],
    port,
  });
  fs.mkdirSync(path.dirname(launchPath), { recursive: true });
  fs.writeFileSync(launchPath, JSON.stringify(launch, null, 2) + '\n');

  ensureCloneLog();
  fs.appendFileSync(
    cloneLogPath,
    `| ${folderName} | ${url} | \`${folderName}/\` | ${port} | in progress |\n`
  );

  console.log(
    JSON.stringify(
      { folder: `${folderName}/`, launchConfigName: `${folderName}-dev`, port, url },
      null,
      2
    )
  );
}

const args = process.argv.slice(2);
if (args[0] === '--complete') {
  await markComplete(args[1]);
} else {
  const url = args[0];
  const folderFlagIndex = args.indexOf('--folder');
  const folderOverride = folderFlagIndex !== -1 ? args[folderFlagIndex + 1] : null;
  if (!url) {
    console.error('Usage: node new-site.mjs <url> [--folder <custom-name>]');
    process.exit(1);
  }
  await scaffoldSite(url, folderOverride);
}
