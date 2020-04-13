import React from 'react';
import { Button, ThemeProvider, Theme } from '../src';

export default {
  title: 'Buttons',
};

export const Primary = () => <Button title="PRESS ME" />;

export const Danger = () => <Button title="PRESS ME" color="danger" />;

export const Outline = () => <Button title="PRESS ME" variant="outline" />;

export const Small = () => <Button title="PRESS ME" size="s" />;

export const Large = () => <Button title="PRESS ME" size="l" />;

export const FullWidth = () => <Button title="PRESS ME" fullWidth={true} />;

export const WithThemeProvider = () => {
  const custonTheme: Theme = {
    palette: {
      light: 'white',
      base: 'pink',
      dark: '',
    },
  };
  return (
    <ThemeProvider theme={custonTheme}>
      <Button title="PRESS ME" variant="outline" />
    </ThemeProvider>
  );
};
