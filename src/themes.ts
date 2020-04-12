export interface Color {
  light: string;
  base: string;
  dark: string;
}

export interface Theme {
  color: Color | undefined;
}

export const defaultTheme: Theme = {
  color: undefined,
};
