import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Theme } from '../dist/index';

const darkTheme: Theme = {
  palette: {
    light: 'white',
    base: 'pink',
    dark: '',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Default</Text>
      <Button title="PRESS ME" />

      <Text>Color and Variant</Text>
      <Button title="PRESS ME" color="danger" />

      <Button title="PRESS ME" variant="outline" />

      <Text>Small</Text>
      <Button title="PRESS ME" size="s" />

      <Text>Large</Text>
      <Button title="PRESS ME" size="m" />

      <Text>Full Width</Text>
      <Button title="PRESS ME" fullWidth={true} />

      <Text>Custom Theme</Text>
      <ThemeProvider theme={darkTheme}>
        <Button title="PRESS ME" />
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
