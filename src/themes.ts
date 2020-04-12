export interface Mode {
  foreground: string;
  background: String;
}

export interface Theme {
  mode: Mode;
}

export const lightTheme: Theme = {
  mode: {
    foreground: 'white',
    background: 'black',
  },
};
