// NeoAgen Brand Colors - Dedicated Export

export const brandColors = {
  primary: '#0047ab',
  secondary: '#13aaff',
  navy: '#0d153f', 
  white: '#ffffff',
  black: '#000000'
};

export const semanticColors = {
  text: {
    primary: brandColors.navy,
    inverse: brandColors.white,
    brand: brandColors.primary,
    link: brandColors.secondary
  },
  background: {
    primary: brandColors.white,
    secondary: brandColors.navy,
    brand: brandColors.primary
  },
  border: {
    default: brandColors.navy,
    light: brandColors.secondary
  }
};

export const cssVariables = {
  '--neoagen-primary': brandColors.primary,
  '--neoagen-secondary': brandColors.secondary,
  '--neoagen-navy': brandColors.navy,
  '--neoagen-white': brandColors.white,
  '--neoagen-black': brandColors.black,
  '--neoagen-text-primary': semanticColors.text.primary,
  '--neoagen-text-inverse': semanticColors.text.inverse,
  '--neoagen-bg-primary': semanticColors.background.primary,
  '--neoagen-bg-secondary': semanticColors.background.secondary
};

export default {
  brandColors,
  semanticColors,
  cssVariables
};