import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Alert } from 'react-native';

import Player from '../../components/Player';
import splitArray from '../../utils/array.split';

export default class GameRound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: this.generatePlayers()
        };
    }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderPlayers() }
            </View>
        );
    }

    renderPlayers() {
        const sides = ['first', 'second'];
        const columns = splitInHalf(this.state.players);

        return columns.map((players, column) => (
            <View key={`playerColumn${column}`} style={ [styles.column, styles[sides[column] + 'Column']] }>
                { players.map((player) => (
                    <Player
                        key={`playerContainer${player.id}`}
                        player={player}
                        onGameOver={ (isGameOver) => this.playerGameOver(player, isGameOver) }
                        style={ styles[sides[column] + 'Player'] } />
                )) }
            </View>
        ));
    }
    
    generatePlayers() {
        const players = [];
        const { numberOfPlayers, startingLifeTotal } = this.props;
        
        for (let id = 0; id < numberOfPlayers; id++) {
            players.push({
                id,
                name: 'Player ' + (id+1),
                life: startingLifeTotal,
                isGameOver: false
            });
        }
        
        return players;
    }

    playerGameOver(player, isGameOver) {
        const self = this;
        let gameOverPlayers = 0;
        
        player.isGameOver = isGameOver;

        for (let p of this.state.players) {
            if (p.isGameOver) {
                gameOverPlayers++;
            }
        }

        if ((this.props.numberOfPlayers - gameOverPlayers) <= 1) {
            Alert.alert('Game Over', 'Play again?', [
                { text: 'Yes', onPress: () => self.props.onGameEnd(true) },
                { text: 'No', onPress: () => self.props.onGameEnd(false) }
            ], { cancelable: false });
        }
    }
}

GameRound.propsTypes = {
    numberOfPlayers: PropTypes.number.isRequired,
    startingLifeTotal: PropTypes.number.isRequired,
    onGameEnd: PropTypes.func
};

GameRound.defaultProps = {
    onGameEnd: () => {}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        width: '50%',
    },
    firstColumn: {
        //
    },
    secondColumn: {
        //
    },
    firstPlayer: {
        //
    },
    secondPlayer: {
        //
    }
});

const splitInHalf = (arr) => {
    const half = Math.ceil(arr.length / 2);
    
    return splitArray(arr, [(item, idx) => idx < half, (item, idx) => idx >= half], true)
};
