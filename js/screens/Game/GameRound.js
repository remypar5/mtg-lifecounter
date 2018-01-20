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
        const { length } = this.players;
        const { roundNumber } = this.state;

        return (
            <View style={ styles.container } key={ `round${roundNumber}` }>
                { length === 1 ?
                    this.renderSinglePlayer(this.players[0]) :
                    ( length === 2 ?
                        this.renderTwoPlayers() :
                        this.renderPlayers()) }
            </View>
        );
    }

    renderSinglePlayer(player, playerProps = {}) {
        return (
            <Player
                { ...playerProps }
                player={player}
                onGameOver={ (isGameOver) => this.playerGameOver(player, isGameOver) } />
        );
    }

    renderTwoPlayers() {
        const [ player1, player2 ] = this.players;
        const { asColumn, rotated180 } = styles;

        return (
            <View style={ asColumn }>
                <View style={[ asColumn, rotated180 ]}>
                    { this.renderSinglePlayer(player2) }
                </View>
                <View style={[asColumn]}>
                    { this.renderSinglePlayer(player1) }
                </View>
            </View>
        );
    }

    renderPlayers() {
        const columns = splitInHalf(this.players);
        const { column: columnStyle } = styles;

        return columns.map((players, column) => (
            <View key={`playerColumn${column}`} style={ columnStyle }>
                { players.map((player) => this.renderSinglePlayer(player, {
                    key: `player${player.id}`
                })) }
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
        const { numberOfPlayers, navigation } = this.props;
        const { goBack } = navigation;
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
        const { index, dispatch } = this.props.navigation;
        if (index === 0) {
            return false;
        }

        Alert.alert('Exit game', 'Are you sure?', [
            { text: 'Yes', onPress: () => dispatch(NavigationActions.back()) },
            { text: 'No' }
        ]);

        return true;
    }
}

GameRound.propsTypes = {
    numberOfPlayers: PropTypes.number.isRequired,
    startingLifeTotal: PropTypes.number.isRequired,
};

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
            { rotate: '180deg' },
        ]
    },
});

const splitInHalf = (arr) => {
    const half = Math.ceil(arr.length / 2);

    return splitArray(arr, [(item, idx) => idx < half, (item, idx) => idx >= half], true);
};
