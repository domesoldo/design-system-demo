import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Theme } from '../dist/index';

const darkTheme: Theme = {
  mode: {
    foreground: 'dark',
    background: 'white',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Custom theme</Text>
      <Button title="Ciao!" />
      {/* <ThemeProvider theme={darkTheme}>
        <Button title="Ciao!" />
      </ThemeProvider> */}
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
