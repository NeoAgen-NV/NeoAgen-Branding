// NeoAgen Brand Assets - Main Entry Point

// Brand Colors
export const colors = {
  primary: '#0047ab',
  secondary: '#13aaff', 
  navy: '#0d153f',
  white: '#ffffff',
  black: '#000000'
};

// Semantic Color Tokens
export const tokens = {
  colors: {
    brand: {
      primary: colors.primary,
      secondary: colors.secondary
    },
    text: {
      primary: colors.navy,
      inverse: colors.white,
      brand: colors.primary
    },
    background: {
      primary: colors.white,
      secondary: colors.navy,
      brand: colors.primary
    }
  }
};

// Asset Paths
export const assets = {
  logos: {
    primary: '/assets/logos/svg/logo-primary.svg',
    reversed: '/assets/logos/svg/logo-reversed.svg',
    monochrome: '/assets/logos/svg/logo-monochrome.svg',
    horizontal: '/assets/logos/svg/logo-horizontal.svg'
  },
  icons: {
    emblem: '/assets/icons/svg/emblem.svg'
  },
  favicons: {
    small: '/assets/favicons/favicon-16x16.png',
    large: '/assets/favicons/favicon-32x32.png'
  }
};

// Responsive Asset Helper
export const getResponsiveAsset = (basePath, size = '1x') => {
  const ext = basePath.split('.').pop();
  const pathWithoutExt = basePath.replace(`.${ext}`, '');
  return size === '1x' ? basePath : `${pathWithoutExt}@${size}.${ext}`;
};

// Logo Selection Helper
export const getLogo = (variant = 'primary', format = 'svg') => {
  const logoMap = {
    primary: 'logo-primary',
    reversed: 'logo-reversed', 
    monochrome: 'logo-monochrome',
    horizontal: 'logo-horizontal'
  };
  
  return `/assets/logos/${format}/${logoMap[variant]}.${format}`;
};

// CSS Custom Properties Generator
export const getCSSVariables = () => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    acc[`--neoagen-${key}`] = value;
    return acc;
  }, {});
};

// Default export
export default {
  colors,
  tokens,
  assets,
  getResponsiveAsset,
  getLogo,
  getCSSVariables
};