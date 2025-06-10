// NeoAgen Brand Assets - TypeScript Definitions

export interface BrandColors {
  primary: string;
  secondary: string;
  navy: string;
  white: string;
  black: string;
}

export interface SemanticTokens {
  colors: {
    brand: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      inverse: string;
      brand: string;
    };
    background: {
      primary: string;
      secondary: string;
      brand: string;
    };
  };
}

export interface AssetPaths {
  logos: {
    primary: string;
    reversed: string;
    monochrome: string;
    horizontal: string;
  };
  icons: {
    emblem: string;
  };
  favicons: {
    small: string;
    large: string;
  };
}

export type LogoVariant = 'primary' | 'reversed' | 'monochrome' | 'horizontal';
export type AssetFormat = 'svg' | 'png';
export type ResponsiveSize = '1x' | '2x' | '3x' | '4x';

// Main exports
export declare const colors: BrandColors;
export declare const tokens: SemanticTokens;
export declare const assets: AssetPaths;

// Helper functions
export declare function getResponsiveAsset(basePath: string, size?: ResponsiveSize): string;
export declare function getLogo(variant?: LogoVariant, format?: AssetFormat): string;
export declare function getCSSVariables(): Record<string, string>;

// Default export
declare const _default: {
  colors: BrandColors;
  tokens: SemanticTokens;
  assets: AssetPaths;
  getResponsiveAsset: typeof getResponsiveAsset;
  getLogo: typeof getLogo;
  getCSSVariables: typeof getCSSVariables;
};

export default _default;