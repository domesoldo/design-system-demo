import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Paragraph, Button } from '@domsoldo/components-lib';

export default function App() {
  return (
    <View style={styles.container}>
      <Paragraph size="l" color="red">
        Hello
      </Paragraph>
      <Button fullWidth={true}>
        <Text>CLICK ME!</Text>
      </Button>
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
