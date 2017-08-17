import React from 'react';
import { StyleSheet, View, ToolbarAndroid } from 'react-native';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="MTG Lifecounter" />
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
  },
  toolbar: {
    height: 50,
    backgroundColor: 'steelblue'
  }
});
