import React from 'react';
import { Button, ThemeProvider, Theme, Paragraph } from '../src';

export default {
  title: 'Buttons',
};

export const Primary = () => <Button>PRESS ME</Button>;

export const Danger = () => <Button color="danger">PRESS ME</Button>;

export const Outline = () => <Button variant="outline">PRESS ME</Button>;

export const Small = () => <Button size="s">PRESS ME</Button>;

export const Large = () => <Button size="l">PRESS ME</Button>;

export const FullWidth = () => <Button fullWidth={true}>PRESS ME</Button>;

export const WithThemeProvider = () => {
  const custonTheme: Theme = {
    palette: {
      light: '',
      base: 'pink',
      dark: '',
    },
  };
  return (
    <ThemeProvider theme={custonTheme}>
      <Button variant="outline">PRESS ME</Button>
    </ThemeProvider>
  );
};
