// NeoAgen Colors - TypeScript Definitions

export interface BrandColors {
  primary: string;
  secondary: string;
  navy: string;
  white: string;
  black: string;
}

export interface SemanticColors {
  text: {
    primary: string;
    inverse: string;
    brand: string;
    link: string;
  };
  background: {
    primary: string;
    secondary: string;
    brand: string;
  };
  border: {
    default: string;
    light: string;
  };
}

export declare const brandColors: BrandColors;
export declare const semanticColors: SemanticColors;
export declare const cssVariables: Record<string, string>;

declare const _default: {
  brandColors: BrandColors;
  semanticColors: SemanticColors;
  cssVariables: Record<string, string>;
};

export default _default;