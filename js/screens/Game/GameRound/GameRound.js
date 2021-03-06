import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import { makePairs } from './utils';
import { KeepAlive, Player, PageContainer } from '../../../components';
import { flattenStyles } from '../../../utils';

export default class GameRound extends React.Component {
    constructor(props) {
        super(props);

        this.confirmGameOver = true;
        this.players = this.generatePlayers();

        this.state = {
            roundNumber: 1,
        };

        this.onBackPress = this.onBackPress.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress() {
        const { index, dispatch } = this.props.navigation;
        if (index === 0) {
            return false;
        }

        Alert.alert('Exit game', 'Are you sure?', [
            { text: 'Yes', onPress: () => dispatch(NavigationActions.back()) },
            { text: 'No' },
        ]);

        return true;
    }

    generatePlayers() {
        const colors = ['#57719e', '#d83f2d', '#95b54c', '#efd86f', '#b2b2b0', '#cb8034'];
        const players = [];
        const { numberOfPlayers, startingLifeTotal: life } = this.props;

        for (let id = 0; id < numberOfPlayers; id++) {
            players.push({
                id,
                name: `Player ${id + 1}`,
                life,
                isGameOver: false,
                color: colors[id],
            });
        }

        return players;
    }

    restart() {
        this.players = this.generatePlayers();

        this.setState(({ roundNumber }) => ({
            roundNumber: roundNumber + 1,
        }));
        this.confirmGameOver = true;
    }

    playerGameOver(player, isGameOver) {
        const self = this;
        const { numberOfPlayers, navigation } = this.props;
        const { goBack } = navigation;
        const minDeadPlayers = this.players.length === 1 ? 0 : 1;
        let gameOverPlayers = 0;

        // eslint-disable-next-line no-param-reassign
        player.isGameOver = isGameOver;

        this.players.forEach((p) => {
            if (p.isGameOver) {
                gameOverPlayers++;
            }
        });

        if (this.confirmGameOver && (numberOfPlayers - gameOverPlayers) <= minDeadPlayers) {
            Alert.alert('Game Over', 'What do you want to do?', [
                {
                    text: 'Continue game',
                    onPress: () => {
                        self.confirmGameOver = false;
                        Alert.alert('Continue game', 'Press the back button on your device to exit the game.');
                    },
                },
                { text: 'Exit', onPress: () => goBack() },
                { text: 'Restart', onPress: () => self.restart() },
            ], { cancelable: true });
        }
    }

    renderSinglePlayer(player, playerProps = {}) {
        const props = {
            size: this.players.length > 2 ? 'small' : 'large',
            ...playerProps,
            player,
        };

        return (
            <Player
                {...props}
                onGameOver={(isGameOver) => this.playerGameOver(player, isGameOver)}
            />
        );
    }

    renderTwoPlayers() {
        const [player1, player2] = this.players;
        const { asColumn, rotated180 } = styles;

        return (
            <View style={asColumn}>
                <View style={flattenStyles(asColumn, rotated180)}>
                    {this.renderSinglePlayer(player2)}
                </View>
                <View style={asColumn}>
                    {this.renderSinglePlayer(player1)}
                </View>
            </View>
        );
    }

    renderMultiPlayer() {
        const { length: nrOfPlayers } = this.players;
        const rows = makePairs(this.players);
        const { asRow } = styles;
        const rowStyle = [asRow, { width: '100%' }];

        return rows.map((players, row) => (
            <View key={`playersRow${`${row}`}`} style={flattenStyles(rowStyle, { flex: nrOfPlayers === 3 ? players.length : 1 })}>
                { players.map((player) => this.renderSinglePlayer(player, {
                    key: `player${player.id}`,
                })) }
            </View>
        ));
    }

    renderPlayers() {
        const { length } = this.players;
        const renderMorePlayers = length === 2
            ? this.renderTwoPlayers.bind(this)
            : this.renderMultiPlayer.bind(this);

        return length === 1
            ? this.renderSinglePlayer(this.players[0])
            : renderMorePlayers();
    }

    render() {
        const { stayAwake } = this.props;
        const { roundNumber } = this.state;
        const { asColumn } = styles;

        return (
            <PageContainer key={`round${roundNumber}`} style={asColumn}>
                { stayAwake ? <KeepAlive /> : null }
                { this.renderPlayers() }
            </PageContainer>
        );
    }
}

GameRound.propTypes = {
    stayAwake: PropTypes.bool,
    numberOfPlayers: PropTypes.number.isRequired,
    startingLifeTotal: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        index: PropTypes.number,
    }).isRequired,
};

GameRound.defaultProps = {
    stayAwake: false,
};
