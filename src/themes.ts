export interface Palette {
  light: string;
  base: string;
  dark: string;
}

export interface Theme {
  palette: Palette | undefined;
}

export const defaultTheme: Theme = {
  palette: undefined,
};
