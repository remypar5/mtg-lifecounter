import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import Player from '../../components/Player';
import splitArray from '../../utils/array.split';

export default class GameRound extends React.Component {
    constructor(props) {
        super(props);

        this.players = this.generatePlayers();
    }

    // TODO: Lock screen's orientation to portrait after ejecting
    // componentDidMount() {
    //     Orientation.lockToPortrait();
    // }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderPlayers() }
            </View>
        );
    }

    renderPlayers() {
        const sides = ['first', 'second'];
        const columns = splitInHalf(this.players);

        return columns.map((players, column) => (
            <View key={`playerColumn${column}`} style={ [styles.column, styles[sides[column] + 'Column']] }>
                { players.map((player) => (
                    <Player key={`playerContainer${player.id}`} player={player} style={ styles[sides[column] + 'Player'] } />
                )) }
            </View>
        ));
    }
    
    generatePlayers() {
        const players = [];
        const props = this.props;
        
        for (let id = 0; id < props.numberOfPlayers; id++) {
            players.push({
                id,
                name: 'Player ' + (id+1),
                life: props.startingLifeTotal
            });
        }
        
        return players;
    }
}

GameRound.propsTypes = {
    numberOfPlayers: PropTypes.number.isRequired,
    startingLifeTotal: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
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
