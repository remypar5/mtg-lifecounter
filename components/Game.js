import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Player from './Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startingLifeTotal: props.startingLifeTotal,
            numberOfPlayers: props.numberOfPlayers,
            players: []
        }
    }

    componentWillMount() {
        this.setState({
            players: this.generatePlayers()
        });
    }
    
    render() {
        return (
            <View>
                <Text style={styles.title}>Current Game</Text>
                { this.state.players.map(this.renderPlayer) }
            </View>
        );
    }
    
    renderPlayer(player, key) {
      return (
        <Player key={key} player={player} />
      );
    }

    generatePlayers() {
        const players = [];

        for (let i = 0; i < this.state.numberOfPlayers; i++) {
            players.push({
                id: i,
                name: 'Speler ' + (i+1),
                life: this.state.startingLifeTotal
            });
        }
        
        return players;
    }
}

Game.defaultProps = {
    startingLifeTotal: 100,
    numberOfPlayers: 3
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'steelblue'
    }
});
