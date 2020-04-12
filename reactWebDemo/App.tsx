import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Theme } from '../dist/index';

const darkTheme: Theme = {
  color: {
    light: 'white',
    base: 'pink',
    dark: '',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Default button</Text>
      <Button title="Hi guys!" />

      <Text>Custom button</Text>
      <ThemeProvider theme={darkTheme}>
        <Button title="Ciao!" />
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
