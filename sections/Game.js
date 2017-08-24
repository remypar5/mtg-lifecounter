import React from 'react';
import { StyleSheet, View } from 'react-native';

import Player from '../components/Player';
import GameSettings from './Game/GameSettings';
import GameRound from './Game/GameRound';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers: 0,
            startingLifeTotal: 0
        };

        this.startGame = this.startGame.bind(this);
    }
    
    render() {
        const playing = this.state.numberOfPlayers && this.state.startingLifeTotal;
        
        return (
            <View style={ styles.container }>
                { !playing ?
                    <GameSettings onStart={ this.startGame } />
                    : <GameRound 
                        numberOfPlayers={ this.state.numberOfPlayers }
                        startingLifeTotal={ this.state.startingLifeTotal } />
                }
            </View>
        );
    }

    startGame(numberOfPlayers, startingLifeTotal) {
        this.setState({
            numberOfPlayers,
            startingLifeTotal
        });
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25        
    }
});
