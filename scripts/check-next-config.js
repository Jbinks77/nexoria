const fs = require('fs');
const path = require('path');

const tsConfigPath = path.join(process.cwd(), 'next.config.ts');

if (fs.existsSync(tsConfigPath)) {
  console.error("Error: 'next.config.ts' is not supported by Next.js/Vercel. Use 'next.config.js' or 'next.config.mjs'.");
  process.exit(1);
}

console.log("Config check OK: no 'next.config.ts' found.");
