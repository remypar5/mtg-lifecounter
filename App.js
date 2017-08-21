import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
