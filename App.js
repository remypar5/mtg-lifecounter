import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './components/Player';

const players = [
  { name: 'Player 1', life: 40 },
  { name: 'Player 2', life: 40 },
  // { name: 'Player 3', life: 40 },
  // { name: 'Player 4', life: 40 },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { players.map(this.renderPlayer) }
      </View>
    );
  }
  
  renderPlayer(player, key) {
    return (
      <Player key={key} player={player} />
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
