import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import colors from source
import { brandColors, cssVariables } from '../src/colors.js';

// Generate CSS variables file
const cssContent = `/* NeoAgen Brand Colors - CSS Custom Properties */
:root {
${Object.entries(cssVariables).map(([key, value]) => `  ${key}: ${value};`).join('\n')}
}

/* Utility classes */
.neoagen-text-primary { color: var(--neoagen-text-primary); }
.neoagen-text-inverse { color: var(--neoagen-text-inverse); }
.neoagen-text-brand { color: var(--neoagen-primary); }
.neoagen-bg-primary { background-color: var(--neoagen-bg-primary); }
.neoagen-bg-secondary { background-color: var(--neoagen-bg-secondary); }
.neoagen-bg-brand { background-color: var(--neoagen-primary); }
`;

// Generate SCSS variables file
const scssContent = `// NeoAgen Brand Colors - SCSS Variables
${Object.entries(brandColors).map(([key, value]) => `$neoagen-${key}: ${value};`).join('\n')}

// Semantic variables
$neoagen-text-primary: $neoagen-navy;
$neoagen-text-inverse: $neoagen-white;
$neoagen-bg-primary: $neoagen-white;
$neoagen-bg-secondary: $neoagen-navy;

// Color map for iteration
$neoagen-colors: (
  'primary': $neoagen-primary,
  'secondary': $neoagen-secondary,
  'navy': $neoagen-navy,
  'white': $neoagen-white,
  'black': $neoagen-black
);
`;

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write files
fs.writeFileSync(path.join(distDir, 'variables.css'), cssContent);
fs.writeFileSync(path.join(distDir, 'variables.scss'), scssContent);

// Copy TypeScript definitions to dist
fs.copyFileSync(
  path.join(__dirname, '../src/index.d.ts'),
  path.join(distDir, 'index.d.ts')
);
fs.copyFileSync(
  path.join(__dirname, '../src/colors.d.ts'),
  path.join(distDir, 'colors.d.ts')
);

console.log('✅ CSS/SCSS variables generated successfully');
console.log('✅ TypeScript definitions copied to dist');