import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Game from './sections/Game';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
