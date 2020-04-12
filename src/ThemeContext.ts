import React, { Context } from 'react';
import { defaultTheme } from './themes';
import { Theme } from './themes';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
// export const ThemeContext = React.createContext('light')
export const ThemeContext: Context<Theme> = React.createContext(defaultTheme);
