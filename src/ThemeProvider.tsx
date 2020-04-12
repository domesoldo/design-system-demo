import * as React from 'react';
import { Theme } from './themes';
import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  theme: Theme;
}

export class ThemeProvider extends React.Component<ThemeProviderProps> {
  render() {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
