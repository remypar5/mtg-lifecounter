import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Alert, BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import Player from '../../components/Player';
import splitArray from '../../utils/array.split';

export default class GameRound extends React.Component {

    confirmGameOver = true;

    constructor(props) {
        super(props);

        this.players = this.generatePlayers();

        this.state = {
            roundNumber: 1
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    render() {
        const {length} = this.players;
        return (
            <View style={ styles.container } key={ `round${this.state.roundNumber}` }>
                { length === 1 ?
                    this.renderSinglePlayer() :
                    ( length === 2 ?
                        this.renderTwoPlayers() :
                        this.renderPlayers()) }
            </View>
        );
    }

    renderSinglePlayer() {
        const player = this.players[0];

        return (
            <Player
                player={player}
                onGameOver={ (isGameOver) => this.playerGameOver(player, isGameOver) } />
        );
    }

    renderTwoPlayers() {
        return (
            <View style={styles.asColumn}>
                <View style={[styles.asColumn, styles.rotated180]}><Player player={this.players[1]} /></View>
                <View style={[styles.asColumn]}><Player player={this.players[0]} /></View>
            </View>
        );
    }

    renderPlayers() {
        const sides = ['first', 'second'];
        const columns = splitInHalf(this.players);

        return columns.map((players, column) => (
            <View key={`playerColumn${column}`} style={ [styles.column, styles[sides[column] + 'Column']] }>
                { players.map((player) => (
                    <Player
                        key={`player${player.id}`}
                        player={player}
                        onGameOver={ (isGameOver) => this.playerGameOver(player, isGameOver) }
                        style={ styles[sides[column] + 'Player'] } />
                )) }
            </View>
        ));
    }

    generatePlayers() {
        const colors = ['#57719e', '#d83f2d', '#95b54c', '#efd86f', '#b2b2b0', '#cb8034'];
        const players = [];
        const { numberOfPlayers, startingLifeTotal } = this.props;

        for (let id = 0; id < numberOfPlayers; id++) {
            players.push({
                id,
                name: 'Player ' + (id+1),
                life: startingLifeTotal,
                isGameOver: false,
                color: colors[id]
            });
        }

        return players;
    }

    playerGameOver(player, isGameOver) {
        const self = this;
        const { numberOfPlayers } = this.props;
        const { goBack } = this.props.navigation;
        const minDeadPlayers = this.players.length === 1 ? 0 : 1;
        let gameOverPlayers = 0;

        player.isGameOver = isGameOver;

        for (let p of this.players) {
            if (p.isGameOver) {
                gameOverPlayers++;
            }
        }

        if (this.confirmGameOver && (numberOfPlayers - gameOverPlayers) <= minDeadPlayers) {
            Alert.alert('Game Over', 'What do you want to do?', [
                {
                    text: 'Continue game', onPress: () => {
                        self.confirmGameOver = false;
                        Alert.alert('Continue game', 'Press the back button on your device to exit the game.');
                    }
                },
                { text: 'Exit', onPress: () => goBack() },
                { text: 'Restart', onPress: () => self.setState({ roundNumber: this.state.roundNumber + 1 }) },
            ], { cancelable: true });
        }
    }

    onBackPress = () => {
        const { navigation } = this.props;
        if (navigation.index === 0) {
            return false;
        }

        Alert.alert('Exit game', 'Are you sure?', [
            { text: 'Yes', onPress: () => navigation.dispatch(NavigationActions.back()) },
            { text: 'No' }
        ]);

        return true;
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
        backgroundColor: '#161616',
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        width: '50%',
    },
    asColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    rotated180: {
        transform: [
            { rotate: '180deg' }
        ]
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

    return splitArray(arr, [(item, idx) => idx < half, (item, idx) => idx >= half], true);
};
