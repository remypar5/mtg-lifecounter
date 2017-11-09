import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Player from '../components/Player';
import GameSettings from './Game/GameSettings';
import GameRound from './Game/GameRound';

export default class Game extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers: 0,
            startingLifeTotal: 0,
            playing: false
        };

        this.startGame = this.startGame.bind(this);
        this.onGameEnd = this.onGameEnd.bind(this);
    }
    
    render() {
        const { numberOfPlayers, startingLifeTotal, playing } = this.state;
        const isPlaying = numberOfPlayers && startingLifeTotal && playing;
        
        return (
            <View style={ styles.container }>
                <GameRound 
                    onGameEnd={ this.onGameEnd }
                    numberOfPlayers={ this.state.numberOfPlayers }
                    startingLifeTotal={ this.state.startingLifeTotal } />
            </View>
        );
    }

    startGame(numberOfPlayers, startingLifeTotal) {
        this.setState({
            numberOfPlayers,
            startingLifeTotal,
            playing: true,
        });
    }
    
    onGameEnd(restart) {
        this.setState({
            playing: !restart
        });
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25        
    }
});
