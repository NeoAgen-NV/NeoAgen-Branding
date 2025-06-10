# NeoAgen Brand Assets - Developer Integration Guide

## 🚀 Quick Start

### Installation

```bash
# Install from GitHub Packages (recommended)
npm install @neoagen/brand-assets

# Or install from GitHub directly
npm install git+https://github.com/NeoAgen-NV/NeoAgen-Branding.git
```

### Basic Usage

```javascript
// Import everything
import NeoAgen from '@neoagen/brand-assets';

// Import specific parts
import { colors, getLogo } from '@neoagen/brand-assets';
import { brandColors } from '@neoagen/brand-assets/colors';
```

## 📦 Package Structure

```
@neoagen/brand-assets/
├── assets/           # Static asset files
├── colors           # Color-only exports
├── css              # CSS variables
├── scss             # SCSS variables
└── index            # Main entry (default)
```

## 🎨 Working with Colors

### JavaScript/TypeScript

```javascript
import { colors, tokens } from '@neoagen/brand-assets';

// Brand colors
console.log(colors.primary);    // '#0047ab'
console.log(colors.secondary);  // '#13aaff'

// Semantic tokens
const theme = {
  textColor: tokens.colors.text.primary,
  backgroundColor: tokens.colors.background.primary
};
```

### CSS Variables

```css
/* Import CSS variables */
@import '@neoagen/brand-assets/css';

.header {
  background-color: var(--neoagen-primary);
  color: var(--neoagen-white);
}

/* Or use utility classes */
.brand-button {
  @apply neoagen-bg-brand neoagen-text-inverse;
}
```

### SCSS Variables

```scss
// Import SCSS variables
@import '@neoagen/brand-assets/scss';

.hero-section {
  background: linear-gradient(45deg, $neoagen-primary, $neoagen-secondary);
  color: $neoagen-white;
}
```

## 🖼️ Working with Assets

### Static Asset Paths

```javascript
import { assets, getLogo } from '@neoagen/brand-assets';

// Direct paths
const logoPath = assets.logos.primary;
const iconPath = assets.icons.emblem;

// Helper function
const horizontalLogo = getLogo('horizontal', 'svg');
```

### React Integration

```jsx
import React from 'react';
import { getLogo, colors } from '@neoagen/brand-assets';

function Header() {
  return (
    <header style={{ backgroundColor: colors.primary }}>
      <img 
        src={getLogo('horizontal')} 
        alt="NeoAgen" 
        height="40"
      />
    </header>
  );
}
```

### Vue.js Integration

```vue
<template>
  <header :style="{ backgroundColor: brandColors.primary }">
    <img :src="logoUrl" alt="NeoAgen" height="40" />
  </header>
</template>

<script>
import { getLogo, colors } from '@neoagen/brand-assets';

export default {
  data() {
    return {
      logoUrl: getLogo('primary'),
      brandColors: colors
    };
  }
};
</script>
```

### Next.js Integration

```jsx
// pages/_app.js
import '@neoagen/brand-assets/css';

// components/Logo.jsx
import { getLogo } from '@neoagen/brand-assets';
import Image from 'next/image';

export default function Logo({ variant = 'primary' }) {
  return (
    <Image
      src={getLogo(variant)}
      alt="NeoAgen"
      width={120}
      height={40}
    />
  );
}
```

### Angular Integration

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { getLogo, colors } from '@neoagen/brand-assets';

@Component({
  selector: 'app-root',
  template: `
    <header [style.background-color]="brandColors.primary">
      <img [src]="logoUrl" alt="NeoAgen" height="40">
    </header>
  `
})
export class AppComponent {
  logoUrl = getLogo('horizontal');
  brandColors = colors;
}
```

## 🎯 Responsive Assets

### High-DPI Display Support

```javascript
import { getResponsiveAsset } from '@neoagen/brand-assets';

// Get different resolutions
const logo1x = getResponsiveAsset('/assets/logos/png/logo-primary.png', '1x');
const logo2x = getResponsiveAsset('/assets/logos/png/logo-primary.png', '2x');
const logo3x = getResponsiveAsset('/assets/logos/png/logo-primary.png', '3x');
```

### HTML Picture Element

```html
<picture>
  <source 
    media="(min-resolution: 3dppx)" 
    srcset="/assets/logos/png/logo-primary@3x.png"
  >
  <source 
    media="(min-resolution: 2dppx)" 
    srcset="/assets/logos/png/logo-primary@2x.png"
  >
  <img 
    src="/assets/logos/png/logo-primary@1x.png" 
    alt="NeoAgen"
  >
</picture>
```

## 🔧 Build Tool Integration

### Webpack

```javascript
// webpack.config.js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/@neoagen/brand-assets/assets',
          to: 'assets/brand'
        }
      ]
    })
  ]
};
```

### Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      external: ['@neoagen/brand-assets/assets/**']
    }
  }
});
```

### Rollup

```javascript
// rollup.config.js
import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    copy({
      targets: [
        {
          src: 'node_modules/@neoagen/brand-assets/assets/**/*',
          dest: 'public/assets/brand'
        }
      ]
    })
  ]
};
```

## 🎨 Design System Integration

### Tailwind CSS

```javascript
// tailwind.config.js
const { colors } = require('@neoagen/brand-assets');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: colors.primary,
          secondary: colors.secondary,
          navy: colors.navy
        }
      }
    }
  }
};
```

### Styled Components

```javascript
import styled from 'styled-components';
import { colors } from '@neoagen/brand-assets';

const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  
  &:hover {
    background-color: ${colors.secondary};
  }
`;
```

### Emotion

```javascript
import { css } from '@emotion/react';
import { colors } from '@neoagen/brand-assets';

const buttonStyles = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  
  &:hover {
    background-color: ${colors.secondary};
  }
`;
```

## 📱 Mobile Development

### React Native

```javascript
import { colors } from '@neoagen/brand-assets';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    color: colors.white
  }
});
```

### Flutter

```dart
// Create a constants file
class NeoAgenColors {
  static const Color primary = Color(0xFF0047AB);
  static const Color secondary = Color(0xFF13AAFF);
  static const Color navy = Color(0xFF0D153F);
}
```

## 🔍 TypeScript Support

Full TypeScript support is included:

```typescript
import { BrandColors, LogoVariant } from '@neoagen/brand-assets';

const colors: BrandColors = {
  primary: '#0047ab',
  secondary: '#13aaff',
  // ... other colors
};

const variant: LogoVariant = 'horizontal';
```

## 🚦 Version Management

### Semantic Versioning

- **Major (1.0.0)**: Breaking changes to API or asset structure
- **Minor (1.1.0)**: New assets or features added
- **Patch (1.1.1)**: Bug fixes, optimizations

### Staying Updated

```bash
# Check for updates
npm outdated @neoagen/brand-assets

# Update to latest version
npm update @neoagen/brand-assets

# Install specific version
npm install @neoagen/brand-assets@^1.2.0
```

## 🏗️ Advanced Usage

### Custom Asset Loading

```javascript
import { assets } from '@neoagen/brand-assets';

// Dynamic import for code splitting
async function loadLogo(variant) {
  const { getLogo } = await import('@neoagen/brand-assets');
  return getLogo(variant);
}
```

### Theme Switching

```javascript
import { colors, tokens } from '@neoagen/brand-assets';

const createTheme = (isDark = false) => ({
  colors: {
    text: isDark ? colors.white : tokens.colors.text.primary,
    background: isDark ? colors.navy : tokens.colors.background.primary
  }
});
```

## 🔒 Security & Compliance

- Assets are served with proper CORS headers
- No external dependencies or tracking
- All assets are optimized and sanitized
- Follows enterprise security best practices

## ⚡ Performance Optimization

### Asset Optimization

```javascript
// Lazy load assets
const LazyLogo = React.lazy(() => import('./Logo'));

// Preload critical assets
useEffect(() => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = getLogo('primary');
  link.as = 'image';
  document.head.appendChild(link);
}, []);
```

### Bundle Size Optimization

```javascript
// Import only what you need
import { colors } from '@neoagen/brand-assets/colors';

// Instead of
import { colors } from '@neoagen/brand-assets';
```

## 🆘 Troubleshooting

### Common Issues

**Asset not loading:**
```javascript
// Ensure correct path resolution
const logoPath = process.env.NODE_ENV === 'production' 
  ? '/assets/brand/logos/svg/logo-primary.svg'
  : getLogo('primary');
```

**TypeScript errors:**
```bash
# Install type definitions
npm install --save-dev @types/node
```

**Build errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/NeoAgen-NV/NeoAgen-Branding/issues)
- **Documentation**: [Brand Guidelines](./README.md)
- **Updates**: Watch repository for release notifications

## 📄 License

Brand assets are proprietary to NeoAgen. Usage restricted to authorized applications and partners.

---

*Generated for NeoAgen Brand Assets v1.0.0*