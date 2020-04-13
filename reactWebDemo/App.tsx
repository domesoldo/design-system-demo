import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Theme, Paragraph } from '../dist/index';

const darkTheme: Theme = {
  palette: {
    light: 'white',
    base: 'black',
    dark: '',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={darkTheme}>
        <Paragraph size="l" weight="bold">
          Hello there!
        </Paragraph>
      </ThemeProvider>

      <ThemeProvider theme={darkTheme}>
        <Button size="m">PRESS ME</Button>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
