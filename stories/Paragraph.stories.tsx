import React from 'react';
import { Button, ThemeProvider, Theme, Paragraph } from '../src';

export default {
  title: 'Paragraphs',
};

export const Default = () => <Paragraph>Hello</Paragraph>;

export const Small = () => <Paragraph size="s">Small</Paragraph>;

export const Large = () => <Paragraph size="l">Large</Paragraph>;

export const Bold = () => <Paragraph weight="bold">Bold</Paragraph>;

export const WithThemeProvider = () => {
  const custonTheme: Theme = {
    palette: {
      light: '',
      base: 'purple',
      dark: '',
    },
  };
  return (
    <ThemeProvider theme={custonTheme}>
      <Paragraph>With theme provider</Paragraph>
    </ThemeProvider>
  );
};
